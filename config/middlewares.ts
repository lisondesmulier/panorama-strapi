export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',                  // Pour le dev local
        'https://panorama-site.vercel.app'        // Pour le déploiement Vercel
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true,
    },
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": ["'self'", 'data:', 'blob:', 'https://res.cloudinary.com'], // si tu utilises Cloudinary
          "media-src": ["'self'", 'data:', 'blob:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
