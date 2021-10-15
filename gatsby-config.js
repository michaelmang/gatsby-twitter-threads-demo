module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "twitter-threads-demo",
  },
  plugins: [
    {
      resolve: `gatsby-source-twitter-threads`,
      options: {
        credentials: {
          consumer_key: "GVI933VgsKMRViEw8NB3OVZ0G",
          consumer_secret: "WxNgNYyoq9D7BoznTm0YDFthPTDi2HO2LpZRnXAvqQByJQLC67",
        },
        user: `michaelmangial1`
      },
    },
  ],
};
