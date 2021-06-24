import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import SkillsByCategory from '../components/SkillsByCatergory';
import ProfileSection from '../components/ProfileSection/ProfileSection';
import ProfileHeader from '../components/ProfileHeader';
import ProfileBiography from '../components/ProfileBiography';
import PersonalOpenSource from '../components/PersonalOpenSource';
import Card, { CardBody } from '../components/common/Card';
import PersonalProject from '../components/PersonalProject';
import CommunityOpenSource from '../components/CommunityOpenSource';

const IndexPage = ({ data }) => {
  const profile = data.allPortfolioJson.edges[0].node;
  return (
    <Layout name="Porfolio" showHeader>
      <SEO
        title="Portfolio"
        keywords={[`madankumar`, `portfolio`, `full stack developer`]}
      />
      <div className="portfolio-wrapper">
        <ProfileHeader profile={profile} />
        <div className="content">
          <Card>
            <CardBody className="px-6 md:px-16">
              <ProfileSection title="Biography">
                <ProfileBiography />
              </ProfileSection>
              {/* <ProfileSection title="Company">
                                {profile.company}
                            </ProfileSection>
                            <ProfileSection title="Country">
                                {profile.country}
                            </ProfileSection> */}
              <ProfileSection title="Skills">
                <SkillsByCategory data={profile.skillsByCategory} />
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
            </CardBody>
          </Card>
        </div>
      </div>
      <div></div>
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
