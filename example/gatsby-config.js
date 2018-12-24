module.exports = {
  siteMetadata: {
    title: `gatsby-source-google-scholar-example`,
    description: `Minimal working example for using gatsby-source-google-scholar.`,
    author: `Janosh Riebesell`,
  },
  plugins: [
    {
      // locally importing gatsby-source-google-scholar
      resolve: require.resolve(`..`),
      options: {
        query: `albert einstein`,
      },
    },
  ],
}