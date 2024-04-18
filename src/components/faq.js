import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqData = [
    {
      question: "Lorem ipsum is placeholder text commonly?",
      answer:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      question: "Lorem ipsum is placeholder text commonly",
      answer:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      question:
        "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo?",
      answer:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      question: "onsequat. Duis aute irure dolor in reprehenderit?",
      answer:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      question: "voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
      answer:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
  ];

  const handleQuestionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="flex flex-col items-center justify-center p-4 sm:p-8 bg-[#FFF8EC]">
      <h3 className="text-center text-3xl sm:text-5xl font-semibold text-[#152B69] sm:leading-10 pt-4 sm:py-4">
        Frequently Asked Questions (FAQs)
      </h3>
      <div className="sm:w-[85%] bg-[#FFF8EC] rounded-3xl pt-4 sm:p-10 sm:pb-5">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 bg-white rounded-xl">
            <button
              className="flex items-center justify-between p-4 pl-6 focus:outline-none w-full questionTitle outline-none"
              onClick={() => handleQuestionClick(index)}
            >
              <span className="text-lg font-medium questionTitle">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  activeIndex === index
                    ? "transform rotate-180 transition-all duration-700"
                    : "transition-all duration-700"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`answerContainer ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p className="p-4 pl-6 ">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
