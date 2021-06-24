import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';
import * as FeatherIcon from 'react-feather';
import SEO from '../../components/seo';
import Post from '../../components/Post';
import './blog.scss';

const PostPaginationLink = ({ link, children }) => {
    return (
        <Link href={link} className="inline-flex text-xl items-center hover">
            {children}
        </Link>
    );
};

const NewPostLink = ({ link }) => {
    return (
        <PostPaginationLink link={link}>
            <FeatherIcon.ArrowLeft size={18} className="mr-2" />
            New Post
        </PostPaginationLink>
    );
};

const OldPostLink = ({ link }) => {
    return (
        <PostPaginationLink link={link}>
            Older Post
            <FeatherIcon.ArrowRight size={18} className="ml-2" />
        </PostPaginationLink>
    );
};

export default class BlogPage extends Component {
    render() {
        const { data, pageContext } = this.props;

        const posts = data.allMdx.edges;
        const site = data.site;
        const { oldPost, newPost } = pageContext;
        
        return (
            <Layout name={'Blog'} showHeader={true}>
                <SEO
                    title={'Blog'}
                    keywords={['Blog', 'Madan Kumar', 'Javascript', 'gatsby']}
                />

                <div className="blog-page">
                    {posts.map(({ node }) => {
                        const post = node;
                        let image = post.frontmatter.image
                            ? post.frontmatter.image.childImageSharp.fixed.src
                            : '';
                        return (
                            <Post
                                frontmatter={post.frontmatter}
                                key={post.id}
                                content={post.html}
                                id={post.frontmatter.id}
                                url={site.siteMetadata.url}
                                to={post.frontmatter.path}
                                isPreview
                            />
                        );
                    })}
                    <div className="flex justify-between">
                        {newPost && <NewPostLink link={newPost} />}
                        {oldPost && <OldPostLink link={oldPost} />}
                    </div>
                </div>
            </Layout>
        );
    }
}

BlogPage.propTypes = {};

export const pageQuery = graphql`
    query AllBlogPostsQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
                description
                author
                url
            }
        }
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        author
                        path
                        date(formatString: "DD MMM, YYYY")
                        tags
                        image {
                            childImageSharp {
                                fixed(width: 500) {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
