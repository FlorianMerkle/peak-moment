module.exports = {
  plugins: [
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-QCWH4RW28E",
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://gmx.us7.list-manage.com/subscribe/post?u=7dfb256ed076b925767218b11&amp;id=a9d2c1e4ac', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
  },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    
  ],
};
