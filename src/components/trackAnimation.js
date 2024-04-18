import React from "react";

const TrackAnimation = () => {
  return (
    <section className="trackAnimation flex flex-col items-center justify-center mx-auto my-5">
      <div className="flex items-end relative w-full mx-auto justify-between px-6 py-8">
        <div className="flex flex-col items-center justify-center pr-2">
          <p className="font-volkhov text-xs sm:text-xl font-semibold leading-5 tracking-normal text-center py-2 sm:py-5">
            Leads
          </p>
          <img
            src="/assets/images/leads-circle.png"
            alt="circle"
            className=" w-[40px] sm:w-[70px] h-[40px] sm:h-[70px]"
          />
        </div>
        <div className="flex flex-col">
          <div className="sm:p-3 px-6 sm:px-12 text-base sm:text-2xl font-normal leading-15 tracking-normal text-center rounded-xl absolute top-8 sm:top-10 left-[38%] sm:left-[43%] w-[100px] sm:w-[150px] dropShadow sm:after:border-[10px] after:border-8 after:-bottom-[8px] sm:after:-bottom-[10px]">
            $123
          </div>
          <div className="flex relative">
            <img src="/assets/images/track.png" alt="track" className="mb-3" />
            <img
              src="/assets/images/train.png"
              alt="track"
              className="absolute -top-5 slideInLeft h-3 sm:h-[22px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pl-2">
          <p className="font-volkhov text-xs sm:text-xl font-semibold leading-5 tracking-normal text-center py-2 sm:py-5">
            Glasgow
          </p>
          <img
            src="/assets/images/leads-circle.png"
            alt="circle"
            className=" w-[40px] sm:w-[70px] h-[40px] sm:h-[70px]"
          />
        </div>
      </div>
      <div className="flex items-end relative w-full mx-auto justify-between px-6 py-8">
        <div className="flex flex-col pr-5">
          <p className="w-[40px] sm:w-[70px] font-volkhov text-xs sm:text-xl font-semibold leading-5 tracking-normal text-center py-5">
            Leads
          </p>
          <img
            src="/assets/images/leads-circle1.png"
            alt="circle"
            className=" w-[40px] sm:w-[70px] h-[40px] sm:h-[70px]"
          />
        </div>
        <div className="flex flex-col">
          <img
            src="/assets/images/track1.png"
            alt="circle"
            className="mb-3 w-[270px]"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-volkhov text-xs sm:text-xl font-semibold leading-5 tracking-normal text-center py-5">
            Bingloy
          </p>
          <img
            src="/assets/images/leads-circle2.png"
            alt="circle"
            className=" w-[40px] sm:w-[70px] h-[40px] sm:h-[70px]"
          />
        </div>
        <div className="flex flex-col mx-[12%]">
          <div className="ml-4"><img src="/assets/images/track1.png" alt="track" className="mb-3" /></div>
          <div className="sm:p-3 px-6 sm:px-12 text-base sm:text-2xl font-normal leading-15 tracking-normal text-center rounded-xl absolute top-4 sm:top-2 left-[38%] sm:left-[43%] w-[100px] sm:w-[150px] dropShadow sm:after:border-[10px] after:border-8 after:-bottom-[8px] sm:after:-bottom-[10px]">
            $23
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-volkhov text-xs sm:text-xl font-semibold leading-5 tracking-normal text-center py-5">
            Motherwell
          </p>
          <img
            src="/assets/images/leads-circle2.png"
            alt="circle"
            className=" w-[40px] sm:w-[70px] h-[40px] sm:h-[70px]"
          />
        </div>
        <div className="flex flex-col">
          <img
            src="/assets/images/track1.png"
            alt="circle"
            className="mb-3 w-[270px]"
          />
        </div>
        <div className="flex flex-col pl-5">
          <p className="font-volkhov text-xs sm:text-xl font-semibold leading-5 tracking-normal text-center py-5">
            Glasgow
          </p>
          <img
            src="/assets/images/leads-circle1.png"
            alt="circle"
            className=" w-[40px] sm:w-[70px] h-[40px] sm:h-[70px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TrackAnimation;
