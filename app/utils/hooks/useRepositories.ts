import { useEffect, useState } from 'react';
import getRepositories from '../getRepositories';

const useRepositories = ({ username }: { username: string }) => {
	const [repositories, setRepositories] = useState<any[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const repos = await getRepositories(username);
			setRepositories(repos);
		};

		fetchData();
	}, [username]);

	return { repositories };
};

export default useRepositories;
