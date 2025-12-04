import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurSuccess = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const metrics = [
    { id: 1, number: "120+", label: "Projects Completed" },
    { id: 2, number: "80+", label: "Happy Clients" },
    { id: 3, number: "15", label: "Awards Won" },
    { id: 4, number: "5", label: "Years of Experience" },
  ];

  return (
    <section data-aos="fade-up" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-[#347928] mb-12">Our Success</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-4xl font-bold text-[#347928] mb-2">
              {metric.number}
            </h3>
            <p className="text-gray-700 font-medium">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSuccess;
