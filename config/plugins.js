module.exports = () => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      landingPage: true, // disable Sandbox everywhere
      depthLimit: 20,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
