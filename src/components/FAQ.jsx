// import React from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";
// import { useState } from "react";

// const FAQ = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <div className="mx-auto  bg-[#363532] min-h-sceen">
//         <div className="flex flex-col items-center">
//           <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
//           <p className="text-neutral-500 text-xl mt-3">Frequenty asked questions</p>
//         </div>
//         <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 text-white">
//           <div className="py-5">
//             <details className="group">
//               <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
//                 <span> Каким образом самим бороться с клопами?</span>

//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="border border-white rounded-full p-2"
//                 >
//                   {isOpen ? <FaMinus /> : <FaPlus />}
//                 </button>
//               </summary>
//               <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//                 SAAS platform is a cloud-based software service that allows
//                 users to access and use a variety of tools and functionality.
//               </p>
//             </details>
//           </div>
//           <div className="py-5">
//             <details className="group">
//               <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
//                 <span>С какими видами объектов вы работаете?</span>
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="border border-white rounded-full p-2"
//                 >
//                   {isOpen ? <FaMinus /> : <FaPlus />}
//                 </button>
//               </summary>
//               <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//                 We offers a variety of billing options, including monthly and
//                 annual subscription plans, as well as pay-as-you-go pricing for
//                 certain services. Payment is typically made through a credit
//                 card or other secure online payment method.
//               </p>
//             </details>
//           </div>
//           <div className="py-5">
//             <details className="group">
//               <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
//                 <span> Какие запахи может привлекать клопов?</span>
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="border border-white rounded-full p-2"
//                 >
//                   {isOpen ? <FaMinus /> : <FaPlus />}
//                 </button>
//               </summary>
//               <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//                 We offers a 30-day money-back guarantee for most of its
//                 subscription plans. If you are not satisfied with your
//                 subscription within the first 30 days, you can request a full
//                 refund. Refunds for subscriptions that have been active for
//                 longer than 30 days may be considered on a case-by-case basis.
//               </p>
//             </details>
//           </div>
//           <div className="py-5">
//             <details className="group">
//               <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
//                 <span>
//                   Как мы можем подготовливать помещения к дезинфекцию?
//                 </span>
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="border border-white rounded-full p-2"
//                 >
//                   {isOpen ? <FaMinus /> : <FaPlus />}
//                 </button>
//               </summary>
//               <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//                 To cancel your We subscription, you can log in to your account
//                 and navigate to the subscription management page. From there,
//                 you should be able to cancel your subscription and stop future
//                 billing.
//               </p>
//             </details>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;

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
