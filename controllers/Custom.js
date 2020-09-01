module.exports = {
  async dashboard(ctx) {
    const webhooks = await strapi.webhookStore.findWebhooks();
    ctx.send({ data: webhooks });
  },
};
