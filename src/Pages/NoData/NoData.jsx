import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const NoData = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-linear-to-br from-green-50 to-[#e9fce4]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center p-8 rounded-2xl shadow-lg bg-white border border-[#347928]/30"
      >
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-8xl font-extrabold text-[#347928] drop-shadow-md"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-semibold text-gray-700 mt-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 mt-2 mb-6 max-w-md mx-auto"
        >
          Oops! The page you are looking for doesn’t exist.  
          It might have been removed or you may have mistyped the URL.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="inline-block bg-[#347928] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NoData;
