import React, { useState } from "react";
import useData from "../../Hooks/useData";
import Loader from "../Loader";
import ItemCard from "./ItemCard";

const AllItem = () => {
  const { data, loading } = useData();
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterCategory, setFilterCategory] = useState("all");

  if (loading) {
    return <Loader />;
  }

  // ডাইনামিক category লিস্ট তৈরি
  const categories = ["all", ...new Set(data.map((item) => item.category))];

  // Filtered Data
  const filteredData =
    filterCategory === "all"
      ? data
      : data.filter((item) => item.category === filterCategory);

  // Sorted Data
  const sortedData = [...filteredData].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-[#347928] mb-8">
        All Items
      </h1>

      {/* Sorting & Filtering */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <label className="mr-2 font-semibold">Sort by Price:</label>
          <select
            className="border border-gray-300 rounded px-2 py-1"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div>
          <label className="mr-2 font-semibold">Filter by Category:</label>
          <select
            className="border border-gray-300 rounded px-2 py-1"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedData.map((skill) => (
          <ItemCard key={skill.skillId} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default AllItem;
