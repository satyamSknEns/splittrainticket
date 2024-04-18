import React from "react";

const GetStarted = () => {
  return (
    <section className="flex items-center justify-center p-2 sm:p-8">
      <div className="flex items-center justify-center relative">
        <img src="/assets/images/get-started.png" alt="get started" className="h-[180px] sm:h-full" />
        <div className="flex items-center justify-between absolute top-3 left-4 sm:top-12 sm:left-14 sm:right-0">
          <div className="inline-flex flex-col items-start justify-between w-2/3">
            <h3 className="text-2xl sm:text-5xl font-semibold sm:py-4 leading-18 tracking-normal text-left">
              Your Next Train Travel
            </h3>
            <p className="text-base sm:text-lg font-normal tracking-normal sm:]leading-7 text-left">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium internos.{" "}
            </p>
          </div>
          <div className="flex items-center justify-center w-1/3">
            <button className="text-base text-white rounded-full font-medium leading-5 tracking-normal p-2 sm:p-4 sm:px-10 bg-[#152B69] ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
