import { useSearchParams } from "next/navigation";

const useModal = ({ name }: { name:string }) => {
	const searchParams = useSearchParams();
	const showModal = searchParams.has(name);
	return { showModal };
}

export default useModal