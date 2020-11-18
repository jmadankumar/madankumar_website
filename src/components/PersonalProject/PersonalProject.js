import React from 'react';
import Card, { CardBody } from '../common/Card';
import Typography from '../common/Typography';
import MeetxImage from '../../images/personal_projects/meetx_web.png';
import SdpAnalyserImage from '../../images/personal_projects/sdp_analyser.png';
import PortalIobsImage from '../../images/personal_projects/portal_iobs.png';
import IobsImage from '../../images/personal_projects/iobs.png';
import DSAlgoVisualizerImage from '../../images/personal_projects/ds_algorithm_visualizer.png';


const projects = [
    {
        name: 'Meetx video conferencing',
        description:
            'Meetx (zoom clone) using React, webrtc, Nodejs and websocket',
        imageUrl: MeetxImage,
        url: 'javascript:void(0);',
    },
    {
        name: 'SDP analyser',
        description: 'Session description protocol analyser',
        imageUrl: SdpAnalyserImage,
        url: 'https://sdp-analyser.madankumar.me/',
    }, {
        name: 'Portal IOBS',
        description: 'Branding activity tracking portal for India one brand services',
        imageUrl: PortalIobsImage,
        url: 'javascript:void(0);',
    }, {
        name: 'IOBS website',
        description: 'India one brand services website',
        imageUrl: IobsImage,
        url: 'http://iobs.in/',
    },{
        name: 'Algorithm visualizer',
        description: 'A web app to visualize algorithm',
        imageUrl: DSAlgoVisualizerImage,
        url: 'https://ds-algorithm-visualizer.github.io/',
    },
];
const PersonalProject = () => {
    return (
        <div className="flex flex-wrap -mx-4">
            {projects.map((project) => {
                return (
                    <div className="px-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4">
                        <a href={project.url} target="_blank">
                            <Card className="border rounded-none transition transform duration-500 ease-in-out hover:shadow-lg hover:scale-110">
                                <CardBody className="card-body">
                                    <img
                                        src={project.imageUrl}
                                        className="w-full mb-2"
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
