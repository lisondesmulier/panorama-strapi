export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',
        'https://panorama-site.vercel.app',
        'https://panorama-be.com',
        'https://www.panorama-be.com',
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // ✅ Ajout de OPTIONS ici
      headers: [
        'Content-Type',
        'Authorization',
        'Access-Control-Allow-Origin', // ✅ Ajouté
      ],
      credentials: true,
    },
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": ["'self'", 'data:', 'blob:', 'https://res.cloudinary.com'],
          "media-src": ["'self'", 'data:', 'blob:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
  name: 'strapi::session',
  config: {
    secure: process.env.NODE_ENV === 'production',
  },
},
  'strapi::favicon',
  'strapi::public',
];
