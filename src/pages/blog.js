import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogPage extends Component {
    render() {
        return (
            <StaticQuery query={graphql`
            {
                allTcsYaml {
                    edges {
                      node {
                        company
                        year
                        roles
                        technologies
                        description
                        duration {
                          startDate
                          endDate
                        }
                        name,
                        location
                      }
                    }
                  }
              }
              `} render={(data) => {
                    let projects = data.allTcsYaml.edges.map(edge => {
                        return edge.node;
                    });
                    return (
                        <Layout name="Blog" showHeader={true}>
                            <SEO title="Blog" keywords={["Madan Kumar", "Blog Experience", "Full Stack Developer", "Javascript"]} />
                           
                        </Layout>
                    );
                }} />
        );
    }
}
export default BlogPage;