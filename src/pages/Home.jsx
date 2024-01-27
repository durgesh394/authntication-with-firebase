import React, { useRef, useState } from "react";
import Cards from "../components/carousel-cards/cards";
const Home = () => {
  const heroStyle = {
    height: "400px",
    backgroundImage: `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    // backgroundImage:
    //   'url("https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: "cover", // This will make the image cover the entire div
    backgroundRepeat: "no-repeat", // This will prevent the image from repeating
    backgroundPosition: "center", // Center the background image
    marginTop: "62px",
    padding: "20px", // Add more styles as needed
    display: "flex",
  };
  return (
    <div
      className="text-gray-700 bg-white antialiased"
      style={{ fontFamily: "sans-serif" }}
    >
      {/*    
    <!--Hero
    style="background: linear-gradient(90deg, #2b4554 0%, #767ba2 100%)"
    --> */}
      <div
        className="py-20 bg-cover bg-no-repeat bg-fixed"
        // style={{
        //   marginTop: "62px",
        //   backgroundImage: `url(
        //     "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //   )`,
        // }}
        style={heroStyle}
      >
        <div className="container m-auto text-center px-6 opacity-100">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Love nature... find peace in its beauty!
          </h2>
          <h3
            className="text-2xl mb-8 text-gray-200"
            style={{ padding: "0px 82px" }}
          >
            Embark on a journey to a breathtaking new destination, where
            nature's beauty captivates the soul and leaves you in awe!
          </h3>
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all">
            Begin a journey of exploration.
          </button>
        </div>
      </div>

      {/* <!-- Features --> */}
      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Places to Visit in India
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2 pr-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Lakshadweep
            </h4>
            <p className="text-gray-600 mb-8">
              Lakshadweep is a group of islands off the Kerala coast in the
              Laccadive Sea. It means 'a hundred thousand islands.' There are 36
              atolls and coral reefs in this beautiful nature tourism
              destination. Lakshadweep is famous for its protected environment
              and activities like water sports.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg"
              src="https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg"
              alt="Lakshadweep"
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg"
              src="https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_3_l_666_1000.jpg"
              alt="Goa"
            />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Goa</h4>
            <p className="text-gray-600 mb-8">
              Popularly known as India’s party capital, Goa seduces travellers
              from all around the globe with its boho beaches, ancient churches,
              majestic forts and unbeatable nightlife.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2 pr-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Pondicherry
            </h4>
            <p className="text-gray-600 mb-8">
              A fascinating, small town with enough elements to charm its
              visitors, Pondicherry whose official name was changed to
              Puducherry in 2006, was once the largest French colony in India.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg"
              src="https://hblimg.mmtcdn.com/content/hubble/img/pondicherry/mmt/destination/m_Pondicherry_activity_beach_l_382_691.jpg"
              alt="Pondicherry"
            />
          </div>
        </div>
      </section>

      {/* <!-- Testimonials --> */}
      <Cards />
      {/* <section className="bg-gray-100 flex justify-center items-center">
        <div
          className="container px-6 py-20 flex items-center flex-col bg-gray-300"
          style={{ padding: "28px", margin: "53px 0px", borderRadius: "20px" }}
        >
          <div className="flex justify-between items-center mb-8 w-[90%]">
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-800 ">
                Trending Destinations in India
              </h2>
            </div>
            <div
              className="carousel-buttons flex justify-between items-center bg-white w-32 rounded-full"
              style={{ padding: "9px 13px" }}
            >
              <button
                className=""
                style={{ fontSize: "23px" }}
                onClick={handlePrevClick}
              >
                <MdOutlineArrowBackIosNew />
              </button>
              <span>|</span>
              <button style={{ fontSize: "23px" }} onClick={handleNextClick}>
                <MdOutlineArrowForwardIos />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex cards-scollbar"
            style={{ width: "100%", gap: "20px", overflowX: "auto" }}
          >
            {destinations.map((destination, index) => (
              <div key={index}>
                <div
                  className="flex flex-col justify-between h-full bg-white rounded shadow"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <p className="text-gray-800 text-base mb-5">
                    <img src={destination.image} alt={destination.name} />
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    {destination.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/*
      
      */}

      {/* <!--Call to Action--> */}
      <section style={{ backgroundColor: "#667eea" }}>
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Headquarters personnel
          </h2>
          <h3 className="my-4 text-2xl text-white">
            Report to command center. Take it easy.
          </h3>
          <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600">
            Report
          </button>
        </div>
      </section>

      {/* <!--Footer--> */}
      {/* <footer className="bg-gray-100">
        <div className="container mx-auto px-6 pt-10 pb-6">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Links</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    I'll return
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    I promise
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Reckless is he
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Legal</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Emperor's Terms
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Pulverized?
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Social</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Corellia
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Bilbringi
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Fondor
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Through the Force</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Journey to the Emperor
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Lord Vader ship approaching?
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    X-wing className
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
