'use client';

import Link from 'next/link'
import { FC, ReactNode } from 'react';

interface RepositoryModalProps {
	children?: ReactNode,
	closeModal?: any
}

const RepositoryModal: FC<RepositoryModalProps> = ({ children, closeModal}) => {
	return (
		<div className="overlay">
			<div className="modal">
				<h1>Modal Title</h1>
				<p>Modal Body</p>
				{children}
				<Link
					scroll={false}
					href={closeModal}>
				Close</Link>
			</div>
		</div>
	)
}

export default RepositoryModal;