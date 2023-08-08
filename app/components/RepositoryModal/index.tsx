'use client';

import Link from 'next/link'
import { useRouter } from 'next/router';

const RepositoryModal = () => {
	const router = useRouter()
	return (
		<div className="modal">
			<h1>Modal Title</h1>
			<p>Modal Body</p>
			<button onClick={router.back}>Ok</button>
		</div>
	)
}

export default RepositoryModal;