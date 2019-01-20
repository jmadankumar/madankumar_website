import React, { Component } from 'react';
import { format } from 'date-fns';
import * as FeatherIcon from 'react-feather';
import './project.scss';
class Project extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="project-card-wrapper">
                <div className="duration">
                    <span className="badge badge-primary">
                        <span className="date">{format(data.duration.startDate, 'DD MMM , YYYY')} </span>
                        <FeatherIcon.Activity size={16} color="#fff"/>
                        <span className="date">{format(data.duration.endDate, 'DD MMM , YYYY')}</span>
                    </span>
                </div>
                <div className="card">
                    <div class="card-body">
                        <h5 class="card-title">{data.name}</h5>
                        <h6 class="card-subtitle mb-2">{data.company}</h6>
                        <p class="card-text text-muted">{data.description}</p>
                        <div className="location">
                            <FeatherIcon.MapPin size={16} />
                            <span> {data.location}</span>
                        </div>
                        <div className="responsibility">
                            <h5>Responsibility</h5>
                            {
                                data.roles.map(role => {
                                    return (
                                        <div className="item">
                                            <FeatherIcon.GitCommit size={16} /> {role}
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="technology">
                            <h5>Technologies</h5>
                            {
                                data.technologies.map(technology => {
                                    return (<span className="badge badge-light">{technology}</span>);
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;