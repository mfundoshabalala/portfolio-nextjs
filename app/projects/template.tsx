export default function Template({ children }: { children: React.ReactNode }) {
  return (
	<div>
		<h1>Projects Template part</h1>
		<div>{children}</div>
	</div>
  );
};