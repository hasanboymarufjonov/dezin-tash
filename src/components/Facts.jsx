import React from "react";
import CountUp from "react-countup";
import { useState } from "react";

const Facts = ({ endValue }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ">
      <p className="pt-24 pb-10 text-5xl">Пусть цифры говорят</p>
      {/* <div
        className="flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>
          <p>Факт 1</p>
          <hr className="border-black" />
          <CountUp
            start={isHovered ? 0 : 100}
            end={100}
            duration={2}
            className="text-7xl"
          />
          <p className="text-base">Отработка повторная по гарантии</p>
        </span>
        <span className="ml-10">
          <p>Факт 2</p>
          <hr className="border-black" />
          <CountUp
            start={isHovered ? 0 : 100}
            end={200}
            duration={2}
            className="text-7xl"
          />
          <p className="text-base">Методики изменили в течении 10 лет</p>
        </span>
        <span className="ml-10">
          <p>Факт 3</p>
          <hr className="border-black" />
          <CountUp
            start={isHovered ? 0 : 100}
            end={200}
            duration={2}
            className="text-7xl"
          />
          <p className="text-base">Клиентов нас порекоммендовали</p>
        </span>
        <span className="ml-10">
          <p>Факт 4</p>
          <hr className="border-black" />
          <CountUp
            start={isHovered ? 0 : 100}
            end={200}
            duration={2}
            className="text-7xl"
          />
          <p className="text-base">Случаев уничтожения с первого раза</p>
        </span>
      </div> */}
      <div
        className="flex flex-wrap justify-center sm:justify-between"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full sm:w-auto mb-10 sm:mb-0 sm:mr-10">
          <p className="text-lg font-semibold mb-2">Факт 1</p>
          <hr className="border-black mb-4" />
          <CountUp
            start={isHovered ? 0 : 1250}
            end={1250}
            duration={2}
            className="text-7xl font-bold"
            separator=""
          />
          <p className="text-sm">Отработка повторная по гарантии</p>
        </div>
        <div className="w-full sm:w-auto mb-10 sm:mb-0 sm:mr-10">
          <p className="text-lg font-semibold mb-2">Факт 2</p>
          <hr className="border-black mb-4" />
          <CountUp
            start={isHovered ? 0 : 94}
            end={94}
            duration={1.9}
            className="text-7xl font-bold"
          />
          <p className="text-sm">Методики изменили в течении 10 лет</p>
        </div>
        <div className="w-full sm:w-auto mb-10 sm:mb-0 sm:mr-10">
          <p className="text-lg font-semibold mb-2">Факт 3</p>
          <hr className="border-black mb-4" />
          <CountUp
            start={isHovered ? 0 : 1597}
            end={1597}
            duration={2.1}
            className="text-7xl font-bold"
            separator=""
          />
          <p className="text-sm">Клиентов нас порекоммендовали</p>
        </div>
        <div className="w-full sm:w-auto">
          <p className="text-lg font-semibold mb-2">Факт 4</p>
          <hr className="border-black mb-4" />
          <CountUp
            start={isHovered ? 0 : 7258}
            end={7258}
            duration={2.2}
            className="text-7xl font-bold"
            separator=""
          />
          <p className="text-sm">Случаев уничтожения с первого раза</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
