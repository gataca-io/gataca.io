module.exports = ({ env }) => [
  "strapi::errors",
  //  'strapi::security',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "platform-lookaside.fbsbx.com", // facebook avatars
            "dl.airtable.com", // strapi marketplace
            "https://dev-strapi-s3-gataca.s3.eu-central-1.amazonaws.com",
            "https://pro-strapi-s3-gataca.s3.eu-west-1.amazonaws.com",
            "https://mediadev-gataca.s3.eu-central-1.amazonaws.com",
            "https://media-gataca.s3.eu-west-1.amazonaws.com",
            `https://${env("AWS_BUCKET_NAME")}.s3.${env(
              "AWS_REGION"
            )}.amazonaws.com`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://dev-strapi-s3-gataca.s3.eu-central-1.amazonaws.com",
            "https://pro-strapi-s3-gataca.s3.eu-west-1.amazonaws.com",
            "https://mediadev-gataca.s3.eu-central-1.amazonaws.com",
            "https://media-gataca.s3.eu-west-1.amazonaws.com",
            `https://${env("AWS_BUCKET")}.s3.${env(
              "AWS_REGION"
            )}.amazonaws.com`,
          ],
          upgradeInsecureRequests: null,
        },
      },
      hsts: {
        maxAge: 63072000,
        includeSubDomains: true,
        preload: true,
      },
      //frameguard: {
      //  action: "deny"
      //}
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
