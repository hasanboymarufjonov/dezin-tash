import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import virusLogo from "../assets/icons/virus.png";

const Consultation = () => {
  return (
    <div className="py-24 max-w-5xl mx-auto">
      <div className="lg:float-left pt-10 pb-20 w-[300px] lg:w-fit mx-auto lg:mx-0">
        <div>
          <h2 className="text-3xl lg:text-5xl">Все еще думаете? </h2>
        </div>
        <div>
          <p className="text-lg lg:text-xl pt-4 lg:max-w-[620px]">
            Тогда получите бесплатную консультацию от наших специалистов.
          </p>
        </div>
        <div className="flex gap-4 mt-10">
          <a
            href="tel:+998712004448"
            className="w-full lg:w-fit relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#FDE910] group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Вызвать специалиста
            </span>
          </a>
        </div>
      </div>
      <div className=" relative flex justify-center items-center">
        <span className="animate-spin relative rounded-full border-[35px] lg:border-[50px] border-gray border-t-[#FDE910] h-72 w-72 p-8 lg:h-96 lg:w-96 lg:p-16"></span>
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={virusLogo}
            alt="virus Logo"
            className="inset-0 pointer-events-none w-36 lg:w-48 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default Consultation;
