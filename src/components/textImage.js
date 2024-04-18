import React from "react";

const TextImage = () => {
  return (
    <section>
      <div className="flex sm:flex-row flex-col items-center justify-center p-8">
        <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start sm:w-1/2 sm:px-16">
          <h2 className="font-volkhov text-3xl sm:text-5xl font-normal sm:leading-normal tracking-tight text-center sm:text-left text-[#152B69] mb-4 sm:mb-0">
            East Coast <span className="font-semibold">Route</span>
          </h2>
          <div className="text-lg font-normal leading-7 tracking-normal text-justify">
            <p className="mb-4 ">
              When you travel between London and Edinburgh on the East Coast
              route, you will typically start your journey from London King's
              Cross Station, famous for its Platform 9 ¾. Indeed you can take a
              picture next to the platform sign, and there is a shop with plenty
              of Harry Potter souvenirs. Trains from London Kings Cross to
              Edinburgh usually are high-speed, with no changes and minimal
              stops.
            </p>
            <p>
              Typically you can expect the train to stop in Peterborough, York,
              Durham, and Newcastle on the way; with all of these worth visiting
              if you wish to stop en route, York is particularly worth a visit
              with its National Railway Museum. If you want to reach Edinburgh
              particularly quickly, take a Lumo train that only stops twice
              before reaching Edinburgh. Once you reach Newcastle, your route
              will hug the coast to Edinburgh; it's worth sitting on the right
              side of the train to see it.
            </p>
          </div>
        </div>
        <div className="flex justify-center sm:w-1/2">
          <img src="/assets/images/route-map.png" alt="route-map" />
        </div>
      </div>
    </section>
  );
};

export default TextImage;
