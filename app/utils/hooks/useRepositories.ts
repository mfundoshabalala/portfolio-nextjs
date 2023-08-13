import { useEffect, useState } from 'react';
import getRepositories from '@/app/utils/getRepositories';
import Repository from '@/app/lib/types';
import { formatRepoName } from '../common';

const useRepositories = ({ username }: { username: string }) => {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            // Check if repositories are present in localStorage
            const storedRepos = localStorage.getItem('repositories');
            const storedTimestamp = localStorage.getItem('repositoriesTimestamp');

            if (storedRepos && storedTimestamp) {
                // Convert stored timestamp to milliseconds
                const storedTime = new Date(storedTimestamp).getTime();
                const currentTime = new Date().getTime();
                const timeDiff = currentTime - storedTime;

                // Revalidate data if more than 24 hours (86400000 milliseconds) have passed
                if (timeDiff < 2*60) {
                    setRepositories(JSON.parse(storedRepos));
                    return;
                }
            }

            // Fetch repositories if not stored or revalidation time has passed
            const repos:Repository[] = await getRepositories(username);
            // Format repositories name
            for (const repo of repos) {
                repo.name = formatRepoName(repo.name);
            }
            setRepositories(repos);

            // Store fetched repositories and timestamp in localStorage
            localStorage.setItem('repositories', JSON.stringify(repos));
            localStorage.setItem('repositoriesTimestamp', new Date().toISOString());
        };

        fetchData();
    }, [username]);

    return { repositories };
};

export default useRepositories;
