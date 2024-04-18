import React from "react";
import { Link } from "react-router-dom";

const MoreDetails = () => {
  return (
    <section className="moreDetails flex flex-col sm:flex-row items-center justify-center mx-auto my-5 mt-8 p-4 sm:p-0">
      <div className="flex flex-col items-start justify-center sm:w-1/2 p-2 sm:p-20 sm:pt-0 sm:relative sm:-top-3">
        <h2 className="font-volkhov text-3xl sm:text-5xl font-medium sm:leading-[58px] tracking-normal text-center sm:text-left text-[#152B69] pb-5">
          What is split ticketing and{" "}
          <span className="font-semibold"> how does Split Ticketing work?</span>
        </h2>
        <p className="text-lg sm:text-2xl font-medium leading-10 tracking-normal text-center sm:text-left bg-[#FFCD6B] p-3 sm:p-6 rounded-2xl">
          On average we save our customers £25 per booking!
        </p>
      </div>
      <div className="flex flex-col items-center sm:items-start justify-center text-left sm:w-1/2 p-2 sm:p-16 sm:py-8">
        <p className="text-base font-normal leading-7 tracking-normal text-left mb-5">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi corrupti
          et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
          illum aut optio quibusdam! Et labore harum non nobis ipsum eum
          molestias mollitia et corporis praesentium a laudantium internos. Non
          quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae
          in maxime quasi aut ducimus illum aut optio quibusdam!
        </p>
        <p className="text-base font-normal leading-7 tracking-normal text-left">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi corrupti
          et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
          illum aut optio quibusdam!
        </p>
        <Link
          to="/pages/routes"
          className="text-base bg-[#FFCD6B] font-medium leading-5 tracking-normal text-left rounded-full p-4 px-8 my-4 cursor-pointer"
        >
          More Details
        </Link>
      </div>
    </section>
  );
};

export default MoreDetails;
