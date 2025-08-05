import nodemailer from 'nodemailer';
import escapeHtml from 'escape-html';
import { checkLimit } from "../../../extensions/rate-limit"; 

export default ({ strapi }: { strapi: any }) => ({
  async send(ctx) {
    const { nom, prenom, email, telephone, besoin, message } = ctx.request.body;
    const ip = ctx.request.ip;

    if (!nom || !prenom || !email || !besoin || !message) {
      ctx.status = 400;
      ctx.body = { success: false, error: "Champs requis manquants" };
      return;
    }

    const isAllowed = checkLimit(ip, 3, 60 * 60 * 1000); // max 3 envois / heure
    if (!isAllowed) {
      ctx.status = 429;
      ctx.body = { success: false, error: "Trop d'envois récents. Réessayez plus tard." };
      return;
    }

    if (message.length > 2000) {
      ctx.status = 400;
      ctx.body = { success: false, error: "Message trop long" };
      return;
    }

    const safeNom = escapeHtml(nom);
    const safePrenom = escapeHtml(prenom);
    const safeEmail = escapeHtml(email);
    const safeTelephone = escapeHtml(telephone);
    const safeBesoin = escapeHtml(besoin);
    const safeMessage = escapeHtml(message);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Panorama Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: safeEmail,
      subject: `Contact de ${safePrenom} ${safeNom}`,
      html: `
        <p><strong>Nom:</strong> ${safeNom}</p>
        <p><strong>Prénom:</strong> ${safePrenom}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Téléphone:</strong> ${safeTelephone}</p>
        <p><strong>Besoin:</strong> ${safeBesoin}</p>
        <p><strong>Message:</strong><br>${safeMessage}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      ctx.body = { success: true };
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        strapi.log.error('Erreur lors de l’envoi du mail', error);
      }
      ctx.status = 500;
      ctx.body = { success: false, error: "Erreur d'envoi" };
    }
  },
});
