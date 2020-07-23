import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Post from '../../components/Post';
import './post.scss';
import { DiscussionEmbed, CommentCount } from 'disqus-react';
import BreadCrumb from '../../components/common/BreadCrumb';

export default class PostPage extends Component {
    render() {
        const { post, site } = this.props.data;
        console.log(post);
        const disqusShortname = 'http-madankumar-js-org';
        const disqusConfig = {
            identifier: post.frontmatter.id,
            title: post.frontmatter.title,
            url: `${site.siteMetadata.url}${post.frontmatter.path}`,
        };
        return (
            <Layout name={post.frontmatter.title} showHeader={true}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    keywords={post.frontmatter.tags}
                />
                <div className="post-page">
                    <BreadCrumb
                        links={[
                            { title: 'Blog', href: '/blog' },
                            { title: post.frontmatter.title },
                        ]}
                        className="mb-5"
                    />

                    <Post
                        frontmatter={post.frontmatter}
                        key={post.id}
                        content={post.body}
                        id={post.frontmatter.id}
                        url={site.siteMetadata.url}
                        isPreview={false}
                    />
                    <div className="post-comments">
                        <DiscussionEmbed
                            shortname={disqusShortname}
                            config={disqusConfig}
                        />
                    </div>
                </div>
            </Layout>
        );
    }
}

PostPage.propTypes = {};

export const pageQuery = graphql`
    query PostByPath($path: String!) {
        site {
            siteMetadata {
                url
            }
        }
        post: mdx(frontmatter: { path: { eq: $path } }) {
            frontmatter {
                path
                date(formatString: "DD MMM, YYYY")
                title
                tags
                author
                image {
                    childImageSharp {
                        fixed(width: 500) {
                            src
                        }
                    }
                }
            }
            id
            body
        }
    }
`;
