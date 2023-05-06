import React from "react";
import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Methods = () => {
  const methodsData = [
    {
      title: "1. Дезинсекция",
      about:
        "Дезинсе́кция  — один из видов обеззараживания, представляющий собой уничтожение  насекомых и клещей, способных переносить трансмиссивные инфекции, вредить запасам продовольствия и растениям, с помощью специальных химических средств, физических средств  или с помощью биологических средств. ",
      insects: [
        "Тараканов",
        "Скорпионов",
        "Муравьев",
        "Блох",
        "Клещей",
        "Клоп",
        "Ос",
        "Мух",
      ],
    },
    {
      title: "2. Дератизация  ",
      about:
        "Дератизация — комплексные меры по уничтожению грызунов (крыс, мышей, полёвок и др.). Существует несколько различных способов: пищевые ядхимикаты (в виде приманок), капканы, газообразные яды, электронные и клеевые ловушки. В отличие от них, рекламируемые ультразвуковые отпугиватели не имеют никакого эффекта.       ",
      insects: [
        "Крот",
        "Крыс",
        "Мышь",
        "Землероек",
        "Крот",
        "Крыс",
        "Мышь",
        "Землероек",
      ],
    },
    {
      title: "3. Дезинфекция  ",
      about:
        "Дезинфе́кция — это комплекс мероприятий, направленный на уничтожение возбудителей инфекционных заболеваний и разрушение токсинов на объектах внешней среды для предотвращения попадания их на кожу, слизистые и раневую поверхность. Является одним из видов обеззараживания.        ",
      insects: [
        "Помещений",
        "Ресторанов",
        "Предприятий",
        "Квартир",
        "Помещений",
        "Ресторанов",
        "Предприятий",
        "Квартир",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousMethod = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? methodsData.length - 1 : prevIndex - 1
    );
  };

  const nextMethod = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === methodsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentMethod = methodsData[currentIndex];

  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
  };

  const settings3 = {
    dots: false,
    infinite: true,
    vertical: false,
    verticalSwiping: false,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    rtl: true,
  };

  const [hovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
  }

  return (
    <div className="max-w-5l lg:flex overflow-hidden" id="methods">
      <div className="w-full lg:w-1/2 px-4 py-8 lg:py-20 lg:px-20">
        <h2 className="text-lg uppercase">Методы услуг</h2>
        <p className="text-3xl lg:text-5xl pt-3">{currentMethod.title} →</p>
        <p className="text-lg pt-4">{currentMethod.about}</p>
        <div className="pt-10">
          <div className="float-left">
            <button
              className="text-4xl text-gray-400 hover:text-gray-900 focus:outline-none"
              onClick={previousMethod}
            >
              <img
                src="https://img.icons8.com/pastel-glyph/64/null/circled-left.png"
                className="w-10"
              />
            </button>
          </div>
          <div className="">
            <button
              className="text-4xl text-gray-400 hover:text-gray-900 focus:outline-none"
              onClick={nextMethod}
            >
              <img
                src="https://img.icons8.com/pastel-glyph/64/null/circled-right.png"
                className="w-10 ml-4"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full  lg:hidden">
        <Slider {...settings3} className="lg:hidden">
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/cockroach.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[0]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/scorpion.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[1]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/ant.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[2]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/flea.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[3]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/mite.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[4]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/redbug.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[5]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/bee.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[6]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/fly.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[7]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
        </Slider>
      </div>
      <div className="w-full lg:w-1/2 flex">
        <Slider {...settings} className="max-[800px]:hidden w-1/2">
          {/* <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 ">
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">Тараканов</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div> */}
          <div
            className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`${
                hovered ? "opacity-100" : "opacity-0"
              } transition-all duration-500 absolute inset-0 flex items-center justify-center`}
            >
              <img
                src="src/assets/insects/cockroach.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div>
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[0]}</p>
              <div className="float-right mt-8 ">
                <img src="src/assets/minus.png" alt="" className="w-10" />
              </div>
            </div>
          </div>
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/scorpion.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[1]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/ant.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[2]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/flea.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[3]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
        </Slider>
        <Slider {...settings2} className="max-[800px]:hidden -ml-1 w-1/2">
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/mite.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[4]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/redbug.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[5]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/bee.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[6]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
          <div className="border-black border-t-2 border-x-2 h-40 py-4 px-2 relative">
            <div className="opacity-0 hover:opacity-100 transition-all duration-500 absolute inset-0 flex items-center justify-center">
              <img
                src="src/assets/insects/fly.png"
                alt=""
                className="w-full h-full"
              />{" "}
            </div>
            <div className="">
              <h3>Уничтожить</h3>
              <p className="text-3xl font-bold">{currentMethod.insects[7]}</p>
            </div>
            <div className="float-right mt-8 ">
              <img src="src/assets/minus.png" alt="" className="w-10" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Methods;
