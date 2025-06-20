import { useEffect } from "react";

const Alert = ({ message, onClose, type }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, 3000);

		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<div
			className={`mt-1 py-1 px-4 rounded-md shadow-md flex items-center justify-center duration-200 ${
				type === "success"
					? "bg-green-500 text-white"
					: "bg-red-500 text-white"
			}`}
		>
			<span>{message}</span>
		</div>
	);
};

export default Alert;
