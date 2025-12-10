"use client";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function Conferences() {
  const emptyItem = {
    type: "Organized",
    level: "",
    from: "",
    to: "",
  };

  const [items, setItems] = useState([emptyItem]);

  const addItem = () => {
    setItems([...items, { ...emptyItem }]);
  };

  const removeItem = (i) => {
    setItems(items.filter((_, index) => index !== i));
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-semibold mb-1">Conferences & Seminars</h1>
      <p className="text-gray-600 mb-6">
        Please add conferences you have organized or attended.
      </p>

      {items.map((item, index) => (
        <div
          key={index}
          className="border-2 border-gray-200 p-5 rounded-xl mb-6"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-semibold text-gray-700">
              Entry {index + 1}
            </h3>

            {index > 0 && (
              <button
                onClick={() => removeItem(index)}
                className="text-red-500 hover:text-red-700 transition"
              >
                Remove
              </button>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Type */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium ml-1 mb-1">
                Type
              </label>

              <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
                <select
                  value={item.type}
                  onChange={(e) => {
                    const updated = [...items];
                    updated[index].type = e.target.value;
                    setItems(updated);
                  }}
                  className="w-full bg-transparent outline-none text-gray-800"
                >
                  <option value="Organized">Organized</option>
                  <option value="Attended">Attended</option>
                </select>
              </div>
            </div>

            {/* Level */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium ml-1 mb-1">
                Level
              </label>

              <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
                <select
                  value={item.level}
                  onChange={(e) => {
                    const updated = [...items];
                    updated[index].level = e.target.value;
                    setItems(updated);
                  }}
                  className="w-full bg-transparent outline-none text-gray-800"
                >
                  <option value="" disabled>
                    Select Level
                  </option>
                  <option value="National">National</option>
                  <option value="International">International</option>
                </select>
              </div>
            </div>

            {/* From Date */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium ml-1 mb-1">
                From Date
              </label>

              <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 flex items-center hover:border-purple-500 focus-within:border-purple-500 transition">
                <FaCalendarAlt className="text-gray-400 mr-2 text-lg" />
                <input
                  type="date"
                  value={item.from}
                  onChange={(e) => {
                    const updated = [...items];
                    updated[index].from = e.target.value;
                    setItems(updated);
                  }}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
            </div>

            {/* To Date */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium ml-1 mb-1">
                To Date
              </label>

              <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 flex items-center hover:border-purple-500 focus-within:border-purple-500 transition">
                <FaCalendarAlt className="text-gray-400 mr-2 text-lg" />
                <input
                  type="date"
                  value={item.to}
                  onChange={(e) => {
                    const updated = [...items];
                    updated[index].to = e.target.value;
                    setItems(updated);
                  }}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Add Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={addItem}
          className="px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-transform duration-300"
        >
          + Add Conference
        </button>
      </div>
    </div>
  );
}
