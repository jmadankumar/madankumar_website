import styled from '@emotion/styled';
import React from 'react';
import OpenSourceCard from '../OpenSourceCard';

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
`;
const CommunityOpenSource = () => {
  return (
    <StyledCommunityOpenSource className="flex flex-wrap -mx-4">
      {repos.map((repo) => {
        return <OpenSourceCard repo={repo} key={repo.html_url} />;
      })}
    </StyledCommunityOpenSource>
  );
};

export default CommunityOpenSource;
