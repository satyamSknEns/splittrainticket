import React from "react";

const TravelFromTo = () => {
  const fromToDestination = [
    {
      id:1,
      title: "Departure Station",
      subTitle: "London Kings Cross",
    },
    {
      id:2,
      title: "Arrival Station",
      subTitle: "Arrival Station",
    },
    {
      id:3,
      title: "Distance",
      subTitle: "330 miles",
    },
    {
      id:4,
      title: "First Train",
      subTitle: "04:45",
    },
    {
      id:5,
      title: "Last Train",
      subTitle: "23:45",
    },
    {
      id:6,
      title: "Fastest Journey Time",
      subTitle: "4hr 11min",
    },
    {
      id:7,
      title: "Avg. Journey Time",
      subTitle: "4hr 30min",
    },
    {
      id:8,
      title: "Frequency",
      subTitle: "30 trains per day",
    },
    {
      id:9,
      title: "Departure Station",
      subTitle: "London Kings Cross",
    },
  ];
  return (
    <section className="bg-[#EBF9FF] p-8 sm:px-16">
      <div className="relative flex sm:flex-row flex-col">
        <div className="sm:w-1/2 sm:pr-16">
          <h3 className="text-3xl sm:text-5xl font-normal sm:leading-normal sm:tracking-tight text-center sm:text-left text-[#152B69] sm:px-8">
            Travelling From <br className="hidden sm:block" /> London to Edinburgh <br className="hidden sm:block" /> by{" "}
            <span className="font-bold">Train</span>
          </h3>
        </div>
        <div className="sm:w-1/2 text-lg font-normal leading-7 tracking-normal text-justify sm:text-left sm:pr-20 py-4 sm:py-0">
          <p className="mb-4">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam! Et labore harum non nobis ipsum
            eum molestias mollitia et corporis praesentium a laudantium
            internos. Non quis eius quo eligendi corrupti et fugiat nulla qui
            soluta recusandae in maxime quasi aut ducimus illum aut optio
            quibusdam!
          </p>
          <p>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center sm:py-8">
        {fromToDestination.map((item) => (
          <div key={item.id} className="flex items-center justify-center pl-4 pr-8 py-4 sm:mr-7 my-4 rounded-2xl bg-white cursor-pointer">
            <div className="bg-[#FFCD6B33] hover:bg-[#FFCD6B] flex items-center justify-center p-2 rounded-xl mr-4">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clipPath="url(#clip0_223_1467)"> {" "} <path fillRule="evenodd" clipRule="evenodd" d="M3.56442 13.3238C3.62697 13.1362 3.74372 12.9714 3.89992 12.8502C4.05612 12.7289 4.24475 12.6567 4.44197 12.6427L24.5173 11.2349C24.7027 11.2216 24.8882 11.2604 25.0529 11.3467C25.2176 11.433 25.3549 11.5636 25.4495 11.7236C25.544 11.8837 25.5921 12.067 25.5883 12.2529C25.5845 12.4388 25.5289 12.6199 25.4278 12.776L14.5089 29.6809C14.4016 29.8471 14.2474 29.9778 14.0658 30.0564C13.8842 30.1349 13.6834 30.1579 13.4888 30.1223C13.2942 30.0867 13.1145 29.9942 12.9725 29.8564C12.8305 29.7187 12.7325 29.5419 12.691 29.3484L10.988 21.4296L15.6259 18.6893C15.8543 18.5544 16.0197 18.3343 16.0857 18.0775C16.1518 17.8206 16.1131 17.548 15.9782 17.3197C15.8433 17.0913 15.6232 16.926 15.3663 16.8599C15.1095 16.7938 14.8369 16.8325 14.6086 16.9674L9.97061 19.7077L3.85524 14.3959C3.70615 14.2661 3.59887 14.0951 3.54695 13.9043C3.49504 13.7136 3.50168 13.5112 3.56442 13.3238Z" fill="#152B69" />{" "} </g> <defs> {" "} <clipPath id="clip0_223_1467"> {" "} <rect width="24" height="24" fill="white" transform="translate(0.403564 12.5837) rotate(-30.5764)" />{" "} </clipPath>{" "} </defs> </svg>
            </div>
            <div className="flex flex-col pr-6 w-[230px]">
              <h3 className="text-base font-bold">{item.title}</h3>
              <p>{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelFromTo;
