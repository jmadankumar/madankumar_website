import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card, { CardBody } from '../common/Card';
import Typography from '../common/Typography';
import styled from '@emotion/styled';

const StyledOpenSource = styled.div`
  .card {
    background-color: var(--os-card-color) !important;
    border-radius: 1.5rem;
  }
`;

const OpenSource = () => {
  const [repos, setRepos] = useState([]);

  const fetchRepo = async () => {
    const { data } = await axios.get(
      'https://api.github.com/users/jmadankumar/repos?type=public'
    );
    data.sort((repo1, repo2) => {
      return new Date(repo1.updated_at) < new Date(repo2.updated_at) ? 1 : -1;
    });
    const filteredRepos = data.filter((repo) => !repo.fork);
    setRepos([...filteredRepos]);
  };

  useEffect(() => {
    fetchRepo();
  }, []);

  return (
    <StyledOpenSource className="flex flex-wrap -mx-4">
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
                </CardBody>
              </Card>
            </a>
          </div>
        );
      })}
    </StyledOpenSource>
  );
};

export default OpenSource;
