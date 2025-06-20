import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const NavButtons = () => {
  return (
    <>
      <div className="flex gap-2 justify-between items-center">
        <Link
          href="/"
          className="bg-white rounded-full p-3 text-red-900 hover:bg-red-900 hover:text-white"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="/"
          className="flex gap-2 justify-center items-center bg-red-900 rounded-full px-4 py-1 text-white hover:bg-white hover:text-red-900"
        >
          <span className="bg-black rounded-full p-3 text-red-900 hover:bg-black hover:text-white">
            <FaArrowRight />
          </span>
          <span>Inquire Today!</span>
        </Link>
      </div>
    </>
  );
};

export default NavButtons;
