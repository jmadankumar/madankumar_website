import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../common/Card';

const OpenSource = () => {
  const [repos, setRepos] = useState([]);

  const fetchRepo = async () => {
    const { data } = await axios.get(
      ' https://api.github.com/users/jmadankumar/repos?type=public'
    );
    data.sort((repo1, repo2) => {
      return new Date(repo1.created_at) < new Date(repo2.created_at) ? 1 : -1;
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
              <Card className="shadow border rounded-none">
                <div className="card-body">
                  <h1 className="text-xl mb-2">{repo.name}</h1>
                  <p className="text-md mb-2">{repo.description}</p>
                  <div className="flex justify-start">
                    <span className="mr-4" title="stars">
                      ⭐ {repo.stargazers_count}
                    </span>
                    <span className="mr-4" title="forks">
                      📌 {repo.forks_count}
                    </span>
                  </div>
                </div>
              </Card>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default OpenSource;
