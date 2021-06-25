import React from 'react';
import Typography from '../common/Typography';
import MeetxImage from '../../images/personal_projects/meetx_web.png';
import SdpAnalyserImage from '../../images/personal_projects/sdp_analyser.png';
import PortalIobsImage from '../../images/personal_projects/portal_iobs.png';
import IobsImage from '../../images/personal_projects/iobs.png';
import DSAlgoVisualizerImage from '../../images/personal_projects/ds_algorithm_visualizer.png';
import MeetxMobileImage from '../../images/personal_projects/meetx_mobile.png';
import QuickRevisionImage from '../../images/personal_projects/ultimate_quick_revision.png';
import * as FeatherIcon from 'react-feather';
import cx from 'classnames';
import styled from '@emotion/styled';

const projects = [
  {
    name: 'MeetX video conferencing webapp',
    description: 'MeetX (zoom clone) using React, WebRTC, Nodejs and Websocket',
    imageUrl: MeetxImage,
    url: 'https://youtu.be/gu-0vsyqcgA',
    githubUrl: 'https://github.com/jmadankumar/video-conferencing-app',
    target: '_blank',
  },
  {
    name: 'MeetX video conferencing mobile app',
    description: 'MeetX (zoom clone) using Android and Flutter',
    imageUrl: MeetxMobileImage,
    url: 'https://youtu.be/Yi618h_17fA',
    githubUrl: 'https://github.com/jmadankumar/video-conferencing-mobile',
    target: '_blank',
  },
  {
    name: 'SDP analyser',
    description: 'Session description protocol analyser',
    imageUrl: SdpAnalyserImage,
    url: 'https://sdp-analyser.madankumar.me/',
    githubUrl: 'https://github.com/jmadankumar/sdp-analyser',
    target: '_blank',
  },
  {
    name: 'Algorithm visualizer',
    description: 'A web app to visualize algorithm',
    imageUrl: DSAlgoVisualizerImage,
    url: 'https://ds-algorithm-visualizer.github.io/',
    githubUrl: 'https://github.com/jmadankumar/algorithm-visualizer',
    target: '_blank',
  },
  {
    name: 'Portal IOBS',
    description:
      'Branding activity tracking portal for India one brand services created using  ReactJS, NodeJS, TypeORM, MySQL.AWS EC2 and AWS Amplify',
    imageUrl: PortalIobsImage,
    githubUrl: '',
    url: '',
  },
  {
    name: 'IOBS website',
    description:
      'India one brand services website created using Gatsby, ReactJS and AWS Amplify',
    imageUrl: IobsImage,
    url: 'http://iobs.in/',
    githubUrl: '',
    target: '_blank',
  },
  {
    name: 'Ultimate Quick Revision App',
    description:
      'A mobile app for 11th and 12th students, It will help students to quickly revision Multiple choice questions',
    imageUrl: QuickRevisionImage,
    githubUrl: '',
    url: '',
  },
];

const StyledPersonalProject = styled.div`
  @media screen and (min-width: 768px) {
    .image-container {
      filter: grayscale(1);
    }
    .project:hover .image-container {
      filter: none;
    }
  }

  .title {
    line-height: 1;
    color: var(--project-title-text-color);
  }
  .description {
    color: var(--project-description-text-color);
  }
  .project-link {
    color: var(--project-link-text-color);
  }
`;

const PersonalProject = () => {
  return (
    <StyledPersonalProject className="flex flex-wrap -mx-4">
      {projects.map((project, index) => {
        return (
          <div className="project px-4 w-full mb-16 md:mb-40" key={project.url}>
            <div className="flex flex-wrap">
              <div
                className={cx(
                  'image-container w-full md:w-2/4 lg:w-2/4 mb-5 md:mb-0',
                  {
                    'md:order-last': index % 2 === 1,
                  }
                )}
              >
                <img
                  src={project.imageUrl}
                  className="w-full mb-2 object-contain h-40 md:h-48 lg:h-64"
                  alt={project.name}
                />
              </div>
              <div className="details-container w-full md:w-2/4 lg:w-2/4 px-4 md:px-12 flex-col justify-center">
                <div className="title text-2xl md:text-4xl font-bold mb-5">
                  {project.name}
                </div>
                <div className="description text-base md:text-xl mb-4">
                  {project.description}
                </div>
                <div className="flex">
                  {project.url && (
                    <a
                      href={project.url}
                      target={project.target}
                      className="project-link flex text-2xl font-bold"
                    >
                      <FeatherIcon.ExternalLink />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target={project.target}
                      className="project-link flex text-2xl font-bold ml-4"
                    >
                      <FeatherIcon.GitHub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </StyledPersonalProject>
  );
};

export default PersonalProject;
