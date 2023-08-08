'use client';

import Repository from '@/app/lib/types';
import Link from 'next/link';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

interface RepositoryCardProps {
  repo: Repository;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repo }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleCardClick = () => {
    const href = pathname + '?repo=' + repo.id;
    router.push(href);
  }

  return (
    <div className="repository-card" onClick={handleCardClick}>
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
    </div>
  );
};

export default RepositoryCard;
