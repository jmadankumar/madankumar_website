import React from 'react';
import Card, { CardBody } from '../common/Card';
import Typography from '../common/Typography';
import MeetxImage from '../../images/personal_projects/meetx_web.png';
import SdpAnalyserImage from '../../images/personal_projects/sdp_analyser.png';
import PortalIobsImage from '../../images/personal_projects/portal_iobs.png';
import IobsImage from '../../images/personal_projects/iobs.png';
import DSAlgoVisualizerImage from '../../images/personal_projects/ds_algorithm_visualizer.png';
import MeetxMobileImage from '../../images/personal_projects/meetx_mobile.png';
import QuickRevisionImage from '../../images/personal_projects/ultimate_quick_revision.png';

const projects = [
    {
        name: 'MeetX video conferencing webapp',
        description:
            'MeetX (zoom clone) using React, WebRTC, Nodejs and Websocket',
        imageUrl: MeetxImage,
        url: 'https://youtu.be/gu-0vsyqcgA',
        target: '_blank',
    },
    {
        name: 'MeetX video conferencing mobile app',
        description: 'MeetX (zoom clone) using Android and Flutter',
        imageUrl: MeetxMobileImage,
        url: 'https://youtu.be/Yi618h_17fA',
        target: '_blank',
    },
    {
        name: 'SDP analyser',
        description: 'Session description protocol analyser',
        imageUrl: SdpAnalyserImage,
        url: 'https://sdp-analyser.madankumar.me/',
        target: '_blank',
    },
    {
        name: 'Portal IOBS',
        description:
            'Branding activity tracking portal for India one brand services created using  ReactJS, NodeJS, TypeORM, MySQL.AWS EC2 and AWS Amplify',
        imageUrl: PortalIobsImage,
        url: 'javascript:void(0);',
    },
    {
        name: 'IOBS website',
        description:
            'India one brand services website created using Gatsby, ReactJS and AWS Amplify',
        imageUrl: IobsImage,
        url: 'http://iobs.in/',
        target: '_blank',
    },
    {
        name: 'Algorithm visualizer',
        description: 'A web app to visualize algorithm',
        imageUrl: DSAlgoVisualizerImage,
        url: 'https://ds-algorithm-visualizer.github.io/',
        target: '_blank',
    },
    {
        name: 'Ultimate Quick Revision App',
        description:
            "A mobile app for 11th and 12th students, It will help students to quickly revison of MC's quesitions",
        imageUrl: QuickRevisionImage,
        url: 'javascript:void(0);',
    },
];
const PersonalProject = () => {
    return (
        <div className="flex flex-wrap -mx-4">
            {projects.map((project) => {
                return (
                    <div className="px-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-8">
                        <a href={project.url} target={project.target}>
                            <Card className="border rounded-none transition transform duration-500 ease-in-out hover:shadow hover:scale-105">
                                <CardBody className="card-body">
                                    <img
                                        src={project.imageUrl}
                                        className="w-full mb-2 object-contain h-40 md:h-48 lg:h-64"
                                        alt={project.name}
                                    />
                                    <Typography variant="h4" className="mb-2">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="p" className="mb-2">
                                        {project.description}
                                    </Typography>
                                </CardBody>
                            </Card>
                        </a>
                    </div>
                );
            })}
        </div>
    );
};
export default PersonalProject;
