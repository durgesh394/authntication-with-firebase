import React from "react";
import ImageSlider from "../components/image-slider/ImageSlider";
import { Pondicherry, goa, lakshdeep } from "../data/Image-for-slider";
import Footer from "../components/footer/Footer";

const Home = () => {
  const heroStyle = {
    height: "400px",
    backgroundImage: `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginTop: "62px",
    padding: "20px",
    display: "flex",
  };
  return (
    <div
      className="text-gray-700 bg-white antialiased"
      style={{ fontFamily: "sans-serif" }}
    >
      <div className="py-20 bg-cover bg-no-repeat bg-fixed" style={heroStyle}>
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
          <ImageSlider widths={45} height={200} images={lakshdeep} />
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <ImageSlider widths={45} height={200} images={goa} />
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
          <ImageSlider widths={45} images={Pondicherry} />
        </div>
      </section>

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
      <Footer />
    </div>
  );
};

export default Home;
