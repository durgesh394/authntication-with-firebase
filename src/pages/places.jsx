import React from "react";
import Cards from "../components/carousel-cards/cards";
import { indiaTrendingPlaces } from "../data/IndiaPlaces";
import { internationalPlaces } from "../data/InternationalPlaces";

const Places = () => {
  return (
    <div className="mt-10 bg-gray-100">
      <div className=" w-90 flex flex-col ml-12 pt-12 top-headling">
        <h2 className="text-3xl font-semibold font-sans">
          Places to Visit in India
        </h2>
        <p className="w-[80%] text-[15px]">
          Places to Visit in India - The best places to visit in India to
          experience the most beautiful places like historical places, beach
          places, hill stations , honeymoon places, romantic places, adventure
          places, peaceful places and many more.
        </p>
      </div>
      <Cards
        title={"Trending Destinations in India"}
        places={indiaTrendingPlaces}
      />
      <Cards
        title={"Trending International Destinations"}
        places={internationalPlaces}
      />
      <Cards
        title={"Trending Destinations in India"}
        places={indiaTrendingPlaces}
      />
      <Cards
        title={"Trending Destinations in India"}
        places={indiaTrendingPlaces}
      />
      <Cards
        title={"Trending Destinations in India"}
        places={indiaTrendingPlaces}
      />
      <Cards
        title={"Trending Destinations in India"}
        places={indiaTrendingPlaces}
      />
    </div>
  );
};

export default Places;
