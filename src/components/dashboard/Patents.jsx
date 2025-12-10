"use client";
import { useState } from "react";
import { FaGlobe, FaLink, FaHashtag, FaBuilding } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

export default function Patents() {
  const [refNumber, setRefNumber] = useState("");
  const [grantCountry, setGrantCountry] = useState("");
  const [grantDate, setGrantDate] = useState("");
  const [grantAffiliation, setGrantAffiliation] = useState("");

  const [subDate, setSubDate] = useState("");
  const [subCountry, setSubCountry] = useState("");
  const [subAffiliation, setSubAffiliation] = useState("");

  const isValid =
    refNumber.trim() !== "" &&
    grantCountry.trim() !== "" &&
    grantDate.trim() !== "" &&
    grantAffiliation.trim() !== "" &&
    subDate.trim() !== "" &&
    subCountry.trim() !== "" &&
    subAffiliation.trim() !== "";

  return (
    <div className="bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-semibold mb-1">Patents</h1>
      <p className="text-gray-600 mb-6">
        Provide details about granted and submitted patents.
      </p>

      {/* ---------------- PATENT GRANTED ---------------- */}
      <h2 className="text-xl font-semibold mb-3">Patent Granted</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2 mb-6">

        {/* Ref Number */}
        <div className="flex flex-col">
          <label
            htmlFor="refNumber"
            className="taxt-gray-700 font-medium ml-1 mb-1"
          >
            Ref Number<span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition">
            <div className="flex items-center">
              <FaHashtag className="text-gray-400 text-lg mr-2" />
              <input
                id="refNumber"
                placeholder="PAT-2024-XYZ"
                value={refNumber}
                onChange={(e) => setRefNumber(e.target.value)}
                maxLength="50"
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Country */}
        <div className="flex flex-col">
          <label
            htmlFor="grantCountry"
            className="taxt-gray-700 font-medium ml-1 mb-1"
          >
            Country<span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition">
            <div className="flex items-center">
              <FaGlobe className="text-gray-400 text-lg mr-2" />
              <input
                id="grantCountry"
                placeholder="USA / Pakistan / UK"
                value={grantCountry}
                onChange={(e) => setGrantCountry(e.target.value)}
                maxLength="50"
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label
            htmlFor="grantDate"
            className="taxt-gray-700 font-medium ml-1 mb-1"
          >
            Date<span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition">
            <div className="flex items-center">
              <MdDateRange className="text-gray-400 text-lg mr-2" />
              <input
                id="grantDate"
                type="date"
                value={grantDate}
                onChange={(e) => setGrantDate(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-800"
              />
            </div>
          </div>
        </div>

        {/* Affiliation */}
        <div className="flex flex-col">
          <label
            htmlFor="grantAffiliation"
            className="taxt-gray-700 font-medium ml-1 mb-1"
          >
            Affiliation with Organization<span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition">
            <div className="flex items-center">
              <FaBuilding className="text-gray-400 text-lg mr-2" />
              <input
                id="grantAffiliation"
                placeholder="XYZ University / Research Center"
                value={grantAffiliation}
                onChange={(e) => setGrantAffiliation(e.target.value)}
                maxLength="100"
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- PATENT SUBMITTED ---------------- */}
      <h2 className="text-xl font-semibold mb-3">Patent Submitted</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">

        {/* Submission Date */}
        <div className="flex flex-col">
          <label
            htmlFor="subDate"
            className="taxt-gray-700 font-medium ml-1 mb-1"
          >
            Submission Date<span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition">
            <div className="flex items-center">
              <MdDateRange className="text-gray-400 text-lg mr-2" />
              <input
                id="subDate"
                type="date"
                value={subDate}
                onChange={(e) => setSubDate(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-800"
              />
            </div>
          </div>
        </div>

        {/* Country */}
        <div className="flex flex-col">
          <label
            htmlFor="subCountry"
            className="taxt-gray-700 font-medium ml-1 mb-1"
          >
            Country<span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition">
            <div className="flex items-center">
              <FaGlobe className="text-gray-400 text-lg mr-2" />
              <input
                id="subCountry"
                placeholder="USA / Pakistan / UK"
                value={subCountry}
                onChange={(e) => setSubCountry(e.target.value)}
                maxLength="50"
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Affiliation */}
        <div className="flex flex-col">
          <label
            htmlFor="subAffiliation"
            className="taxt-gray-700 font-medium ml-1 mb-1"
          >
            Affiliation with Organization<span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition">
            <div className="flex items-center">
              <FaBuilding className="text-gray-400 text-lg mr-2" />
              <input
                id="subAffiliation"
                placeholder="XYZ University / Research Center"
                value={subAffiliation}
                onChange={(e) => setSubAffiliation(e.target.value)}
                maxLength="100"
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-8">
        <button className="px-5 py-2 rounded-lg border border-gray-400 hover:bg-gray-100 cursor-pointer transition">
          Cancel
        </button>
        <button
          disabled={!isValid}
          className={`px-5 py-2 rounded-lg bg-purple-600 text-white 
            ${!isValid ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700 hover:scale-105"} 
            transition-transform`}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}