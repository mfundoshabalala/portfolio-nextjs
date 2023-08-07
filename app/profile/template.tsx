export default function Template({ children }: { children: React.ReactNode }) {
  return (
	<div>
		<h1>Profile Template</h1>
		<div>{children}</div>
	</div>
  );
};