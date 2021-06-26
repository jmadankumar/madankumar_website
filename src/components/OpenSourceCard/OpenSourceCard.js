import React from 'react';
import Card, { CardBody } from '../common/Card';
import styled from '@emotion/styled';

const StyledOpenSourceCard = styled.div`
  .card {
    background-color: var(--os-card-color) !important;
    border-radius: 1.5rem;
  }
  .title {
    color: var(--text-color);
  }
  .description {
    color: var(--github-project-description-text-color);
  }
`;

const OpenSourceCard = ({ repo, showRepoStat }) => {
  return (
    <StyledOpenSourceCard className="px-4 w-full sm:w-1/2 md:w-1/2 2xl:w-1/3 mb-8">
      <a href={repo.html_url} target="_blank" rel="noreferrer noopener">
        <Card className="card transition transform duration-500 ease-in-out hover:shadow hover:scale-105">
          <CardBody className="card-body">
            <div className="title text-xl mb-2">{repo.name}</div>
            <div className="description text-base mb-2">{repo.description}</div>
            {showRepoStat && (
              <div className="flex justify-start">
                <span
                  className="mr-4"
                  title="stars"
                  role="img"
                  aria-label="emoji-label"
                >
                  ⭐ {repo.stargazers_count}
                </span>
                <span
                  className="mr-4"
                  title="forks"
                  role="img"
                  aria-label="emoji-label"
                >
                  📌 {repo.forks_count}
                </span>
              </div>
            )}
          </CardBody>
        </Card>
      </a>
    </StyledOpenSourceCard>
  );
};

export default OpenSourceCard;
