import React from 'react';
import bannerImg from "../../assets/scrap-banner.png"; // Update with a relevant image

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12 bg-green-50 px-6">
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="Scrap materials marketplace" className="w-full md:max-w-lg rounded-lg shadow-lg" />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="md:text-5xl text-3xl font-bold text-green-700 mb-7">
          Buy & Sell Scrap Materials Easily
        </h1>
        <p className="mb-10 text-gray-700 leading-relaxed">
          Turn your waste into wealth! Connect with verified buyers and sellers, trade scrap responsibly, and contribute to a sustainable future. Start your journey today.
        </p>

        <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
