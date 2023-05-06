import React from "react";
import CountUp from "react-countup";
import { useState } from "react";

const MethodsProcess = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-[#363532] px-4 lg:px-40 py-20 text-white" id="process">
      <h2 className="text-[#FDE910] text-lg uppercase">Методы обработки</h2>
      <p className="text-5xl pt-5">
        Поможем подобрать правильный метод обработки.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-20">
        <div className="border-t border-white pt-4">
          <h3 className="text-3xl">01. Холодный туман</h3>
          <p className="text-lg pt-6 ">
            Производимый туман состоит из мельчайших капель пара с инсектицидом.
            Они намного мельче, чем производимые опрыскивателем. По этой причине
            смесь капелек с воздухом равномерно оседает на потолке, мебели,
            панелях и попадает в недоступные места
          </p>
        </div>
        <div className="border-t border-white pt-4">
          <h3 className="text-3xl ">02. Горячий туман</h3>
          <p className="text-lg pt-6">
            Распыление в помещении нагретого ядохимиката. Насекомые подвергаются
            двустороннему воздействию: горячая обработка газом и травля
            инсектицидом. Наиболее эффективный вариант избавления от вредителей
          </p>
        </div>
        <div className="border-t border-white pt-4">
          <h3 className="text-3xl">03. Комплекc обработка</h3>
          <p className="text-lg pt-6">
            Самый мощный удар по паразитам с эффективной длительной барьерной
            защитой. Применяется в двух случаях: когда в квартире сложилась
            невыносимая ситуация с вредителями, либо для перестраховки на
            случай, чтобы снова принесенные насекомые не смогли в ней выжить
          </p>
        </div>
      </div>
      <div className="lg:flex items-center pt-20">
        <div className="w-full lg:w-1/2 ">
          <p className="text-2xl lg:text-4xl">
            Мы используем современное высокотехнологичное оборудование. У
            вредителей не будет шанса на выживание!
          </p>
        </div>
        <div
          className="w-full lg:w-1/2 text-[120px] lg:text-[164px] flex justify-center "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CountUp
            start={isHovered ? 0 : 100}
            end={100}
            duration={2}
            separator=""
            suffix="%"
          />
        </div>
      </div>
      <div className="">
        {" "}
        <a
          href="tel:+998712004448"
          className="w-full lg:w-fit relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all     duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group "
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
  );
};

export default MethodsProcess;
