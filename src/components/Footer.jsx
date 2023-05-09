import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <footer className="bg-[#363532] " id="contact">
        <div className="w-full  max-w-screen-xl mx-auto py-8 px-2">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              <div>
                <div className="self-center text-2xl font-semibold whitespace-nowrap text-[#FDE910]">
                  DezinTash
                </div>{" "}
                <div className="self-center text-sm  whitespace-nowrap dark:text-white underline pt-2">
                  <a href="https://dezintash.uz/wp-content/themes/dezintash/img/gramoty/1.jpg">
                    {t("Посмотреть сертификаты")}
                  </a>
                </div>
              </div>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white border border-[#FDE910] p-8">
              <div>
                <li>
                  <a
                    href="tel:+998712004448"
                    className="mr-4 hover:underline md:mr-6 "
                  >
                    +998 71 200 44 48{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/%D0%B3.+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+%D0%9C%D0%B8%D1%80%D0%B7%D0%BE+%D0%A3%D0%BB%D1%83%D0%B3%D0%B1%D0%B5%D0%BA,+%D0%A2%D0%A2%D0%97-1+21%2F3/@41.3533196,69.3605466,15z/data=!3m1!4b1"
                    className="mr-4 hover:underline md:mr-6"
                  >
                    {t("г. Ташкент, Мирзо Улугбек ТТЗ-1 21/3")}
                  </a>
                </li>
              </div>
              <div>
                <li>
                  <a
                    href="mailto:dezintash@gmail.com"
                    className="mr-4 hover:underline md:mr-6 "
                  >
                    dezintash@gmail.com{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/%D0%B3.+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+%D0%9C%D0%B8%D1%80%D0%B7%D0%BE+%D0%A3%D0%BB%D1%83%D0%B3%D0%B1%D0%B5%D0%BA,+%D0%A2%D0%A2%D0%97-1+21%2F3/@41.3533196,69.3605466,15z/data=!3m1!4b1"
                    className="hover:underline"
                  >
                    {t("Посмотреть на карте")}
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between ">
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white">
              <li>
                <a href="#methods" className="mr-4 hover:underline md:mr-6 ">
                  {t("Методы услуг")}
                </a>
              </li>
              <li>
                <a href="#process" className="mr-4 hover:underline md:mr-6">
                  {t("Средства обработки")}
                </a>
              </li>
              <li>
                <a href="#clients" className="mr-4 hover:underline md:mr-6 ">
                  {t("Клиенты")}
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  {t("Отзывы")}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  {t("О нас")}
                </a>
              </li>
            </ul>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Instagram{" "}
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Facebook{" "}
                </a>
              </li>
            </ul>
          </div>
          <span className="block text-sm text-white text-center py-8">
            {t("All rights reserved")} 2023
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
