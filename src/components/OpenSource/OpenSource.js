import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card, { CardBody } from '../common/Card';
import Typography from '../common/Typography';

const OpenSource = () => {
    const [repos, setRepos] = useState([]);

    const fetchRepo = async () => {
        const { data } = await axios.get(
            'https://api.github.com/users/jmadankumar/repos?type=public'
        );
        data.sort((repo1, repo2) => {
            return new Date(repo1.created_at) < new Date(repo2.created_at)
                ? 1
                : -1;
        });
        const filteredRepos = data.filter((repo) => !repo.fork);
        setRepos([...filteredRepos]);
    };

    useEffect(() => {
        fetchRepo();
    }, []);

    return (
        <div className="flex flex-wrap -mx-4">
            {repos.map((repo) => {
                return (
                    <div className="px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4">
                        <a href={repo.html_url} target="_blank">
                            <Card className="border rounded-none hover:shadow-lg">
                                <CardBody className="card-body">
                                    <Typography variant="h4" className="mb-2">
                                        {repo.name}
                                    </Typography>
                                    <Typography variant="p" className="mb-2">
                                        {repo.description}
                                    </Typography>
                                    <div className="flex justify-start">
                                        <span className="mr-4" title="stars">
                                            ⭐ {repo.stargazers_count}
                                        </span>
                                        <span className="mr-4" title="forks">
                                            📌 {repo.forks_count}
                                        </span>
                                    </div>
                                </CardBody>
                            </Card>
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default OpenSource;
