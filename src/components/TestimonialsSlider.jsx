import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import MurodNazarov from "../assets/testimonial/Murod Nazarov.jpg";
import XasanMamasoidov from "../assets/testimonial/Xasan Mamasoidov.jpg";

// const testimonials = [
//   {
//     quote:
//       "Фирма Dezintash - это професссионалы с большим опытом. Я могу доверять дезинфекционные работы только им. Настоящие патриоты своего дела. ",
//     name: "Мурад Назаров",
//     title: "Основатель компании “Murad Buildings”",
//     image: MurodNazarov,
//   },
//   {
//     quote:
//       "Фирма Dezintash - это професссионалы с большим опытом. Я могу доверять дезинфекционные работы только им. Настоящие патриоты своего дела. 2",
//     name: "Ҳасан Мамасаидов",
//     title: "Основатель компании “Devos”",
//     image: XasanMamasoidov,
//   },
//   // add more testimonial objects here
// ];

const TestimonialsSlider = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t(
        "Фирма Dezintash - это професссионалы с большим опытом. Я могу доверять дезинфекционные работы только им. Настоящие патриоты своего дела."
      ),
      name: t("Мурад Назаров"),
      title: t("Основатель компании “Murad Buildings”"),
      image: MurodNazarov,
    },
    {
      quote: t(
        "Фирма Dezintash - это професссионалы с большим опытом. Я могу доверять дезинфекционные работы только им. Настоящие патриоты своего дела."
      ),
      name: t("Ҳасан Мамасаидов"),
      title: t("Основатель компании “Devos”"),
      image: XasanMamasoidov,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-[#FDE910]" id="testimonials">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div>
          <p className="text-lg uppercase">{t("Отзывы")} </p>
          <div className="">
            <h2 className="lg:text-5xl text-3xl float-left ">
              {t("Пусть клиенты говорят")}
            </h2>
            <a
              className="inline-flex justify-right items-center gap-x-3.5  text-sm font-medium max-[1200px]:hidden float-right"
              href="#clients"
            >
              <span className="">
                <img
                  src="https://img.icons8.com/ios-filled/50/null/play--v1.png"
                  className="border rounded-full border-black bg-white w-6 p-1"
                />
              </span>
              {t("Отзывы клиентов")}
            </a>
          </div>
        </div>{" "}
        <br />
        <div className="relative flex items-center justify-center  lg:mt-20 mt-12">
          <div className="absolute inset-0 bg-[#FDE910] opacity-50"></div>
          <div className="relative px-8 py-12 bg-[#FDE910]">
            <div className="text-gray-900">
              <div className="lg:flex lg:items-center ">
                <div className="flex items-center lg:flex-none">
                  <img
                    className="lg:w-60 w-24 rounded-full lg:mr-4 mr-2"
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                  />
                  <span className="ml-2 lg:hidden">
                    <p className="lg:text-3xl font-medium text-lg">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-gray-600 lg:text-lg text-sm">
                      {currentTestimonial.title}
                    </p>
                  </span>
                </div>

                <div className="lg:pl-14 pt-5 lg:pt-0">
                  <img
                    src="https://img.icons8.com/ios/50/null/quote-left.png"
                    className="hidden lg:block"
                  />
                  <p className="mb-8 lg:text-3xl text-lg font-medium">
                    {currentTestimonial.quote}
                  </p>
                  <span className="hidden lg:block">
                    <p className="text-3xl font-medium">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-gray-600 text-lg">
                      {currentTestimonial.title}
                    </p>
                  </span>
                  <div className="float-left">
                    <button
                      className="text-4xl text-gray-400 hover:text-gray-900 focus:outline-none"
                      onClick={previousTestimonial}
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
                      onClick={nextTestimonial}
                    >
                      <img
                        src="https://img.icons8.com/pastel-glyph/64/null/circled-right.png"
                        className="w-10 ml-4"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
