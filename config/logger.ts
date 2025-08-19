export default ({ env }) => ({
  level: env('STRAPI_LOG_LEVEL', env('NODE_ENV') === 'production' ? 'error' : 'info'),
});