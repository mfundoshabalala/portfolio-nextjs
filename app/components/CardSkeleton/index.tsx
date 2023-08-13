
import { FC } from 'react';
import './CardSkeleton.css';

const CardSkeleton: FC = () => {
	return (
		<div className='skeleton-blog'>
		<header>
			<div className='skeleton-avatar'></div>
			<div className='skeleton-author'></div>
		</header>
		<main className='skeleton-image'></main>
		<footer className='skeleton-footer'></footer>
		</div>
	);
};

export default CardSkeleton;
