'use client';

import React, { useEffect, useState } from 'react';
import getRepositories from '../utils/getRepositories';

const Repositories = () => {
  const [repositories, setRepositories] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
        const username = 'mfundoshabalala'; // Replace this with the desired GitHub username
        const repos = await getRepositories(username);
        console.log(repos[0])
        setRepositories(repos);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {repositories.map((repo) => (
        <li key={repo.id}>
          <strong>{repo.name}</strong>
          <ul>
            {Object.keys(repo.languages).map((language) => (
              <li key={language}>
                <strong>{language}:</strong> {repo.languages[language]}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Repositories;
