import { useState } from "react";

const HowWeWork = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "url('src/assets/background/background-1.png')"
  );

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
                  "src/assets/background/background-1.png",
                  "Делаем так что бы было безопасно вам и вашим младенцом! Не оставляем следов после обработки, не портим мебель, ламинат и обои!"
                )
              }
            >
              <div className="flex items-center">
                <img
                  src="src/assets/numbers/1.png"
                  className="w-10 lg:w-12 mr-2"
                />
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
                  "src/assets/background/background-2.png",
                  "Ты используем современное высокотехнологичное оборудование и даем на все наши услуги гарантию на 1 год!"
                )
              }
            >
              <div className="flex items-center">
                <img
                  src="src/assets/numbers/2.png"
                  className="float-left w-10 lg:w-12 mr-2"
                />
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
                  "src/assets/background/background-3.png",
                  "Наши мастера обучены секретной концентрации смесей, которая безопасно и очень еффективна! Работу выполняем строго в сроки, а может даже и раньше"
                )
              }
            >
              <div className="flex items-center">
                <img
                  src="src/assets/numbers/3.png"
                  className="float-left w-10 lg:w-12 mr-2"
                />
                <p>Профессионально и быстро</p>
              </div>
            </a>
          </li>
        </ul>
        <p className="text-lg text-white  pt-36 w-[330px] lg:w-[1280px]">
          {backgroundText}
        </p>
      </div>
    </div>
  );
};

export default HowWeWork;
