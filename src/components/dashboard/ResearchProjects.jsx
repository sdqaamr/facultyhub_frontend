"use client";

import { useState } from "react";
import {
  FaUniversity,
  FaGlobe,
  FaUserTie,
  FaMoneyBillWave,
  FaBook,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ResearchProjects() {
  const [awarded, setAwarded] = useState({
    agencyName: "",
    agencyType: "",
    role: "",
    worth: "",
    title: "",
    startDate: "",
    endDate: "",
  });

  const [submitted, setSubmitted] = useState({
    agencyName: "",
    agencyType: "",
  });

  const validAwarded =
    awarded.agencyName &&
    awarded.agencyType &&
    awarded.role &&
    awarded.worth &&
    awarded.title &&
    awarded.startDate;

  return (
    <div className="bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-semibold mb-1">Research Projects</h1>
      <p className="text-gray-600 mb-6">
        Provide details of awarded and submitted research projects.
      </p>

      {/* ------------------ Awarded Projects ------------------ */}
      <h2 className="text-lg font-semibold mt-4 mb-3">Awarded Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Funding Agency Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">
            Funding Agency Name <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 flex items-center hover:border-purple-500 transition">
            <FaUniversity className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="HEC, NRPU, PSF..."
              value={awarded.agencyName}
              onChange={(e) =>
                setAwarded({ ...awarded, agencyName: e.target.value })
              }
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* National / International */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">
            National / International
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 flex items-center hover:border-purple-500 transition">
            <FaGlobe className="text-gray-400 mr-2" />
            <select
              value={awarded.agencyType}
              onChange={(e) =>
                setAwarded({ ...awarded, agencyType: e.target.value })
              }
              className="bg-transparent outline-none text-gray-600 w-full"
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="National">National</option>
              <option value="International">International</option>
            </select>
          </div>
        </div>

        {/* PI/Co-PI */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">
            PI / Co-PI <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 flex items-center hover:border-purple-500 transition">
            <FaUserTie className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Principal Investigator"
              value={awarded.role}
              onChange={(e) => setAwarded({ ...awarded, role: e.target.value })}
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* Worth */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">
            Worth (PKR) <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 flex items-center hover:border-purple-500 transition">
            <FaMoneyBillWave className="text-gray-400 mr-2" />
            <input
              type="number"
              placeholder="5000000"
              value={awarded.worth}
              onChange={(e) =>
                setAwarded({ ...awarded, worth: e.target.value })
              }
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-gray-700 font-medium mb-1">
            Project Title <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 flex items-center hover:border-purple-500 transition">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="AI-based Healthcare Prediction Model"
              value={awarded.title}
              onChange={(e) =>
                setAwarded({ ...awarded, title: e.target.value })
              }
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* Start Date */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">
            Start Date <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 flex items-center hover:border-purple-500 transition">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <input
              type="date"
              value={awarded.startDate}
              onChange={(e) =>
                setAwarded({ ...awarded, startDate: e.target.value })
              }
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* End Date */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">
            Completion Date (optional)
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 flex items-center hover:border-purple-500 transition">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <input
              type="date"
              value={awarded.endDate}
              onChange={(e) =>
                setAwarded({ ...awarded, endDate: e.target.value })
              }
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>
      </div>

      {/* ------------------ Submitted Projects ------------------ */}
      <h2 className="text-lg font-semibold mt-10 mb-3">Submitted Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Funding Agency Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">
            Funding Agency Name
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 flex items-center hover:border-purple-500 transition">
            <FaUniversity className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="HEC, NRPU..."
              value={submitted.agencyName}
              onChange={(e) =>
                setSubmitted({ ...submitted, agencyName: e.target.value })
              }
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* National / International */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">
            National / International
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 flex items-center hover:border-purple-500 transition">
            <FaGlobe className="text-gray-400 mr-2" />
            <select
              value={submitted.agencyType}
              onChange={(e) =>
                setSubmitted({ ...submitted, agencyType: e.target.value })
              }
              className="bg-transparent outline-none text-gray-600 w-full"
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="National">National</option>
              <option value="International">International</option>
            </select>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-10">
        <button className="px-5 py-2 rounded-lg border border-gray-400 hover:bg-gray-100">
          Cancel
        </button>

        <button
          disabled={!validAwarded}
          className={`px-5 py-2 rounded-lg text-white ${
            validAwarded
              ? "bg-purple-600 hover:bg-purple-700 hover:scale-105 hover:shadow-lg"
              : "bg-purple-400 cursor-not-allowed"
          } transition`}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}
