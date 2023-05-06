import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-[#FDE910]">
        <div className="relative overflow-hidden]">
          <div className="absolute top-16 right-[600px] w-[188px] h-[188px]  rounded-full mix-blend-multiply animate-blob bg-gradient-to-r from-[#FDE910] to-[#e6d30a]"></div>
          <div className="absolute top-64 right-[600px] w-[161px] h-[161px]  rounded-full mix-blend-multiply animate-blob animation-delay-2000 bg-gradient-to-r from-[#FDE910] to-[#e6d30a]"></div>
          <div className="absolute bottom-10 right-10 w-[146px] h-[146px]  rounded-full mix-blend-multiply animate-blob animation-delay-4000 bg-gradient-to-r from-[#FDE910] to-[#e6d30a]"></div>
          <div className="absolute top-64 right-64 w-[132px] h-[132px]  rounded-full mix-blend-multiply animate-blob animation-delay-6000 bg-gradient-to-r from-[#FDE910] to-[#e6d30a]"></div>
          <div className="absolute top-64 right-[500px] w-[90px] h-[90px]  rounded-full mix-blend-multiply animate-blob animation-delay-8000 bg-gradient-to-r from-[#FDE910] to-[#e6d30a]"></div>
          <div className="absolute top-32 right-64 w-[92px] h-[92px]  rounded-full mix-blend-multiply animate-blob animation-delay-10000 bg-gradient-to-r from-[#FDE910] to-[#e6d30a]"></div>
          <div className="max-w-[88rem] mr-3">
            <button className="rounded-full  border border-black float-right w-10 h-10 ml-2">
              Uz
            </button>
            <button className="rounded-full bg-white border-1 border border-black float-right w-10 h-10">
              Ру
            </button>
          </div>
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div className="mt-5  text-left mx-auto">
              <h1 className="block font-bold text-black text-4xl md:text-5xl lg:text-6xl">
                Эффективное уничтожение <br />
                вредителей.
              </h1>
            </div>

            <div className="mt-5 text-left mx-auto">
              <p className="text-lg text-black">
                Избавьтесь от насекомых, грызунов и вирусов <br /> уже сегодня!
              </p>
            </div>

            <div className="mt-8 flex justify-between">
              {/* <a
                className="inline-flex justify-center items-center gap-x-3 text-center  border border-black rounded px-8 py-2 bg-white text-black text-sm font-medium"
                href="#"
              >
                Вызвать дезинфектора{" "}
                <img src="https://img.icons8.com/ios/36/null/long-arrow-right--v1.png" />
              </a> */}

              <a
                href="tel:+998712004448"
                className="w-full lg:w-fit relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#363532] group-hover:h-full"></span>
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
                    className="w-5 h-5 text-white"
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
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white  ">
                  Вызвать дезинфектора
                </span>
              </a>

              <a
                className="inline-flex justify-right items-center gap-x-3.5  text-sm font-medium max-[1200px]:hidden"
                href="#"
              >
                <span className="">
                  <img
                    src="https://img.icons8.com/ios-filled/50/null/play--v1.png"
                    className="border rounded-full border-black bg-white w-6 p-1"
                  />
                </span>
                <a href="#clients">
                  <p className="hover:underline">Отзывы клиентов</p>
                </a>
              </a>
            </div>

            <div className="mt-10 flex justify-left items-center gap-x-1 sm:gap-x-3 max-[800px]:hidden">
              <a href="#team">
                <span className="text-sm text-black hover:underline">
                  Как это произойдет?
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
