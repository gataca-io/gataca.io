module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 3, // Default is 5
    },
  },
});
