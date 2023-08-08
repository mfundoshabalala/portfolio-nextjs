'use client';

import React, { useEffect, useState } from 'react';
import getRepositories from '../utils/getRepositories';
import RepositoryCard from './RepositoryCard';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

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

  const searchParams = useSearchParams();
  const showModal = searchParams.has('repo');

  return (
    <section>
      {showModal && <h1>Hello World</h1>}
      <ul className='grid grid-cols-3 gap-4'>
        {repositories.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </ul>
    </section>
  );
};

export default Repositories;
