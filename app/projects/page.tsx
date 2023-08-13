import { Fragment, Suspense } from 'react';
import Repositories from '../components/Repositories';
import RepositoryModal from '../components/RepositoryModal';
import CardSkeleton from '../components/CardSkeleton';

export default function Page() {
  const ProjectHeader = () => {
    return (
      <div className='mb-20 flex w-full flex-col text-center'>
        <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-indigo-500'>
          MFUNDO BRIGHT SHABALALA
        </h2>
        <h1 className='title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl'>
          Master Cleanse Reliac Heirloom
        </h1>
        <p className='mx-auto text-base leading-relaxed lg:w-2/3'>
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably havent
          heard of them man bun deep jianbing selfies heirloom prism food truck
          ugh squid celiac humblebrag.
        </p>
      </div>
    );
  };
  return (
    <Fragment>
      <ProjectHeader />
      <Repositories />
    </Fragment>
  );
}
