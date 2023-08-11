'use client';

import RepositoryCard from './RepositoryCard';
import useRepositories from '../utils/hooks/useRepositories';

const Repositories = () => {
  const username = 'mfundoshabalala';
  const { repositories } = useRepositories({ username: username });

  return (
    <ul className='grid grid-cols-3 gap-3'>
      {repositories.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} />
      ))}
    </ul>
  );
};

export default Repositories;
