import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Post from '../../components/Post';
import './post.scss';
import { DiscussionEmbed, CommentCount } from "disqus-react";

export default class PostPage extends Component {
    render() {
        const { post, site } = this.props.data;
        let image = post.frontmatter.image ? post.frontmatter.image.childImageSharp.fixed.src : '';
        const disqusShortname = "http-madankumar-js-org";
        const disqusConfig = {
            identifier: post.frontmatter.id,
            title: post.frontmatter.title,
            url: `${site.siteMetadata.url}${post.frontmatter.path}`
        };
        return (
            <Layout name={post.frontmatter.title} showHeader={true}>
                <SEO title={post.frontmatter.title} description={post.frontmatter.description}
                    keywords={post.frontmatter.tags} />
                <div className="post-page">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/blog">Blog</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{post.frontmatter.title}</li>
                        </ol>
                    </nav>
                    <Post title={post.frontmatter.title} author={post.frontmatter.author}
                        showImage={!!post.frontmatter.image}
                        image={image}
                        date={post.frontmatter.date} tags={post.frontmatter.tags}
                        showIcon={false} key={post.id}
                        showContent={true} content={post.html} id={post.frontmatter.id}
                        url={site.siteMetadata.url} />
                    <div className="post-comments">
                        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                    </div>
                </div>
            </Layout>
        );
    }
}

PostPage.propTypes = {

}

export const pageQuery = graphql`
        query PostByPath($path: String!) {
            site{
                siteMetadata{
                    url
                }
            },
            post: markdownRemark(frontmatter: {path: {eq: $path}}) {                
                frontmatter{
                  id,
                  path,
                  date(formatString:"DD MMM, YYYY"),
                  title,
                  tags,
                  description,
                  author,
                  image{
                    childImageSharp{
                        fixed(width:500){
                          src
                        }
                      }
                  }
                },
                html
              }
        }
    `;

