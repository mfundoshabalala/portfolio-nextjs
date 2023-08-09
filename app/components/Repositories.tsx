'use client';

// hooks
import useModal from '../utils/hooks/useModal';
import useRepositories from '../utils/hooks/useRepositories';
// ui components
import RepositoryCard from './RepositoryCard';
import RepositoryModal from './RepositoryModal';

const Repositories = () => {
	const username = 'mfundoshabalala';
	const { showModal } = useModal({ name: 'repo' });
	const { repositories } = useRepositories({ username: username });

	return (
		<section>
			{showModal && <RepositoryModal />}
			<ul className='grid grid-cols-3 gap-4'>
				{repositories.map((repo) => (
					<RepositoryCard key={repo.id} repo={repo} />
				))}
			</ul>
		</section>
	);
};

export default Repositories;
