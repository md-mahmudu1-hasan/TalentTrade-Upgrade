import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-green-100 via-white to-green-200">
      <motion.div
        className="w-24 h-24 rounded-full border-4 border-green-700 border-t-transparent animate-spin mb-6"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
      ></motion.div>

      <motion.h2
        className="text-2xl md:text-3xl font-bold text-green-800 text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        TalentTrade
      </motion.h2>

      <motion.p
        className="text-gray-600 mt-3 px-6 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        An interactive platform to offer, learn, and trade skills connect with
        local experts and grow together.
      </motion.p>

      <motion.div
        className="flex space-x-2 mt-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 bg-green-700 rounded-full"
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: {
                opacity: [0.2, 1, 0.2],
                y: [0, -5, 0],
                transition: {
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Loader;
