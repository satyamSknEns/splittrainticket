import React from "react";
import { Link as ScrollLink } from "react-scroll";
const TableOfContent = () => {
  return (
    <section className="p-4 sm:p-8 bg-[#FCF5E9]">
      <h2 className="text-center text-3xl sm:text-5xl font-semibold text-[#152B69] sm:leading-10 py-4">
        Tabel of Content
      </h2>
      <div className="flex sm:flex-row flex-col items-center sm:my-8 sm:py-4">
        <ScrollLink
          to="stationMap"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          className="my-4"
        >
          <div className="flex items-center justify-center rounded-tl-3xl rounded-br-3xl bg-white p-1 mx-10 tableofcontents cursor-pointer">
            <div className="flex relative -top-5 -left-5">
              <div className=" bg-[#FFCD6B] w-[75px] sm:w-[100px] rounded-tl-28 p-3 px-5 rounded-tl-3xl rounded-br-3xl">
                <img
                  src="/assets/images/railway-station-icon.png"
                  alt="railway-station-icon"
                  className="w-[40px] sm:w-[62px] h-[40px] sm:h-[62px]"
                />
              </div>
            </div>
            <div className="flex px-3 pr-4 text-lg font-medium">
              Railway station Area map
            </div>
          </div>
        </ScrollLink>
        <ScrollLink
          to="departureArrival"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          className="my-4"
        >
          <div className="flex items-center justify-center rounded-tl-3xl rounded-br-3xl bg-white p-1 mx-10 tableofcontents cursor-pointer">
            <div className="flex relative -top-5 -left-5">
              <div className=" bg-[#FFCD6B] w-[75px] sm:w-[100px] rounded-tl-28 p-3 px-5 rounded-tl-3xl rounded-br-3xl">
                <img
                  src="/assets/images/tower-bridge-icon.png"
                  alt="tower-bridge-icon"
                  className="w-[40px] sm:w-[62px] h-[40px] sm:h-[62px]"
                />
              </div>
            </div>
            <div className="flex px-3 pr-4 text-lg font-medium">
              Hotel Near London Bridge station
            </div>
          </div>
        </ScrollLink>
      </div>
      <div className="flex sm:flex-row flex-col items-end justify-end sm:my-8 sm:py-4">
        <ScrollLink
          to="stationDetails"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          className="my-4"
        >
          <div className="flex items-center justify-center rounded-tl-3xl rounded-br-3xl bg-white p-1 mx-10 tableofcontents cursor-pointer">
            <div className="flex relative -top-5 -left-5">
              <div className=" bg-[#FFCD6B] w-[75px] sm:w-[100px] rounded-tl-28 p-3 px-5 rounded-tl-3xl rounded-br-3xl">
                <img
                  src="/assets/images/building-icon.png"
                  alt="building-icon"
                  className="w-[40px] sm:w-[62px] h-[40px] sm:h-[62px]"
                />
              </div>
            </div>
            <div className="flex px-3 pr-4 text-lg font-medium">
              Station details and Facilities
            </div>
          </div>
        </ScrollLink>
        <ScrollLink
          to="faq"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          className="my-4"
        >
          <div className="flex items-center justify-center rounded-tl-3xl rounded-br-3xl bg-white p-1 mx-10 tableofcontents cursor-pointer">
            <div className="flex relative -top-5 -left-5">
              <div className=" bg-[#FFCD6B] w-[75px] sm:w-[100px] rounded-tl-28 p-3 px-5 rounded-tl-3xl rounded-br-3xl">
                <img src="/assets/images/faq-icon.png" alt="faq-icon" className="w-[40px] sm:w-[62px] h-[40px] sm:h-[62px]" />
              </div>
              
            </div>
            <div className="flex px-3 pr-4 text-lg font-medium">
              Frequently asked question
            </div>
          </div>
        </ScrollLink>
      </div>
    </section>
  );
};

export default TableOfContent;
