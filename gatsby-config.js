module.exports = {
  siteMetadata: {
    title: 'Matt Greenfield.',
    job_description: 'Frontend developer',
    description: 'Portfolio for Matt Greenfield...',
    keywords: 'frontend, developer, website, worthing',
    about:
      "Hello. I'm Matt, a frontend developer from Brighton, UK (I make websites). I spend my days writing CSS and JavaScript with some Sass and React on top. I'm passionate about making websites for all people on all devices.",
    email: 'gmattgreenfield@gmail.com',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Matt Greenfield Portfolio',
        short_name: 'M Greenfield',
        start_url: '/',
        background_color: '#4682b4',
        theme_color: '#e7790e',
        display: 'minimal-ui',
        icon: 'src/images/logo-square.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
