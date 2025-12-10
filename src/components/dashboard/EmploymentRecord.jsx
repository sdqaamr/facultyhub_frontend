"use client";
import { useState } from "react";
import { FaBuilding, FaUserTie } from "react-icons/fa";
import { MdWork, MdDateRange } from "react-icons/md";

export default function EmploymentRecord() {
  const [organization, setOrganization] = useState("");
  const [sectorType, setSectorType] = useState(""); // Government / Semi-Government / Private
  const [post, setPost] = useState("");
  const [bpsTts, setBpsTts] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const isValid =
    organization.trim() !== "" &&
    sectorType.trim() !== "" &&
    post.trim() !== "" &&
    bpsTts.trim() !== "" &&
    dateFrom.trim() !== "" &&
    dateTo.trim() !== "";

  return (
    <div className="bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-semibold mb-1">Employment Record</h1>
      <p className="text-gray-600 mb-6">
        Provide your employment details in the required format.
      </p>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-evenly mt-2 mb-5">

        {/* Organization */}
        <div className="align-left flex flex-col">
          <label
            htmlFor="organization"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Organization<span className="text-red-500"> *</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 
            focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaBuilding className="text-gray-400 text-lg mr-2" />
              <input
                id="organization"
                type="text"
                placeholder="ABC University / XYZ Company"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                maxLength="80"
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Sector Type */}
        <div className="align-left flex flex-col">
          <label
            htmlFor="sectorType"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Government / Semi-Gov / Private<span className="text-red-500"> *</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 
            focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <MdWork className="text-gray-400 text-lg mr-2" />
              <input
                id="sectorType"
                type="text"
                placeholder="Government / Semi-Government / Private"
                value={sectorType}
                onChange={(e) => setSectorType(e.target.value)}
                maxLength="50"
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Post */}
        <div className="align-left flex flex-col">
          <label
            htmlFor="post"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Post<span className="text-red-500"> *</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 
            focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaUserTie className="text-gray-400 text-lg mr-2" />
              <input
                id="post"
                type="text"
                placeholder="Assistant Professor / Manager / Officer"
                value={post}
                onChange={(e) => setPost(e.target.value)}
                maxLength="60"
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* BPS / TTS */}
        <div className="align-left flex flex-col">
          <label
            htmlFor="bpsTts"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            BPS / TTS (If applicable)
            <span className="text-red-500"> *</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 
            focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <MdWork className="text-gray-400 text-lg mr-2" />
              <input
                id="bpsTts"
                type="text"
                placeholder="BPS-19 / TTS"
                value={bpsTts}
                onChange={(e) => setBpsTts(e.target.value)}
                maxLength="20"
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Date From */}
        <div className="align-left flex flex-col">
          <label
            htmlFor="dateFrom"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Date From<span className="text-red-500"> *</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 
            focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <MdDateRange className="text-gray-400 text-lg mr-2" />
              <input
                id="dateFrom"
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full outline-none text-md bg-transparent text-gray-800"
              />
            </div>
          </div>
        </div>

        {/* Date To */}
        <div className="align-left flex flex-col">
          <label
            htmlFor="dateTo"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Date To<span className="text-red-500"> *</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 
            focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <MdDateRange className="text-gray-400 text-lg mr-2" />
              <input
                id="dateTo"
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full outline-none text-md bg-transparent text-gray-800"
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