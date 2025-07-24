export default ({ env }) => ({
  url: env('PUBLIC_URL', 'https://panorama-cms-production.up.railway.app'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  transfer: {
    enabled: true, // 👈 active manuellement le transfert
  },
});
