'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';

interface RepoModalProps {
	children?: ReactNode;
}

const RepositoryModal: FC<RepoModalProps> = (props) => {
	const { children } = props;
	const router = useRouter();

	return (
		<div className='overlay'>
			<div className='modal'>
				<h1>Modal Title</h1>
				<p>Modal Body</p>
				{children}
				<Link scroll={false} onClick={router.back} href=''>
					Close
				</Link>
			</div>
		</div>
	);
};

export default RepositoryModal;
