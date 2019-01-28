/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const PostTemplate = path.resolve('./src/templates/PostPage/index.js');
const BlogTemplate = path.resolve('./src/templates/BlogPage/index.js');
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
            {
                allMarkdownRemark {
                  edges {
                    node {
                      id
                      frontmatter {
                        path
                      }
                    }
                  }
                }
              }
            `).then(({ errors, data }) => {
                console.log('creating pages', data);
                let posts = data.allMarkdownRemark.edges;
                /**
                 * Create Post Pages
                 */
                posts.forEach(({ node }) => {
                    createPage({
                        path: node.frontmatter.path,
                        component: PostTemplate
                    })
                });

                /**
                 * Create Blog Pagination Pages
                 */
                const postsPerPage = 4;
                const numOfPages = Math.ceil(posts.length / postsPerPage);
                for (let i = 0; i < numOfPages; i++) {
                    createPage({
                        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                        component: BlogTemplate,
                        context: {
                            limit: postsPerPage,
                            skip: i * postsPerPage,
                            oldPost: (i + 2) <= numOfPages ? `/blog/${i + 2}` : null,
                            newPost: i === 0 ? null : (i === 1 ? `/blog` : `/blog/${i}`)
                        }
                    })
                }
            }))

    });
};