import React from 'react';
import Card, { CardBody } from '../common/Card';
import Typography from '../common/Typography';

const repos = [
    {
        name: 'mongoose',
        description:
            'MongoDB object modeling designed to work in an asynchronous environment.',
        html_url: 'https://github.com/Automattic/mongoose',
    },
    {
        name: 'DefinitelyTyped',
        description:
            'The repository for high quality TypeScript type definitions.',
        html_url: 'https://github.com/DefinitelyTyped/DefinitelyTyped',
    },
    {
        name: 'node-archiver',
        description: 'a streaming interface for archive generation',
        html_url: 'https://github.com/archiverjs/node-archiver',
    },
    {
        name: 'node-zip-stream',
        description: 'a streaming zip archive generator',
        html_url: 'https://github.com/archiverjs/node-zip-stream',
    },
];
const CommunityOpenSource = () => {
    return (
        <div className="flex flex-wrap -mx-2">
            {repos.map((repo) => {
                return (
                    <div className="px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4">
                        <a href={repo.html_url} target="_blank">
                            <Card className="border rounded-none transition transform duration-500 ease-in-out hover:shadow hover:scale-105">
                                <CardBody className="card-body">
                                    <Typography variant="h4" className="mb-2">
                                        {repo.name}
                                    </Typography>
                                    <Typography variant="p" className="mb-2">
                                        {repo.description}
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

export default CommunityOpenSource;
