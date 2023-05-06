import { useState } from "react";

const categories = [
  {
    id: 1,
    name: "Дезинсекция",
    cards: [
      {
        id: 1,
        name: "Дезинсекция скорпионов и клоп",
        title: "дезинсекция",
        file: "https://dezintash.uz/wp-content/themes/dezintash/img/gramoty/1.jpg",
      },
      {
        id: 2,
        name: "Дезинсекция муравьев и блох",
        file: "https://dezintash.uz/wp-content/themes/dezintash/img/gramoty/1.jpg",
      },
      {
        id: 3,
        name: "Дезинсекция тараканов и мух",
        file: "https://dezintash.uz/wp-content/themes/dezintash/img/gramoty/1.jpg",
      },
      {
        id: 4,
        name: "Дезинсекция клещей и ос",
        file: "https://dezintash.uz/wp-content/themes/dezintash/img/gramoty/1.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Деротизация",
    cards: [
      {
        id: 1,
        name: "Деротизация мышь и крот",
        title: "деротизация",
        file: "https://dezintash.uz/wp-content/themes/dezintash/img/gramoty/1.jpg",
      },
      {
        id: 2,
        name: "Деротизация крыс землероек",
        file: "https://dezintash.uz/wp-content/themes/dezintash/img/gramoty/1.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Дезинфекция",
    cards: [
      {
        id: 1,
        name: "Дезинфекция ресторанов",
        title: "дезинфекция",
        file: "https://dezintash.uz/wp-content/themes/dezintash/img/gramoty/1.jpg",
      },
      {
        id: 2,
        name: "Дезинфекция квартир",
        file: "https://dezintash.uz/wp-content/themes/dezintash/img/gramoty/1.jpg",
      },
      {
        id: 3,
        name: "Дезинфекция помещений",
        file: "https://dezintash.uz/wp-content/themes/dezintash/img/gramoty/1.jpg",
      },
      {
        id: 4,
        name: "Дезинфекция предприятий",
        file: "https://dezintash.uz/wp-content/themes/dezintash/img/gramoty/1.jpg",
      },
    ],
  },
];

const Price = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="grid  lg:flex lg:justify-center overflow-hidden">
      <div className="w-full lg:w-2/4 bg-[#F7F7F7] py-8 px-2 lg:py-40 lg:px-20">
        <div className="">
          <h2 className="text-lg uppercase">Цены</h2>
          <p className="text-5xl pt-2">Цены на процедуры</p>
          <p className="text-lg pt-4">
            25% дохода от процедур пожертвуется на блогие дела. Вы работая с
            нами не только избавитесь от вредителей но и делаете пожертвование
            на нуждающиеся руки!
          </p>
        </div>
        <div className="pt-10 flex lg:grid lg:gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`px-1 cursor-pointer lg:text-3xl text-[#363532] font-bold ${
                selectedCategory.id === category.id
                  ? "opacity-80"
                  : "opacity-100"
              }`}
              onClick={() => handleClick(category)}
            >
              {selectedCategory.id === category.id ? " - " : ""}
              {category.name}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-2/4 py-8 px-8 lg:py-40 lg:px-20">
        <div>
          <h2 className="text-2xl ">
            Цены на{" "}
            {selectedCategory.cards.map((card) => (
              <span>{card.title}</span>
            ))}
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
            {selectedCategory.cards.map((card) => (
              <div className="bg-[#F7F7F7] hover:bg-[#363532] p-4  group">
                <div
                  key={card.id}
                  className="text-lg border-t border-[#363532] pt-4 w-56 group-hover:text-white group-hover:border-white "
                >
                  {card.name}
                </div>
                <div className="flex items-center pt-2">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.25 13.25H13.75V14.75H0.25V13.25ZM7.75 8.879L12.3032 4.325L13.3638 5.3855L7 11.75L0.63625 5.38625L1.69675 4.325L6.25 8.8775V0.5H7.75V8.879Z"
                      fill="#000000"
                      className="group-hover:fill-[#FDE910]"
                    />
                  </svg>
                  <a
                    href={card.file}
                    className="text-xs group-hover:text-[#FDE910] pl-2"
                  >
                    Скачать PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
