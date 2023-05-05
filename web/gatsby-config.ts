require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet-async",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        markdownImages: {
          typesToParse: {
            article: ["content"],
          },
        },
        collectionTypes: [
          {
            singularName: "article",
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
              populate: {
                cover: "*",
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "author",
          },
          {
            singularName: "category",
          },
          {
            singularName: "blog",
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                defaultSeo: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "@bakkenbaeck/gatsby-plugin-rename-routes",
      options: {
        rename: {
          "/useCasesSectors/": "/use-cases/",
          "/useCasesSectors/government/": "/use-cases/government/",
          "/useCasesSectors/education/": "/use-cases/education/",
          "/useCasesSectors/finance/": "/use-cases/finance/",
          "/useCasesSectors/web3/": "/use-cases/web3/",
          "/products/gatacaWallet/": "/products/wallet/",
          "/company/aboutUs/": "/company/about/",
          "/company/careers/": "/company/jobs/",
          "/company/contactUs/": "/company/contact/",
          "/company/becomeAPartner/": "/company/partnership/",
          "/privacyPolicy/": "/privacy-policy/",
          "/cookiePolicy/": "/cookie-policy/",
          "/termsOfUse/": "/generic-terms-of-service/",
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
}
