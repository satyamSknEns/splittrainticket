import React from "react";

const StationMap = () => {
  return (
    <section>
      <div className="flex sm:flex-row flex-col items-center justify-center p-8">
        <div className="flex flex-col sm:items-start sm:justify-start sm:w-1/2 sm:px-16">
          <h2 className="text-3xl sm:text-5xl font-medium leading-normal tracking-tight text-center sm:text-left text-[#152B69]">
            Railway Station Area
          </h2>
          <div className="text-base font-normal leading-7 tracking-normal text-justify">
            <p className="my-4 ">
              London Bridge Station has a main entrance on St Thomas Street and
              Tooley Street in Southwark, South East London. London Bridge
              Underground Station lies below London Bridge Station with an
              entrance on Duke Street Hill, and London Bridge Bus Station is on
              London Bridge Street.
            </p>
            <p className="mb-4">London Bridge Station has 15 platforms in total:</p>
            <div className="flex">
              <div className="mr-4">
                <span
                  className={`bg-black w-[5px] h-[5px] rounded-full inline-block`}
                ></span>
              </div>
              <p>
                Platforms 1-3 are for trains running to Cannon Street, South
                East London, and Kent.
              </p>
            </div>
            <div className="flex">
              <div className="mr-4">
                <span
                  className={`bg-black w-[5px] h-[5px] rounded-full inline-block`}
                ></span>
              </div>
              <p>
                Platforms 4-5 are for Thameslink trains between the Brighton
                main line and the Thameslink core via Blackfriars.
              </p>
            </div>
            <div className="flex">
              <div className="mr-4">
                <span
                  className={`bg-black w-[5px] h-[5px] rounded-full inline-block`}
                ></span>
              </div>
              <p>
                Platforms 6–9 are for trains from Charing Cross to Southeast
                London, Kent and East Sussex.
              </p>
            </div>
            <div className="flex">
              <div className="mr-4">
                <span
                  className={`bg-black w-[5px] h-[5px] rounded-full inline-block`}
                ></span>
              </div>
              <p>
                Platforms 10–15 are mainly for Southern services toward south
                London and the South Coast.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:w-1/2">
          <img src="/assets/images/route-map.png" alt="route-map" />
        </div>
      </div>
    </section>
  );
};

export default StationMap;
