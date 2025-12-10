"use client";
import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { MdDateRange, MdPublic } from "react-icons/md";

export default function Awards() {
  const [awardName, setAwardName] = useState("");
  const [awardYear, setAwardYear] = useState("");
  const [awardLevel, setAwardLevel] = useState(""); // National / International

  const isValid =
    awardName.trim() !== "" &&
    awardYear.trim() !== "" &&
    awardLevel.trim() !== "";

  return (
    <div className="bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-semibold mb-1">Awards / Distinctions</h1>
      <p className="text-gray-600 mb-6">
        Provide your award or distinction details.
      </p>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-evenly mt-2 mb-5">
        {/* Award Name */}
        <div className="align-left flex flex-col">
          <label
            htmlFor="awardName"
            className="text-gray-700 font-medium text-left ml-1 mb-1"
          >
            Award / Distinction Name
            <span className="text-red-500"> *</span>
          </label>

          <div
            className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 
            focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200"
          >
            <div className="flex items-center">
              <FaTrophy className="text-gray-400 text-lg mr-2" />
              <input
                id="awardName"
                type="text"
                placeholder="Best Research Award / Gold Medal"
                value={awardName}
                onChange={(e) => setAwardName(e.target.value)}
                maxLength="80"
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Award Year */}
        <div className="align-left flex flex-col">
          <label
            htmlFor="awardYear"
            className="text-gray-700 font-medium text-left ml-1 mb-1"
          >
            Year of Award / Distinction
            <span className="text-red-500"> *</span>
          </label>

          <div
            className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 
            focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200"
          >
            <div className="flex items-center">
              <MdDateRange className="text-gray-400 text-lg mr-2" />
              <input
                id="awardYear"
                type="number"
                placeholder="2021"
                value={awardYear}
                onChange={(e) => setAwardYear(e.target.value)}
                maxLength="4"
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* National / International */}
        <div className="align-left flex flex-col">
          <label
            htmlFor="awardLevel"
            className="text-gray-700 font-medium text-left ml-1 mb-1"
          >
            National / International
            <span className="text-red-500"> *</span>
          </label>

          <div
            className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 
            focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200"
          >
            <div className="flex items-center">
              <MdPublic className="text-gray-400 text-lg mr-2" />
              <input
                id="awardLevel"
                type="text"
                placeholder="National / International"
                value={awardLevel}
                onChange={(e) => setAwardLevel(e.target.value)}
                maxLength="30"
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
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
