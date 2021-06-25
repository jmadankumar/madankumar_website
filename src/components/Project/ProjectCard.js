import styled from '@emotion/styled';
import React from 'react';
import * as FeatherIcon from 'react-feather';
import Card, { CardBody } from '../common/Card';

const StyledProjectCard = styled(Card)`
  .card-subtitle {
    border-radius: 10px;
    color: rgb(21, 189, 118);
    color: var(--experience-company-text-color);
    padding: 5px 12px;
    background-color: rgb(226, 248, 238);
    background-color: var(--experience-company-bg-color);
    display: inline-block;
  }

  .location,
  .responsibility,
  .technology {
    margin-bottom: 10px;
    border-bottom: 1px solid #cccccc;
    padding: 5px 0px;
  }
  .location {
    span {
      padding-left: 5px;
    }
  }
  .responsibility .item {
    padding-left: 5px;
    font-size: 0.9rem;
  }
  .technology {
    border-bottom: none;
  }
  .tag {
    background-color: #667eea;
    background-color: var(--tag-color);
    color: #fff;
    color: var(--tag-text-color);
  }
`;
const ProjectCard = ({ data }) => {
  return (
    <StyledProjectCard className="card">
      <CardBody className="card-body">
        <h5 className="card-title text-xl mb-2">{data.name}</h5>
        <h6 className="card-subtitle mb-2">{data.company}</h6>
        <p className="card-text text-muted mb-2">{data.description}</p>
        <div className="location">
          <FeatherIcon.MapPin size={16} className="inline-block" />
          <span> {data.location}</span>
        </div>
        <div className="responsibility border-b">
          <h5 className="text-lg mb-2">Responsibility</h5>
          {data.roles.map((role) => {
            return (
              <div className="item mb-2">
                <FeatherIcon.GitCommit size={16} className="inline-block" />{' '}
                {role}
              </div>
            );
          })}
        </div>
        <div className="technology">
          <h5 className="text-lg mb-2">Technologies</h5>
          <div className="flex flex-wrap">
            {data.technologies.map((technology) => {
              return (
                <span className="tag py-1 px-3 mr-2 mb-2 rounded-md text-xs md:text-sm">
                  {technology}
                </span>
              );
            })}
          </div>
        </div>
      </CardBody>
    </StyledProjectCard>
  );
};

export default ProjectCard;
