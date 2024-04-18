import React from "react";

const TrustedOperators = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-auto my-6 p-4 sm:p-8">
      <h3 className="font-volkhov w-full text-3xl sm:text-5xl font-[400] leading-15 tracking-normal text-center text-[#152B69] sm:w-[60%]">
        Trusted seller and official distributor{" "}
        <span className="font-bold">for hundreds of operators</span>
      </h3>
      <div className="flex sm:flex-row flex-col items-center justify-center">
        <div className="flex items-center justify-center sm:p-5">
          <img src="/assets/images/best-adventure.png" alt="adventure" />
        </div>
        <div className="flex items-center justify-center sm:p-5">
          <img src="/assets/images/operators.png" alt="operators" />
        </div>
      </div>
    </section>
  );
};

export default TrustedOperators;
