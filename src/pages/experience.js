import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';
import '../scss/experience.scss';

class ExperiencePage extends Component {
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
                        <Layout name="Experience" showHeader={true}>
                            <SEO title="Experience" keywords={["Madan Kumar", "Work Experience", "Full Stack Developer", "Javascript"]} />
                            <div className="experience-page">
                                <h2>Experience</h2>
                                {
                                    projects.map(project => {
                                        return (<Project data={project} />);
                                    })
                                }
                            </div>
                        </Layout>
                    );
                }} />
        );
    }
}
export default ExperiencePage;