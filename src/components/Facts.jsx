import React from "react";
import CountUp from "react-countup";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Facts = ({ endValue }) => {
  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ">
      <p className="pt-24 pb-10 text-5xl">
        {t("Пусть цифры говорят")}
        {/* Пусть цифры говорят */}
      </p>

      <div
        className="flex flex-wrap justify-center sm:justify-between"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full sm:w-auto mb-10 sm:mb-0 sm:mr-10">
          <p className="text-lg font-semibold mb-2">
            {t("Факт 1")}
            {/* Факт 1 */}
          </p>
          <hr className="border-black mb-4" />
          <CountUp
            start={isHovered ? 0 : 1250}
            end={1250}
            duration={2}
            className="text-7xl font-bold"
            separator=""
          />
          <p className="text-sm">
            {t("Отработка повторная по гарантии")}
            {/* Отработка повторная по гарантии */}
          </p>
        </div>
        <div className="w-full sm:w-auto mb-10 sm:mb-0 sm:mr-10">
          <p className="text-lg font-semibold mb-2">
            {t("Факт 2")}
            {/* Факт 2 */}
          </p>
          <hr className="border-black mb-4" />
          <CountUp
            start={isHovered ? 0 : 94}
            end={94}
            duration={1.9}
            className="text-7xl font-bold"
          />
          <p className="text-sm">
            {t("Методики изменили в течении 10 лет")}
            {/* Методики изменили в течении 10 лет */}
          </p>
        </div>
        <div className="w-full sm:w-auto mb-10 sm:mb-0 sm:mr-10">
          <p className="text-lg font-semibold mb-2">
            {t("Факт 3")}
            {/* Факт 3 */}
          </p>
          <hr className="border-black mb-4" />
          <CountUp
            start={isHovered ? 0 : 1597}
            end={1597}
            duration={2.1}
            className="text-7xl font-bold"
            separator=""
          />
          <p className="text-sm">
            {t("Клиентов нас порекоммендовали")}
            {/* Клиентов нас порекоммендовали */}
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <p className="text-lg font-semibold mb-2">
            {t("Факт 4")}
            {/* Факт 4 */}
          </p>
          <hr className="border-black mb-4" />
          <CountUp
            start={isHovered ? 0 : 7258}
            end={7258}
            duration={2.2}
            className="text-7xl font-bold"
            separator=""
          />
          <p className="text-sm">
            {t("Случаев уничтожения с первого раза")}
            {/* Случаев уничтожения с первого раза */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
