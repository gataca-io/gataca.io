const configMeta = require("./content/data/configMetaData.json")

module.exports = {
  //this makes the site config available to forestry cms
  flags: {
    DEV_SSR: false,
    FAST_REFRESH: true
  },
  siteMetadata: {
    metaTitle: configMeta.metaTitle,
    metaDescription: configMeta.description,
    title: configMeta.title,
    siteUrl: "https://www.gataca.io",
    twitterHandler: "@gataca_id",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md-pages`,
        path: `${__dirname}/content/mdpages`,
      },
    },    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md-pages`,
        path: `${__dirname}/content/jobs`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/content/images`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 75
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // {
          //   resolve: "gatsby-remark-relative-images",
          //   options: {
          //     // // [Optional] The root of "media_folder" in your config.yml
          //     // // Defaults to "static"
          //     staticFolderName: '',
          //     // // [Optional] Include the following fields, use dot notation for nested fields
          //     // // All fields are included by default
          //     // include: ['featured'],
          //     // // [Optional] Exclude the following fields, use dot notation for nested fields
          //     // // No fields are excluded by default
          //     exclude: [
          //       'hero_image',
          //       'meta_data.twitter',
          //       'meta_data.facebook_and_whatsapp',
          //       'meta_data.linkedin',
          //       'hero_image'
          //     ],
          //   },
          // },
          {
            resolve: "gatsby-remark-normalize-paths",
            options: {
              // pathFields: ["image", "cover"],
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-133561010-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "GTM-NWKJ6PR",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5V6SH7N",
      
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
      
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    'gatsby-plugin-tslint',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-ts-loader",
    "gatsby-transformer-yaml",
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@sass": "src/sass",
          "@templates": "src/templates",
          "@data": "content/data",
          "@images": "content/images",
          "@posts": "content/posts",
        },
        extensions: [
          "js",
        ],
      }
    },
    {
      resolve: "gatsby-remark-embed-video",
      options: {
        width: 800,
        ratio: 1.77,
        height: 400,
        related: false,
        noIframeBorder: true
      }
    },
    "gatsby-remark-responsive-iframe",
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "4728390",
        respectDNT: true,
        productionOnly: false,
      },
    },
    'gatsby-plugin-remove-console',
  ],
}
