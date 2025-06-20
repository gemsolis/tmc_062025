import Link from "next/link";

const PrimaryButton = ({ title, type = "button", ...props }) => {
  return (
    <button
      type={type}
      className="relative inline-flex items-center justify-start px-6 max-md:px-4 py-4 max-md:py-2 overflow-hidden font-medium transition-all bg-deepRed rounded-lg hover:bg-red-700 group"
      {...props}
    >
      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-200 transition-all border-red-700 rounded-lg"></span>
      <span className="relative w-full text-center text-white font-bold transition-colors duration-300 ease-in-out group-hover:text-white">
        {title}
      </span>
    </button>
  );
};

export default PrimaryButton;
