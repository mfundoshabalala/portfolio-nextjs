import { FC, ReactNode } from "react";

interface ProjectsLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const ProjectsLayout: FC<ProjectsLayoutProps> = ({ children, modal }) => {
	return(
		<section>
			<main className="container p-4">{children}</main>
			{modal}
		</section>
	);
};

export default ProjectsLayout;