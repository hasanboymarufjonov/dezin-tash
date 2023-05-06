import React from "react";

const Team = () => {
  return (
    <div>
      <section className="bg-[#F5F5F5]" id="team">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto mb-8  lg:mb-16">
            <h2 className="mb-4 text-lg font-extrabold text-gray-900 uppercase">
              команда{" "}
            </h2>
            <p className=" text-gray-500 text-3xl lg:text-5xl ">
              Наша команда профессионалов
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center text-[#363532]">
              <img
                className="mx-auto mb-4 w-[360px] grayscale hover:grayscale-0"
                src="src/assets/team/elon_musk.jpg"
                alt="Аброр Тапилов"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#363532] ">
                <a href="#">Аброр Тапилов </a>
              </h3>
              <p>Основатель компании </p>
            </div>
            <div className="text-center text-[#363532]">
              <img
                className="mx-auto mb-4 w-[360px] grayscale hover:grayscale-0"
                src="src/assets/team/pavel_durov.webp"
                alt="Helene Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#363532]">
                <a href="#">Зафар Каршибаев</a>
              </h3>
              <p>Главный менеджер</p>
            </div>
            <div className="text-center text-[#363532]">
              <img
                className="mx-auto mb-4 w-[360px] grayscale hover:grayscale-0"
                src="src/assets/team/mark_zukerberg.webp"
                alt="Jese Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#363532]">
                <a href="#">Хамраев Сардор</a>
              </h3>
              <p>Специалист консультант</p>
            </div>
            <div className="text-center text-[#363532]">
              <img
                className="mx-auto mb-4 w-[360px] grayscale hover:grayscale-0"
                src="src/assets/team/edward_snowden.jpg"
                alt="Joseph Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#363532]">
                <a href="#">Шохакобир Ходиев </a>
              </h3>
              <p>Менеджер</p>
            </div>
            <div className="text-center text-[#363532]">
              <img
                className="mx-auto mb-4 w-[360px] grayscale hover:grayscale-0"
                src="src/assets/team/linus_torvalds.webp"
                alt="Sofia Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#363532]">
                <a href="#">Саид Каримов</a>
              </h3>
              <p>дезинфектор</p>
            </div>
            <div className="text-center text-[#363532]">
              <img
                className="mx-auto mb-4 w-[360px] grayscale hover:grayscale-0"
                src="src/assets/team/hugh_laurie.jpg"
                alt="Leslie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#363532]">
                <a href="#">Юсуф Ахадов</a>
              </h3>
              <p>Врач эпидемиолог</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
