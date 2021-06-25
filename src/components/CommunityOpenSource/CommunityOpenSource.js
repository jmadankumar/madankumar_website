import styled from '@emotion/styled';
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
    description: 'The repository for high quality TypeScript type definitions.',
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

const StyledCommunityOpenSource = styled.div`
  .card {
    background-color: var(--os-card-color) !important;
    border-radius: 1.5rem;
  }
`;
const CommunityOpenSource = () => {
  return (
    <StyledCommunityOpenSource className="flex flex-wrap -mx-4">
      {repos.map((repo) => {
        return (
          <div className="px-4 w-full sm:w-1/2 md:w-1/2 2xl:w-1/3 mb-8">
            <a href={repo.html_url} target="_blank" rel="noreferrer noopener">
              <Card className="card transition transform duration-500 ease-in-out hover:shadow hover:scale-105">
                <CardBody className="card-body">
                  <Typography variant="h4" className="mb-2">
                    {repo.name}
                  </Typography>
                  <Typography variant="p" className="text-gray-600 mb-2">
                    {repo.description}
                  </Typography>
                </CardBody>
              </Card>
            </a>
          </div>
        );
      })}
    </StyledCommunityOpenSource>
  );
};

export default CommunityOpenSource;
