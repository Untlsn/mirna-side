module.exports = {
  siteMetadata: {
    title: "Mirna",

    navLinks: {
      left: [
        {
          name: 'news',
          to: '/news'
        },
        {
          name: 'książki',
          to: '/books'
        },
        {
          name: 'sklep',
          to: '/shop'
        },
        {
          name: 'pomoc',
          to: '/support'
        },
      ],
      right: [
        {
          name: 'forum',
          to: '/forum'
        },
        {
          name: 'wiki',
          to: '/wiki'
        },
      ]
    }
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        base64Width: 20,
        forceBase64Format: `png`,
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
  ],
};
