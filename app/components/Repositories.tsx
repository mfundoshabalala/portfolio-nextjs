'use client';

import React, { useEffect, useState } from 'react';
import getRepositories from '../utils/getRepositories';

const Repositories = () => {
  const [repositories, setRepositories] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const username = 'mfundoshabalala'; // Replace this with the desired GitHub username
      const repos = await getRepositories(username);
      setRepositories(repos);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {repositories.map((repo) => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
};

export default Repositories;
