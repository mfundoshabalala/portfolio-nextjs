'use client';

import Link from 'next/link';
import Repository from '@/app/lib/types';
import { usePathname, useRouter } from 'next/navigation';

interface RepositoryCardProps {
  repo: Repository;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repo }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleCardClick = () => {
    const href = pathname + '?repo=' + repo.id;
    router.push(href);
  };

  return (
    <div className='w-full hover:cursor-pointer' onClick={handleCardClick}>
      <div className='h-full overflow-hidden rounded-lg border-2 border-gray-400 border-opacity-40'>
        <div className='p-6'>
          <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400'>
            {repo.language}
          </h2>
          <h1 className='title-font mb-3 text-lg font-medium text-gray-900'>
            {repo.name}
          </h1>
          <p className='mb-3 leading-relaxed'>
            {repo.description || 'No description available.'}
          </p>
          <div className='flex flex-wrap items-center'>
            <Link
              href={`?repo=${repo.id}`}
              className='inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0'
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="repository-card" onClick={handleCardClick}>
  <div className="repository-front">
    <h2>{repo.name}</h2>
    <p>Description: {repo.description || 'No description available.'}</p>
    <p>Language: {repo.language}</p>
    <p>Stars: {repo.stargazers_count}</p>
    <p>Forks: {repo.forks_count}</p>
    <p>Last Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
    <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
      View on GitHub
    </Link>
  </div>
</div> */
}

export default RepositoryCard;
