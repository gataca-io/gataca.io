const configMeta = require("./content/data/configMetaData.json")

module.exports = {
  //this makes the site config available to forestry cms
  siteMetadata: {
    metaTitle: configMeta.metaTitle,
    metaDescription: configMeta.description,
    title: configMeta.title,
    siteUrl: `https://www.gataca.io`,
    twitterHandler: `@gataca_id`,
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
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 75
      }
    },
/*    {
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
    },*/
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
      resolve: 'gatsby-plugin-google-marketing-platform',
      options: {
        dataLayer: {
          gaPropertyId: 'UA/133561010-1',
        },
        tagmanager: {
          id: 'GTM-5V6SH7N'
        },
        analytics: {
          id: 'GTM-NWKJ6PR'
        }
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
