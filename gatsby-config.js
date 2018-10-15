module.exports = {
  siteMetadata: {
    title: 'Matt Greenfield.',
    job_description: 'Frontend developer',
    description: 'Portfolio for Matt Greenfield...',
    about:
      "Hello. I'm Matt, a frontend developer from Brighton, UK (I make websites). I spend my days writing CSS and JavaScript with some Sass and React on top. I'm passionate about making websites for all people on all devices.",
    email: 'gmattgreenfield@gmail.com',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Matt Greenfield Portfolio',
        short_name: 'M Greenfield',
        start_url: '/',
        background_color: '#E7790E',
        theme_color: '#E7790E',
        display: 'minimal-ui',
        icon: 'src/images/logo-square.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        ignore: [`**/\.*`],
      },
    },
  ],
};
