import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import * as FeatherIcon from 'react-feather';
import SEO from '../../components/seo';
import Post from '../../components/Post';
import './blog.scss';

const NewPostLink = ({ link }) => {
  return (
    <a href={link} className="new-post float-left">
      <FeatherIcon.ArrowLeft size={18} />
      New Post
    </a>
  );
};

const OldPostLink = ({ link }) => {
  return (
    <a href={link} className="old-post float-right">
      Older Post
      <FeatherIcon.ArrowRight size={18} />
    </a>
  );
};

export default class BlogPage extends Component {
  render() {
    const { data, pageContext } = this.props;
    console.log(data);
    const posts = data.allMdx.edges;
    const site = data.site;
    const { oldPost, newPost } = pageContext;
    console.log(site.siteMetadata.url);
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
                title={post.frontmatter.title}
                author={post.frontmatter.author}
                showImage={!!post.frontmatter.image}
                image={image}
                date={post.frontmatter.date}
                tags={post.frontmatter.tags}
                showIcon={false}
                key={post.id}
                showContent={false}
                to={post.frontmatter.path}
                id={post.frontmatter.id}
                url={site.siteMetadata.url}
              />
            );
          })}
          <div className="clearfix">
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
            date(formatString:"DD MMM, YYYY"),
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
