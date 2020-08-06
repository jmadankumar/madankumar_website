module.exports = {
    siteMetadata: {
        title: `Madan Kumar`,
        description: `Personal Portfolio and Blog of Madan Kumar.`,
        author: `@madan`,
        url: 'http://madankumar.js.org',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-sass',

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `profile`,
                path: `${__dirname}/src/data/portfolio/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `experience`,
                path: `${__dirname}/src/data/experience/`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/data/blog`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-transformer-yaml',
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false,
                            wrapperStyle: 'margin-bottom: 1.0725rem;',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            showLineNumbers: true,
                        },
                    },
                    'gatsby-remark-copy-linked-files',
                ],
            },
        },
        'gatsby-plugin-catch-links',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-111245218-1',
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    {
                      resolve: 'gatsby-remark-prismjs',
                      options: {
                          showLineNumbers: true,
                      },
                  },
                    'gatsby-remark-copy-linked-files',
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ],
};
