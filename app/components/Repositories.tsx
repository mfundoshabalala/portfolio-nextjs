'use client';

import RepositoryCard from './RepositoryCard';
import useRepositories from '../utils/hooks/useRepositories';
import { Fragment, Suspense } from 'react';
import CardSkeleton from './CardSkeleton';

const Repositories = () => {
  const username = 'mfundoshabalala';
  const { repositories } = useRepositories({ username: username });

  return (
    <Fragment>
      <Suspense fallback={<CardSkeleton />}>
        <ul className='flex flex-wrap gap-3 justify-center'>
          {repositories.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))}
        </ul>
      </Suspense>
    </Fragment>
  );
};

export default Repositories;
