module.exports = {
  siteMetadata: {
    title: `Salama's Blog`,
    author: 'Salama Ashoush',
    description: `My site description...`,
    keywords: ['Software Engineer', 'Frontend Engineer', 'JavaScript'],
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/salamaashoush`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/salamaashoush`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
        mdxOtherwiseConfigured: true,
      },
    },
  ],
};
