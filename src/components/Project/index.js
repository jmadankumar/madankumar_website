import React, { Component } from 'react';
import { format, parse } from 'date-fns';
import * as FeatherIcon from 'react-feather';
import './project.scss';
import { DATE_FORMAT } from '../../config/constants';
import ProjectCard from './ProjectCard';
class Project extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="project-card-wrapper">
        <div className="duration mb-4">
          <span className="badge badge-primary">
            <span className="date">
              {format(
                parse(data.duration.startDate, 'yyyy-MM-dd', new Date()),
                DATE_FORMAT
              )}{' '}
            </span>
            <FeatherIcon.Activity size={16} color="#fff" className="inline-block"/>
            <span className="date">
              {data.duration.endDate !== 'present'
                ? format(
                    parse(data.duration.endDate, 'yyyy-MM-dd', new Date()),
                    DATE_FORMAT
                  )
                : 'present'}
            </span>
          </span>
        </div>
        <ProjectCard data={data} />
      </div>
    );
  }
}

export default Project;
