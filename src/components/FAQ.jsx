import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Каким образом самим бороться с клопами?",
      answer:
        "Используемое оборудование и препараты позволяют нам оказывать услуги по уничтожению вредителей на производственных объектах, в складских помещениях, в офисах, учебных заведениях, отелях, ресторанах, кафе, а также  частных жилых помещениях.",
      isOpen: false,
    },
    {
      id: 2,
      question: "С какими видами объектов вы работаете?",
      answer:
        "Используемое оборудование и препараты позволяют нам оказывать услуги по уничтожению вредителей на производственных объектах, в складских помещениях, в офисах, учебных заведениях, отелях, ресторанах, кафе, а также  частных жилых помещениях.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Какие запахи может привлекать клопов?",
      answer:
        "Используемое оборудование и препараты позволяют нам оказывать услуги по уничтожению вредителей на производственных объектах, в складских помещениях, в офисах, учебных заведениях, отелях, ресторанах, кафе, а также  частных жилых помещениях.",
      isOpen: false,
    },
    {
      id: 4,
      question: "Как мы можем подготовливать помещения к дезинфекцию?",
      answer:
        "Используемое оборудование и препараты позволяют нам оказывать услуги по уничтожению вредителей на производственных объектах, в складских помещениях, в офисах, учебных заведениях, отелях, ресторанах, кафе, а также  частных жилых помещениях.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (id) => {
    setFaqs(
      faqs.map((faq) => {
        if (faq.id === id) {
          faq.isOpen = !faq.isOpen;
        } else {
          faq.isOpen = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className="mx-auto  bg-[#363532] min-h-sceen py-44 px-4">
      <div className="mx-auto mb-8  lg:mb-16  max-w-5xl">
        <h2 className="mb-4 text-lg font-extrabold text-[#FDE910] uppercase">
          Вопросы
        </h2>
        <p className=" text-white text-5xl lg:text-5xl ">
          Часто задаваемые вопросы
        </p>
      </div>
      {faqs.map((faq) => (
        <div key={faq.id} className="py-5 grid  max-w-5xl mx-auto border-b-2">
          <details className="group ">
            <summary
              className="flex justify-between items-center font-medium cursor-pointer list-none "
              onClick={() => toggleFAQ(faq.id)}
            >
              <span className="text-white ">{faq.question}</span>
              <button className="border border-white rounded-full p-2 text-white">
                {faq.isOpen ? <FaMinus /> : <FaPlus />}
              </button>
            </summary>

            {faq.isOpen && (
              <p className="text-white mt-3 group-open:animate-fadeIn opacity-80">
                {faq.answer}
              </p>
            )}
          </details>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
