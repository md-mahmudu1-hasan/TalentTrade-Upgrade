
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const topProviders = [
  {
    id: 1,
    name: "Alex Martin",
    service: "Guitar Lessons",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sophia Lee",
    service: "Yoga Training",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "John Doe",
    service: "Coding Help",
    rating: 4.7,
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    id: 4,
    name: "Emma Watson",
    service: "Language Exchange",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/women/66.jpg"
  },
];

const TopRatedProviders = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div data-aos="fade-up" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#347928] mb-8 text-center">
          Top Rated Providers
        </h2>
        <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {topProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transform transition duration-300"
            >
              <img
                src={provider.image}
                alt={provider.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-[#347928]">
                {provider.name}
              </h3>
              <p className="text-gray-600 mb-2">{provider.service}</p>
              <p className="text-yellow-500 font-bold">
                {"★".repeat(Math.floor(provider.rating))}{" "}
                {provider.rating.toFixed(1)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedProviders;
