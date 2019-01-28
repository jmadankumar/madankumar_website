import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo';
import '../scss/index.scss';
import ProfileImage from '../images/new_profile.webp';

const IndexPage = () => (
  <StaticQuery query={
    graphql`
  {
    allPortfolioYaml{
      edges{
        node{
          name,
          role,
          biography,
          company,
          country,
          skills{
            type,
            skills
          }
        }
      }
    }
  }
  `} render={(data) => {
      console.log(data);
      const profile = data.allPortfolioYaml.edges[0].node;
      return (
        <Layout name="Porfolio">
          <SEO title="Portfolio" keywords={[`madankumar`, `portfolio`, `full stack developer`]} />
          <div className="portfolio-wrapper">
            <div className="header">
              <div className="profile-basic-container">
                <div className="pic-holder">
                  <img src={ProfileImage} className="profile-image rounded-circle" />
                </div>
                <div className="basic-detail">
                  <h3 className="name">{profile.name}</h3>
                  <h5 className="profession">{profile.role}</h5>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="card">
                <section className="section-holder">
                  <h5 className="section-title">Biography</h5>
                  <p className="section-content">
                    {profile.biography}
                  </p>
                </section>
                <section className="section-holder">
                  <h5 className="section-title">Company</h5>
                  <p className="section-content">
                    {profile.company}
                  </p>
                </section>
                <section className="section-holder">
                  <h5 className="section-title">Country</h5>
                  <p className="section-content">
                    {profile.country}
                  </p>
                </section>
                <section className="section-holder">
                  <h5 className="section-title">Skills</h5>
                  <p className="section-content">
                    {
                      profile.skills.map((skill) => {
                        return (
                          <div className="skill-wrapper">
                            <h6>{skill.type}</h6>
                            {
                              skill.skills.map((_skill) => {
                                return (<span className="badge badge-light" key={_skill}>{_skill}</span>);
                              })
                            }
                          </div>
                        );
                      })
                    }
                  </p>
                </section>
              </div>
            </div>
          </div>         
        </Layout>
      );
    }} />
)

export default IndexPage
