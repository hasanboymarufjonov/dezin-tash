import React from "react";
import { useTranslation } from "react-i18next";

import Snowden from "../assets/team/edward_snowden.jpg";
import Musk from "../assets/team/elon_musk.jpg";
import Laurie from "../assets/team/hugh_laurie.jpg";
import Torvalds from "../assets/team/linus_torvalds.webp";
import Zukerberg from "../assets/team/mark_zukerberg.webp";
import Durov from "../assets/team/pavel_durov.webp";

const Team = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="bg-[#F5F5F5]" id="team">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto mb-8  lg:mb-16">
            <h2 className="mb-4 text-lg font-extrabold text-gray-900 uppercase">
              {t("команда")}
            </h2>
            <p className=" text-gray-500 text-3xl lg:text-5xl ">
              {t("Наша команда профессионалов")}
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center text-[#363532]">
              <img
                className="mx-auto mb-4 w-[360px] grayscale hover:grayscale-0"
                src={Musk}
                alt="Аброр Тапилов Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#363532] ">
                <a href="#">{t("Аброр Тапилов")} </a>
              </h3>
              <p>{t("Основатель компании")} </p>
            </div>
            <div className="text-center text-[#363532]">
              <img
                className="mx-auto mb-4 w-[360px] grayscale hover:grayscale-0"
                src={Durov}
                alt="Зафар Каршибаев Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#363532]">
                <a href="#">{t("Зафар Каршибаев")}</a>
              </h3>
              <p>{t("Главный менеджер")}</p>
            </div>
            <div className="text-center text-[#363532]">
              <img
                className="mx-auto mb-4 w-[360px] grayscale hover:grayscale-0"
                src={Zukerberg}
                alt="Хамраев Сардор Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#363532]">
                <a href="#">{t("Хамраев Сардор")}</a>
              </h3>
              <p>{t("Специалист консультант")}</p>
            </div>
            <div className="text-center text-[#363532]">
              <img
                className="mx-auto mb-4 w-[360px] grayscale hover:grayscale-0"
                src={Snowden}
                alt="Шохакобир Ходиев Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#363532]">
                <a href="#">{t("Шохакобир Ходиев")} </a>
              </h3>
              <p>{t("Менеджер")}</p>
            </div>
            <div className="text-center text-[#363532]">
              <img
                className="mx-auto mb-4 w-[360px] grayscale hover:grayscale-0"
                src={Torvalds}
                alt="Саид Каримов Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#363532]">
                <a href="#">{t("Саид Каримов")}</a>
              </h3>
              <p>{t("дезинфектор")}</p>
            </div>
            <div className="text-center text-[#363532]">
              <img
                className="mx-auto mb-4 w-[360px] grayscale hover:grayscale-0"
                src={Laurie}
                alt="Юсуф Ахадов Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#363532]">
                <a href="#">{t("Юсуф Ахадов")}</a>
              </h3>
              <p>{t("Врач эпидемиолог")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
