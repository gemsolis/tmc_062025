import { contactInfo } from "@/data/data";
import { IoSend } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import SecondaryForm from "../forms/SecondaryForm";
import Link from "next/link";

const FormModal = ({ inquireOpen, setInquireOpen }) => {
  return (
    <div
      className={`fixed  bg-black bg-opacity-60 top-0 left-0 max-md:scrollbar-hidden w-[100vw] h-[100vh] z-50 flex justify-center items-center transition-transform duration-500 ${
        inquireOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className="overlay w-[100vw] h-[100vh] absolute top-0 left-0 z-30"
        onClick={() => setInquireOpen(false)}
      ></div>
      <div
        className={`w-[95vw] h-[auto] max-lg:w-[95vw] max-md:w-[90vw] bg-white shadow-lg border border-white rounded-lg relative z-40 transform transition-transform duration-500 ${
          inquireOpen ? "translate-y-0" : "translate-y-full"
        } max-h-[90vh] overflow-y-auto`}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between sticky top-0 right-0 left-0 w-full p-2 bg-white">
          <div className="flex items-center gap-2">
            <span className="text-white bg-black p-2 rounded-md border-b border-gray-400 ">
              <IoSend />
            </span>
            <span className="font-semibold">Contact Us</span>
          </div>
          {/* Close button */}
          <div
            className="text-deepRed text-[36px] cursor-pointer hover:rotate-90 transition-all duration-200"
            onClick={() => setInquireOpen(false)}
          >
            <IoClose />
          </div>
        </div>

        <div className="flex flex-column items-center justify-between gap-10 w-full py-6 px-4">
          <div>
            <h3 className="text-[20px] max-md:text-[16px] font-normal text-lightRed pt-4">
              We’re here to answer your questions and assist you with your
              security needs. Reach out to our team today!
            </h3>
            <div className="flex flex-col justify-center items-center mt-10">
              <ul className="flex flex-col gap-4">
                {contactInfo.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-start items-start p-6 max-md:p-4 bg-white rounded-lg shadow-lg gap-3"
                  >
                    {/* Icon */}
                    <span className="text-lightRed bg-black rounded-lg p-4 text-[24px]">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-black">{item.title}</p>
                      <Link
                        href={item.link}
                        target="_blank"
                        className="text-lightRed font-semibold"
                      >
                        {item.info}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Secondary form */}
          <div className="w-full section-bg p-6 rounded-md">
            <SecondaryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
