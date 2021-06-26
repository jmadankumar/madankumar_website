import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import SkillsByCategory from '../components/SkillsByCatergory';
import ProfileSection from '../components/ProfileSection/ProfileSection';
import ProfileHeader from '../components/ProfileHeader';
import PersonalOpenSource from '../components/PersonalOpenSource';
import PersonalProject from '../components/PersonalProject';
import CommunityOpenSource from '../components/CommunityOpenSource';
import Certifications from '../components/Certifications';

const IndexPage = ({ data }) => {
  const profile = data.allPortfolioJson.edges[0].node;
  return (
    <Layout name="Porfolio" showHeader>
      <SEO
        title="Portfolio"
        keywords={[`madankumar`, `portfolio`, `full stack developer`]}
      />
      <div className="portfolio-wrapper flex flex-col items-center">
        <ProfileHeader profile={profile} />
        <div className="content w-full lg:w-3/4 xl:4/6">
          <ProfileSection title="Skills">
            <SkillsByCategory data={profile.skillsByCategory} />
          </ProfileSection>
          <ProfileSection title="Certifications">
            <Certifications />
          </ProfileSection>
          <ProfileSection title="Personal projects">
            <PersonalProject />
          </ProfileSection>
          <ProfileSection title="Community Open Source contribution">
            <CommunityOpenSource />
          </ProfileSection>
          <ProfileSection title="Personal Open Source contribution">
            <PersonalOpenSource />
          </ProfileSection>
        </div>
      </div>
    </Layout>
  );
};
export const query = graphql`
  query PortfolioQuery {
    allPortfolioJson {
      edges {
        node {
          biography
          company
          country
          name
          role
          skillsByCategory {
            category
            skills {
              badge
              title
            }
          }
        }
      }
    }
  }
`;
export default IndexPage;
