import React from 'react';
import * as FeatherIcon from 'react-feather';
import Card, { CardBody } from '../common/Card';

const ProjectCard = ({ data }) => {
    return (
        <Card className="card">
            <CardBody className="card-body">
                <h5 className="card-title text-xl mb-2">{data.name}</h5>
                <h6 className="card-subtitle mb-2">{data.company}</h6>
                <p className="card-text text-muted mb-2" >{data.description}</p>
                <div className="location">
                    <FeatherIcon.MapPin size={16} className="inline-block" />
                    <span> {data.location}</span>
                </div>
                <div className="responsibility border-b">
                    <h5 className="text-lg mb-2">Responsibility</h5>
                    {data.roles.map((role) => {
                        return (
                            <div className="item mb-2">
                                <FeatherIcon.GitCommit
                                    size={16}
                                    className="inline-block"
                                />{' '}
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
                                <span className="bg-indigo-500 text-white py-1 px-3 mr-2 mb-2 rounded-md text-sm">
                                    {technology}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default ProjectCard;
