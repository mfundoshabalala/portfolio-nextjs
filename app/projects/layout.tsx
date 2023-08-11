import { FC, Fragment, ReactNode } from 'react';

interface ProjectsLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const ProjectsLayout: FC<ProjectsLayoutProps> = ({ children }) => {
  return (
    <main className='container mx-auto'>
      <section className='body-font text-gray-600'>
        <div className='container mx-auto px-5 py-20'>{children}</div>
      </section>
    </main>
  );
};

export default ProjectsLayout;
