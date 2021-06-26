import React from 'react';
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
import { GatsbyImage } from 'gatsby-plugin-image';
import useImage from '../../hooks/useImage';
import Tag from '../common/Tag';

const projects = [
  {
    name: 'MeetX video conferencing webapp',
    description:
      'MeetX web app is a clone of Zoom app. It is created using React, WebRTC, Typescript, Nodejs and Websocket.',
    imageUrl: MeetxImage,
    imageFileName: '/meetx_web.png',
    url: 'https://youtu.be/gu-0vsyqcgA',
    githubUrl: 'https://github.com/jmadankumar/video-conferencing-app',
    target: '_blank',
    tags: ['React', 'WebRTC', 'Typescript', 'Websocket', 'Nodejs'],
  },
  {
    name: 'MeetX video conferencing mobile app',
    description:
      'MeetX Mobile app is a clone Zoom mobile app. It is created using Flutter and Android SDK. It used Flutter WebRTC package for transfering video and audio',
    imageUrl: MeetxMobileImage,
    imageFileName: '/meetx_mobile.png',
    url: 'https://youtu.be/Yi618h_17fA',
    githubUrl: 'https://github.com/jmadankumar/video-conferencing-mobile',
    target: '_blank',
    tags: ['Flutter', 'WebRTC', 'Android', 'Flutter WebRTC', 'Websocket'],
  },
  {
    name: 'SDP analyser',
    description: 'A web app analyse Session description protocol',
    imageUrl: SdpAnalyserImage,
    imageFileName: '/sdp_analyser.png',
    url: 'https://sdp-analyser.madankumar.me/',
    githubUrl: 'https://github.com/jmadankumar/sdp-analyser',
    target: '_blank',
    tags: ['React', 'Gatsby', 'SDP', 'Json Viewer'],
  },
  {
    name: 'Algorithm visualizer',
    description: 'A web app to visualize algorithm',
    imageUrl: DSAlgoVisualizerImage,
    imageFileName: '/ds_algorithm_visualizer.png',
    url: 'https://ds-algorithm-visualizer.github.io/',
    githubUrl: 'https://github.com/jmadankumar/algorithm-visualizer',
    target: '_blank',
    tags: ['React', 'Gatsby', 'Material UI', 'Algorithms', 'Github Pages'],
  },
  {
    name: 'Portal IOBS',
    description:
      'Branding activity tracking portal for India one brand services.It created using  ReactJS, NodeJS, TypeORM, MySQL.AWS EC2 and AWS Amplify',
    imageUrl: PortalIobsImage,
    imageFileName: '/portal_iobs.png',
    githubUrl: '',
    url: '',
    tags: [
      'React',
      'ExpressJs',
      'NodeJs',
      'Material UI',
      'MySQL',
      'AWS',
      'Axios',
      'JWT',
    ],
  },
  {
    name: 'IOBS website',
    description:
      'India one brand services website. It is created using Gatsby, ReactJS and AWS Amplify',
    imageUrl: IobsImage,
    imageFileName: '/iobs.png',
    url: 'http://iobs.in/',
    githubUrl: '',
    target: '_blank',
    tags: ['React', 'Gatsby', 'Tailwindcss', 'AWS'],
  },
  {
    name: 'Ultimate Quick Revision App',
    description:
      'A mobile app for 11th and 12th students, It will help students to quickly revision Multiple choice questions',
    imageUrl: QuickRevisionImage,
    imageFileName: '/ultimate_quick_revision.png',
    githubUrl: '',
    url: '',
    tags: ['Android', 'SQL lite', 'Education'],
  },
];

const StyledProjectDetail = styled.div`
  @media screen and (min-width: 768px) {
    .image-container {
      filter: grayscale(1);
    }
    &:hover .image-container {
      filter: none;
    }
  }
  .project-image {
    max-height: 400px;
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

const ProjectDetail = ({ project, reverseLayout }) => {
  const image = useImage(project.imageFileName);

  return (
    <StyledProjectDetail
      className="project px-4 w-full mb-16 md:mb-40"
      key={project.url}
    >
      <div className="flex flex-wrap">
        <div
          className={cx(
            'image-container w-full md:w-2/4 lg:w-2/4 xl:w-5/12 mb-5 md:mb-0 md:p-4 flex justify-center',
            {
              'md:order-last': reverseLayout,
            }
          )}
        >
          <GatsbyImage
            image={image}
            className="w-full project-image mb-2"
            alt={project.name}
          />
        </div>
        <div
          className={cx(
            'details-container w-full md:w-2/4 lg:w-2/4 xl:w-7/12 px-4 md:px-12 flex flex-col',
            { 'md:text-right md:items-end': !reverseLayout }
          )}
        >
          <div className="title text-2xl md:text-3xl font-bold mb-5">
            {project.name}
          </div>
          <div className="description text-base md:text-lg mb-4">
            {project.description}
          </div>
          <div className="flex flex-wrap mb-4">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="flex">
            {project.url && (
              <a
                href={project.url}
                target={project.target}
                className="project-link flex text-2xl font-bold"
                rel="noreferrer noopener"
              >
                <FeatherIcon.ExternalLink />
                <span className="hidden">External Link</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target={project.target}
                className="project-link flex text-2xl font-bold ml-4"
                rel="noreferrer noopener"
              >
                <FeatherIcon.GitHub />
                <span className="hidden">Github Link</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </StyledProjectDetail>
  );
};

const StyledPersonalProject = styled.div``;

const PersonalProject = () => {
  return (
    <StyledPersonalProject className="flex flex-wrap -mx-4">
      {projects.map((project, index) => {
        return (
          <ProjectDetail
            project={project}
            reverseLayout={index % 2 === 1}
            key={project.name}
          />
        );
      })}
    </StyledPersonalProject>
  );
};

export default PersonalProject;
