// config/plugins.ts
export default ({ env }) => ({
  // ❌ inutile si PAS sur Strapi Cloud
  cloud: { enabled: false },

  // ✅ upload via Cloudinary
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
    },
  },
});
