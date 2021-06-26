import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import OpenSourceCard from '../OpenSourceCard';

const StyledOpenSource = styled.div`
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
        return <OpenSourceCard repo={repo} showRepoStat key={repo.html_url} />;
      })}
    </StyledOpenSource>
  );
};

export default OpenSource;
