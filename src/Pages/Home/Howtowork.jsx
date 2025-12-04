
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Create an account quickly using your email or social login.",
      icon: (
        <svg
          className="w-10 h-10 text-[#347928] mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Choose Service",
      description: "Browse and select the services or skills you want to access.",
      icon: (
        <svg
          className="w-10 h-10 text-[#347928] mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7h18M3 12h18M3 17h18"
          ></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Enjoy & Learn",
      description:
        "Connect with providers, complete your tasks, and enjoy learning.",
      icon: (
        <svg
          className="w-10 h-10 text-[#347928] mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section data-aos="fade-up" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-[#347928] mb-12">How It Works</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition"
          >
            {step.icon}
            <h3 className="text-xl font-semibold text-[#034602] mb-2">
              {step.title}
            </h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
