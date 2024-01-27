import React, { useEffect, useState, useRef } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import "../../styles/cards.css";
import { destinations } from "./data";

const Cards = () => {
  const itemsPerPage = 6; // Set the number of items to display per page
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, destinations.length - itemsPerPage)
    );
  };

  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].offsetWidth + 20; // 20 is gap between items
      carouselRef.current.style.transform = `translateX(${
        -currentIndex * itemWidth
      }px)`;
    }
  }, [currentIndex]);

  return (
    <section className="bg-gray-100 flex justify-center items-center">
      <div
        className="container px-6 py-20 flex items-center flex-col bg-gray-300"
        style={{ padding: "28px", margin: "53px 0px", borderRadius: "20px" }}
      >
        <div className="flex justify-between items-center mb-8 w-[90%]">
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Trending Destinations in India
            </h2>
          </div>
          <div
            className="carousel-buttons flex justify-between items-center bg-white w-32 rounded-full"
            style={{ padding: "9px 13px" }}
          >
            <button
              className=""
              style={{ fontSize: "23px", cursor: "pointer" }}
              onClick={handlePrevClick}
              disabled={currentIndex === 0}
            >
              <MdOutlineArrowBackIosNew />
            </button>
            <span>|</span>
            <button
              style={{ fontSize: "23px", cursor: "pointer" }}
              onClick={handleNextClick}
              disabled={currentIndex === destinations.length - itemsPerPage}
            >
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>

        <div
          className="cards-scrollbar-container"
          style={{
            width: "100%",
            overflowX: "auto",
          }}
        >
          <div
            ref={carouselRef}
            className="flex cards-scrollbar"
            style={{
              width: `${destinations.length * (200 + 20)}px`, // Adjust width based on total items
              gap: "20px",
              transition: "transform 0.5s",
            }}
          >
            {destinations.map((destination, index) => (
              <div key={index}>
                <div
                  className="flex flex-col justify-between h-full bg-white rounded shadow"
                  style={{
                    width: "200px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease-in-out",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <p
                    style={{
                      position: "absolute",
                      top: "13px",
                      padding: "5px 10px",
                      marginLeft: "12px",
                      backgroundColor: "#fff",
                      fontWeight: "bold",
                      borderRadius: "5px",
                    }}
                  >
                    {index + 1}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6 overflow-hidden overflow-ellipsis">
                    {destination.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
