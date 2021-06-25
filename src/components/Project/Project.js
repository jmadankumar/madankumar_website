import React, { Component } from 'react';
import { format, parse } from 'date-fns';
import * as FeatherIcon from 'react-feather';
import { DATE_FORMAT } from '../../config/constants';
import ProjectCard from './ProjectCard';
import styled from '@emotion/styled';

const StyledProject = styled.div`
  .duration-badge {
    background-color: var(--experience-duration-bg-color);
    color: var(--experience-duration-text-color);
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 1rem;
    font-weight: bold;
  }
  .date {
    padding: 0px 10px;
  }
`;

const Project = ({ data }) => {
  return (
    <StyledProject className="mb-5">
      <div className="duration flex justify-center mb-5">
        <span className="duration-badge">
          <span className="date">
            {format(
              parse(data.duration.startDate, 'yyyy-MM-dd', new Date()),
              DATE_FORMAT
            )}{' '}
          </span>
          <FeatherIcon.Activity size={16} className="inline-block" />
          <span className="date">
            {data.duration.endDate !== 'present'
              ? format(
                  parse(data.duration.endDate, 'yyyy-MM-dd', new Date()),
                  DATE_FORMAT
                )
              : 'Present'}
          </span>
        </span>
      </div>
      <ProjectCard data={data} />
    </StyledProject>
  );
};

export default Project;
