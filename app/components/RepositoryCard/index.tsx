'use client';

import Link from 'next/link';
import Repository from '@/app/lib/types';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

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
    <div className="p-4 w-full hover:cursor-pointer" onClick={handleCardClick}>
        <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
            {/* <Image className="object-cover object-center w-full lg:h-48 md:h-36" src="https://dummyimage.com/721x401" alt="blog"> */}
            <div className="p-6">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">{repo.language}</h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">{repo.name}</h1>
                <p className="mb-3 leading-relaxed">{repo.description || 'No description available.'}</p>
                <div className="flex flex-wrap items-center">
                    <Link href={`?repo=${repo.id}`} className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">Learn More
                    {/* <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg> */}
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};
{/* <div className="repository-card" onClick={handleCardClick}>
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
</div> */}

export default RepositoryCard;
