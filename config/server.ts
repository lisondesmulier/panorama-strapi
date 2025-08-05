export default ({ env }) => ({
  url: env('PUBLIC_URL', 'https://panorama-strapi-production.up.railway.app/'),
  app: {
    keys: env.array('APP_KEYS', [
      '6pL9COvCCr5FSgK3iXligA==',
      'GwFaeKafWvissHbW3ky8Zw==',
      'P5N0agwOQpG4y77HuiDEpg==',
      'UN87UYNahADbfzMTwo9KUQ==',
    ]),
  },
  transfer: {
    enabled: true,
  },
});
