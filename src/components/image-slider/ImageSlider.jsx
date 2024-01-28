// import React, { useState } from "react";
// import {
//   MdOutlineArrowBackIosNew,
//   MdOutlineArrowForwardIos,
// } from "react-icons/md";

// const ImageSlider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePreviousBtn = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     } else {
//       alert("Previous image not available");
//     }
//   };

//   const handleNextBtn = () => {
//     if (currentIndex < images.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       alert("No next image to slide");
//     }
//   };

//   const imageStyle = {
//     transition: "transform 0.5s ease",
//     transform: `translateX(-${currentIndex * 100}%)`,
//     width: "100%",
//   };

//   return (
//     <div
//       className="w-full flex justify-center md:w-1/2 relative"
//       style={{ overflow: "hidden" }}
//     >
//       <div
//         className="slider"
//         style={{
//           display: "flex",
//           width: `${images.length * 100}%`,
//           ...imageStyle,
//         }}
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             className="rounded-lg"
//             src={image}
//             alt={`Image ${index + 1}`}
//             style={{ width: "100%" }}
//           />
//         ))}
//       </div>
//       <div
//         className="btns"
//         style={{
//           position: "absolute",
//           top: "0",
//           display: "flex",
//           justifyContent: "space-between",
//           width: "90%",
//           alignItems: "center",
//           height: "100%",
//         }}
//       >
//         <button
//           onClick={handlePreviousBtn}
//           style={{
//             backgroundColor: "rgba(0,0,0,0.5)",
//             borderRadius: "20px",
//             color: "#fff",
//             padding: "9px 10px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <MdOutlineArrowBackIosNew />
//         </button>
//         <button
//           onClick={handleNextBtn}
//           style={{
//             backgroundColor: "rgba(0,0,0,0.5)",
//             borderRadius: "20px",
//             color: "#fff",
//             padding: "9px 10px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <MdOutlineArrowForwardIos />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import "../../styles/imageSlides.css";

const ImageSlider = ({ images, widths, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousBtn = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      alert("Previous image not available");
    }
  };

  const handleNextBtn = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("No next image to slide");
    }
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const imageStyle = {
    transition: "transform 0.5s ease",
    transform: `translateX(-${currentIndex * 100}%)`,
    width: "100%",
  };

  return (
    <div
      className="flex justify-center md:w-1/2 relative"
      //w-full
      style={{
        overflow: "hidden",
        width: `${widths}%`,
        // height: `${height}px`,
      }}
    >
      {/* w-full */}
      <div
        className="slider"
        style={{
          display: "flex",
          width: `${images.length * 100}%`,
          ...imageStyle,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            className="rounded-lg"
            src={image}
            alt={`Image ${index + 1}`}
            style={{ width: "100%" }}
          />
        ))}
      </div>
      <div
        className="btns"
        style={{
          position: "absolute",
          top: "0",
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          alignItems: "center",
          height: "100%",
        }}
      >
        <button
          onClick={handlePreviousBtn}
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "20px",
            color: "#fff",
            padding: "9px 10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MdOutlineArrowBackIosNew />
        </button>
        <button
          onClick={handleNextBtn}
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "20px",
            color: "#fff",
            padding: "9px 10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
      <div
        className="indicators"
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "#fff",
          borderRadius: "20px",
          padding: "0px 10px",
        }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : "inactive"}`}
            onClick={() => handleIndicatorClick(index)}
          >
            <GoDotFill />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
