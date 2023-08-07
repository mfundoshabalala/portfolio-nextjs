'use client';

import React, { useEffect, useState } from 'react';
import getRepositories from '../utils/getRepositories';
import FlipCard from './FlipCard';

const Repositories = () => {
  const [repositories, setRepositories] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const username = 'mfundoshabalala'; // Replace this with the desired GitHub username
      const repos = await getRepositories(username);
      console.log(repos[0]);
      setRepositories(repos);
    };

    fetchData();
  }, []);

  const CardFront = ({ repo }: any) => {
    return (
      <div>
          <h2>{repo.name}</h2>
          <p>Description: {repo.description || 'No description available.'}</p>
         <p>Language: {repo.language}</p>
        <p>Stars: {repo.stargazers_count}</p>
        <p>Forks: {repo.forks_count}</p>
        <p>Last Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    );
  };

  const CardBack = ({ repo }: any) => {
    return (
      <div>
        <h3>Languages:</h3>
        <ul>
          {Object.keys(repo.languages).map((language) => (
            <li key={language}>
              {language}: {repo.languages[language]} lines
            </li>
          ))}
        </ul>
        <h3>Key Features:</h3>
        <ul>
          {/* Add the key features here */}
        </ul>
        {repo.homepage && (
          <p>
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </p>
        )}
        <p>Technologies and Tools: {/* Add technologies and tools used */}</p>
        <p>Contributing Guidelines: {/* Add contributing guidelines */}</p>
        <p>Contact: {/* Add contact information */}</p>
      </div>
    );
  };

  return (
    <ul className='grid gap-4 grid-cols-3'>
      {repositories.map((repo) => (
        <FlipCard
          frontContent={<CardFront repo={repo} />}
          backContent={<CardBack repo={repo} />}
        />
      ))}
    </ul>
  );
};

export default Repositories;
