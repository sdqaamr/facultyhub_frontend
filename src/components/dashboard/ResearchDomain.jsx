"use client";

import { useState } from "react";
import { FaTags, FaBullseye } from "react-icons/fa";
import { MdScience } from "react-icons/md";

export default function ResearchDomain() {
  const [researchArea, setResearchArea] = useState("");
  const [keywords, setKeywords] = useState("");
  const [sdg, setSdg] = useState("");

  const isValid =
    researchArea.trim() !== "" &&
    keywords.trim().split(",").filter((k) => k.trim() !== "").length >= 5 &&
    sdg.trim() !== "";

  return (
    <div className="bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-semibold mb-1">Research Domain</h1>
      <p className="text-gray-600 mb-6">
        Please enter your research specialization and related information.
      </p>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-evenly mt-2 mb-5">
        
        {/* Research Area */}
        <div className="flex flex-col">
          <label
            htmlFor="researchArea"
            className="text-gray-700 font-medium ml-1 mb-1"
          >
            Research Area<span className="text-red-500"> *</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 focus-within:border-purple-500 hover:border-purple-500 transition">
            <div className="flex items-center">
              <MdScience className="text-gray-400 text-lg mr-2" />
              <input
                id="researchArea"
                type="text"
                placeholder="Artificial Intelligence, Microbiology, etc."
                value={researchArea}
                onChange={(e) => setResearchArea(e.target.value)}
                maxLength={100}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Keywords */}
        <div className="flex flex-col">
          <label
            htmlFor="keywords"
            className="text-gray-700 font-medium ml-1 mb-1"
          >
            Keywords (minimum 5)<span className="text-red-500"> *</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 focus-within:border-purple-500 hover:border-purple-500 transition">
            <div className="flex items-center">
              <FaTags className="text-gray-400 text-lg mr-2" />
              <input
                id="keywords"
                type="text"
                placeholder="AI, ML, Deep Learning, Data Science, Robotics..."
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>

          <p className="text-xs text-gray-500 ml-1 mt-1">
            Separate keywords with commas.
          </p>
        </div>

        {/* Targeted SDG */}
        <div className="flex flex-col">
          <label
            htmlFor="sdg"
            className="text-gray-700 font-medium ml-1 mb-1"
          >
            Targeted SDG<span className="text-red-500"> *</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 focus-within:border-purple-500 hover:border-purple-500 transition">
            <div className="flex items-center">
              <FaBullseye className="text-gray-400 text-lg mr-2" />
              <input
                id="sdg"
                type="text"
                placeholder="SDG 4 - Quality Education, SDG 7 - Clean Energy..."
                value={sdg}
                onChange={(e) => setSdg(e.target.value)}
                maxLength={80}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-8">
        <button className="px-5 py-2 rounded-lg border border-gray-400 hover:bg-gray-100 cursor-pointer transition-transform duration-300">
          Cancel
        </button>

        <button
          disabled={!isValid}
          aria-disabled={!isValid}
          className={`px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 ${
            !isValid
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300"
          }`}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}