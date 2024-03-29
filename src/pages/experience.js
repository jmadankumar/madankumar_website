import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const ExperiencePage = ({ data }) => {
  const projects = data.allTcsYaml.edges.map((edge) => {
    return edge.node;
  });

  return (
    <Layout name="Experience" showHeader={true}>
      <SEO
        title="Experience"
        keywords={[
          'Madan Kumar',
          'Work Experience',
          'Full Stack Developer',
          'Javascript',
        ]}
      />
      <div className="experience-page">
        {projects.map((project) => {
          return <Project data={project} />;
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allTcsYaml {
      edges {
        node {
          company
          description
          duration {
            endDate
            startDate
          }
          location
          name
          roles
          technologies
          year
        }
      }
    }
  }
`;
export default ExperiencePage;
