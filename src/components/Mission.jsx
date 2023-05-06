import React from "react";

const Mission = () => {
  return (
    <div>
      {/* <div className="relative mt-10 h-screen bg-[#363532] pt-10 sm:pt-0 mb-10 max-h-[800px]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-[#363532]">
          <div className="content">
            <div className="flex items-center gap-3">
              <span className="md:text-[18px] font-medium text-[#FDE910] ">
                Наша миссия{" "}
              </span>
            </div>
            <p className="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0  text-white">
              Основная Задача Dezintash
            </p>
            <p className="mt-5 md:text-md text-white">
              Основная Задача «Dezintash» — защита клиентов и их иммущества от
              всевозможных паразитов и вредителей. Вы можете вызвыть наших
              специалистов и избавиться от насекомых, грызунов или бактерии
              навсегда. Также можете получить бесплатную консультацию по
              избавлении насекомых прямо сейчас.
            </p>
            <div className="flex gap-4 mt-10">
              <a
                href="#_"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
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
          <div className="relative px-0">
            <img className="w-full" src="src/assets/cleaning2.jpg" alt="" />
          </div>
        </div>
      </div> */}
      <div className="mx-auto overflow-hidden bg-[#363532]">
        <div className="md:flex">
          <div className="p-6 lg:p-32 grid content-center gap-3">
            <div className="uppercase tracking-wide text-[#FDE910] font-semibold text-lg">
              Наша миссия{" "}
            </div>
            <a
              href="#"
              className="block mt-1 lg:text-5xl text-3xl leading-tight font-medium text-white hover:underline"
            >
              Основная Задача Dezintash
            </a>
            <p className="mt-2 text-white text-lg ">
              Основная Задача «Dezintash» — защита клиентов и их иммущества от
              всевозможных паразитов и вредителей. <br /> <br /> Вы можете
              вызвыть наших специалистов и избавиться от насекомых, грызунов или
              бактерии навсегда. Также можете получить бесплатную консультацию
              по избавлении насекомых прямо сейчас.
            </p>
            <div className="flex gap-4 mt-10">
              <a
                href="tel:+998712004448"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
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
          <div className="md:shrink-0">
            <img
              className="h-full w-full object-cover md:h-full md:w-full"
              src="src/assets/cleaning2.jpg"
              alt="Modern building architecture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
