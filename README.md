<h1 align="center">
  Gataca.io
</h1>

##  Quick Setup

#### *Import Directly to Forestry*

<a href="https://app.forestry.io/quick-start?repo=kendallstrautman/brevifolia-gatsby-forestry&engine=gatsby">
    <img alt="Import this project into Forestry" src="https://assets.forestry.io/import-to-forestryK.svg" />
</a>

#### *Using the Gatsby CLI*
In your terminal, navigate to where you would like this blog to live, then run 
```bash 
gatsby new [SITE_DIRECTORY_NAME] https://github.com/kendallstrautman/brevifolia-gatsby-forestry
cd [SITE_DIRECTORY_NAME]
yarn dev 
```
#### *Set-up Locally*
In your terminal, navigate to where you would like this blog to live, then run 
```bash
#clone the repo
git clone git@github.com:kendallstrautman/brevifolia-gatsby-forestry.git

#navigate to the directory
cd brevifolia-gatsby-forestry

#install dependencies & run dev server with yarn 
yarn install
yarn dev

#or with npm 
npm install
npm run dev
```
A new browser window should open with the dev server running or you can navigate to localhost:8000 

### Plugins

With Gatsby offering a plugin-rich ecosystem, there are a few key plugins that make this project possible. 

- [Gatsby-image](https://using-gatsby-image.gatsbyjs.org/) optimizes image loading and provides the correct file paths for output. 
- [Gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/?=gatsby-tranf) gives us access to and transforms the markdown files, using also [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/?=gatsby-remark), [gatsby-remark-normalize-paths](https://www.gatsbyjs.org/packages/gatsby-remark-normalize-paths/?=gatsby-remark-no), & [gatsby-remark-relative-images](https://www.gatsbyjs.org/packages/gatsby-remark-relative-images/?=gatsby-remark-re) to make sure the content in the markdown works properly. 
- [Gatsby-transformer-yaml allows](https://www.gatsbyjs.org/packages/gatsby-transformer-yaml/?=gatsby-tranfor) us to use the data in .yaml files, feel free to add [gatsby-transformer-json](https://www.gatsbyjs.org/packages/gatsby-transformer-json/?=gatsby-tranfor) if you prefer that format for data files. 
- [Gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=gatsby-plugin-sass) lets us write styles using scss or sass. 
- [Gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=gatsby-plugin-react) extends the well-known react-helmet, allowing you to adjust content in the ‘head’ of your components. 

## Project Structure 

- Site-level configuration is stored in `config.json` so it can be exposed to Forestry. This file is loaded in the `gatsby-config.js` to configure Gatsby and all it to be accessible via siteMetaData in your graphql queries.
- Access any of Gatsby's [browser api's](https://www.gatsbyjs.org/docs/browser-apis/) via the `gatsby-browser.js`, or load global styles etc.
- Add and access plugin options or siteMetaData via `gatsby-config.js`
- Access Gatsby's [node api's](https://www.gatsbyjs.org/docs/node-apis/) via `gatsby-node.js`. This is where the creation of new blog pages or nodes is handled. 
- Edit styles via `src/styles/...`
- `content/`contains all your markdown blog posts, images & data files (e.g. authors list, info page data). 
- `src/pages` is a very important and required directory for Gatsby. This is where all your pages for the site live. 
- Blog posts are built from a template that can be accessed at `src/templates`. 
- The pages & template are comprised of components from `src/components`.

## Using Forestry as your CMS

The `.forestry` directory contains all the settings information and frontmatter configuration to allow Forestry to setup the sidebar structure and editing capacity for this blog. After importing this blog into forestry, you can [access and edit](https://forestry.io/docs/editing/) all of the content via the sidebar. 

You can add new blog posts, [data files](https://forestry.io/docs/editing/data-files/), or entire pages and sections to fit your needs. You can also [customize how media](https://forestry.io/docs/media/) is handled, by configurating gitLFS, Cloudinary, S3, or Netlify Large Media.

You can set up a [remote admin](https://forestry.io/docs/editing/remote-admin/) for content editors to log in directly to yoururl.com/admin to make content updates.

