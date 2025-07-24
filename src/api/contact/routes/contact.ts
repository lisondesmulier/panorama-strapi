export default {
  type: 'content-api',
  routes: [
    {
      method: 'POST',
      path: '/contact/send',
      handler: 'contact.send',
      config: {
        auth: false,
      },
    },
  ],
};
