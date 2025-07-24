export default ({ env }) => ({
  url: env('PUBLIC_URL', 'https://panorama-cms-production.up.railway.app'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  transfer: {
    enabled: env.bool('STRAPI_ENABLE_TRANSFER', false),
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
