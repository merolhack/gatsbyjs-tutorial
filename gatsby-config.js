module.exports = {
    siteMetadata: {
        titles: {
            main: `Testing GatsbyJS!`,
            aboutUs: `About us`,
            services: `Services`,
            markdown: `Markdown`,
        }
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
    ],
};
