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
  'strapi::favicon',
  'strapi::public',
];
