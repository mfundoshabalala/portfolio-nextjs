import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const useModal = ({ name }: { name:string }) => {
	const searchParams = useSearchParams();
	const showModal = searchParams.has(name);
	const router = useRouter();
	const dialogRef = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		if (showModal) {
			dialogRef.current?.showModal();
		}
	}, [showModal])

	const closeModal = () => {
		router.back();
		dialogRef.current?.close();
	}
	return { showModal, closeModal, dialogRef };
}

export default useModal