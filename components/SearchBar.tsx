"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search anime..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 text-white bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
      >
        Search
      </motion.button>
    </div>
  );
}
