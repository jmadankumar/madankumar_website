import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

class WorkPage extends Component {
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
                    // let projects = data.allTcsYaml.edges.map(edge => {
                    //     return edge.node;
                    // });
                    return (
                        <Layout name="Work" showHeader={true}>
                            <SEO title="Work" keywords={["Madan Kumar", "Work Experience", "Full Stack Developer", "Javascript"]} />
                            <div className="work-page container">
                                <div className="row justify-content-center">
                                    <div className="col-sm-8">
                                        under construction
                                </div>
                                </div>
                            </div>
                        </Layout>
                    );
                }} />
        );
    }
}
export default WorkPage;