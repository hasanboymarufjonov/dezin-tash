import { useState } from "react";

import background1 from "../assets/background/background-1.png";
import background2 from "../assets/background/background-2.png";
import background3 from "../assets/background/background-3.png";

import one from "../assets/numbers/1.png";
import two from "../assets/numbers/2.png";
import three from "../assets/numbers/3.png";

const HowWeWork = () => {
  const [backgroundImage, setBackgroundImage] = useState(`url(${background1})`);

  const [backgroundText, setBackgroundText] = useState(
    "Делаем так что бы было безопасно вам и вашим младенцом! Не оставляем следов после обработки, не портим мебель, ламинат и обои!"
  );

  const handleHover = (image, text) => {
    setBackgroundImage(`url('${image}')`);
    setBackgroundText(`${text}`);
  };

  return (
    <div
      className="min-h-screen flex items-start  bg-cover bg-no-repeat bg-center pt-20"
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <div className="lg:text-5xl space-x-8  max-w-7xl mx-auto ">
        <p className="text-lg text-[#FDE910] uppercase ml-10">
          Как мы работаем?
        </p>
        <ul className="">
          <li className="py-4 mt-10">
            <a
              href="#"
              className="text-white font-bold hover:text-gray-300 text-2xl"
              onMouseEnter={() =>
                handleHover(
                  background1,
                  "Делаем так что бы было безопасно вам и вашим младенцом! Не оставляем следов после обработки, не портим мебель, ламинат и обои!"
                )
              }
            >
              <div className="flex items-center">
                <img src={one} className="w-10 lg:w-12 mr-2" />
                <p>Безопасно и чисто</p>
              </div>
            </a>
          </li>
          <li className="py-4">
            <a
              href="#"
              className="text-white font-bold hover:text-gray-300 text-2xl"
              onMouseEnter={() =>
                handleHover(
                  background2,
                  "Ты используем современное высокотехнологичное оборудование и даем на все наши услуги гарантию на 1 год!"
                )
              }
            >
              <div className="flex items-center">
                <img src={two} className="float-left w-10 lg:w-12 mr-2" />
                <p>Качественно и гарантно</p>{" "}
              </div>
            </a>
          </li>
          <li className="py-4">
            <a
              href="#"
              className="text-white font-bold hover:text-gray-300 text-2xl"
              onMouseEnter={() =>
                handleHover(
                  background3,
                  "Наши мастера обучены секретной концентрации смесей, которая безопасно и очень еффективна! Работу выполняем строго в сроки, а может даже и раньше"
                )
              }
            >
              <div className="flex items-center">
                <img src={three} className="float-left w-10 lg:w-12 mr-2" />
                <p>Профессионально и быстро</p>
              </div>
            </a>
          </li>
        </ul>
        <p className="text-lg text-white  pt-36 w-[330px] lg:w-[1280px] pb-8">
          {backgroundText}
        </p>
      </div>
    </div>
  );
};

export default HowWeWork;
