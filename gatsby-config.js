module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-emotion",
      options: {},
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: [".mdx", ".md", ".markdown"],
    //     gatsbyRemarkPlugins: [],
    //   },
    // },
    {
      resolve: "gatsby-remark-images",
      options: {
        backgroundColor: "#fafafa",
        maxWidth: 1035,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Salama Ashoush`,
    author: `Salama Ashoush`,
    description: `Thoughts, stories and ideas.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/salamaashoush`,
      },
      {
        name: `github`,
        url: `https://github.com/salamaashoush`,
      },
    ],
  },
}
