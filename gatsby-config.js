module.exports = {
  plugins: [
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-QCWH4RW28E",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    
  ],
};
