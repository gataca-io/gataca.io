const configMeta = require("./content/data/config-metaData.json")

module.exports = {
  //this makes the site config available to forestry cms
  siteMetadata: {
    metaTitle: configMeta.metaTitle,
    metaDescription: configMeta.description,
    title: configMeta.title,
    siteUrl: `https://www.gataca.io`,
  },
  plugins: [
    'gatsby-plugin-tslint',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-ts-loader",
    "gatsby-transformer-yaml",
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 75
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `gataca.io`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        auth: {
          //Create a file named .env in root folder of your project
          //And add there your clientId, clientSecret, WordPressUser and WordPressPassword
          //More info about environment variables: https://www.gatsbyjs.org/docs/environment-variables
          //More info about communicate with wordpress.com API: https://developer.wordpress.com/apps/
          wpcom_app_clientId: process.env.WORDPRESS_CLIENT_ID,
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_user: process.env.WORDPRESS_USER,
          wpcom_pass: process.env.WORDPRESS_PASSWORD
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
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
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          "gatsby-remark-normalize-paths",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-wpgraphql-inline-images',
      options: {
        wordPressUrl: 'https://gataca.io/',
        uploadsUrl: 'https://gataca.io/wp-content/uploads/',
        processPostTypes: ['Page', 'Post', 'CustomPost'],
        graphqlTypeName: 'WPGraphQL',
        httpHeaders: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }
      },
    },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "1234567",
        respectDNT: true,
        productionOnly: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "YOUR_GOOGLE_TAGMANAGER_ID",
      
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      
        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
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
    }
  ],
}
