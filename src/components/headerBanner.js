import React from "react";
import SearchEngine from "./searchEngine";

const HeaderBanner = ({ imageUrl, textContent, search }) => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section
      className={`flex items-center justify-center relative w-full ${
        !search ? "h-[635px]" : "h-[448px]"
      }`}
      style={sectionStyle}
    >
      <div className="flex items-center">
        {/* <img src={imageUrl} alt="header-banner" /> */}
        <div className="texl-left text-white absolute right-32 w-full sm:w-[32%]">
          <h2 className="font-volkhov text-[54px] font-normal leading-[70px] tracking-normalx">
            {textContent.heading}{" "}
            <span className="text-[#D2EBF5]">{textContent.subHeading}</span>
          </h2>
          <p className="text-2xl font-normal leading-8 tracking-normal text-[#D2EBF5] mt-4">
            {textContent.description}
          </p>
        </div>
        {!search && (
          <div className="absolute w-full sm:w-[500px] left-0 sm:left-16 -top-3 sm:top-10">
            <SearchEngine />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeaderBanner;
