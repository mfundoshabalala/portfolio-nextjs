'use client';

import useModal from '@/app/utils/hooks/useModal';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

interface RepoModalProps {
  children?: ReactNode;
}

const RepositoryModal: FC<RepoModalProps> = (props) => {
  const { children } = props;
  const { dialogRef, closeModal } = useModal({ name: 'repo' });

  const ModalHeader = () => {
    return <header>Header</header>;
  };

  const ModalFooter = () => {
    return <footer>Footer</footer>;
  };

  const ModalBody = () => {
    return <main>{children}</main>;
  };

  const ModalAside = ({ src }: { src: string }) => {
    return <Image src={src} width='745' height='265' alt='Repo Image' />;
  };

  return (
    <dialog ref={dialogRef} className='w-full max-w-2xl'>
      <section className='container'>
        <ModalAside src='https://dummyimage.com/600x400' />
        <ModalHeader></ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter></ModalFooter>
      </section>
      <button
        onClick={closeModal}
        autoFocus
        className='text- inline-flex rounded border-0 bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-600 focus:outline-none'
      >
        Close
      </button>
    </dialog>
  );
};

export default RepositoryModal;
