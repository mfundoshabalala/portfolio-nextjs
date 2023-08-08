'use client';

import Repository from '@/app/lib/types';
import { useState } from 'react';


interface RepositoryCardProps {
  repo: Repository;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repo }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="repository-card" onClick={handleCardClick}>
      <div className="repository-front">
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

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{repo.name}</h2>
            <p>Description: {repo.description || 'No description available.'}</p>
            <p>Language: {repo.language}</p>
            <p>Stars: {repo.stargazers_count}</p>
            <p>Forks: {repo.forks_count}</p>
            <p>Last Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
            <p>Technologies and Tools: {/* Add technologies and tools used */}</p>
            <p>Contributing Guidelines: {/* Add contributing guidelines */}</p>
            {repo.homepage && (
              <p>
                <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </p>
            )}
            <p>Contact: {/* Add contact information */}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RepositoryCard;
