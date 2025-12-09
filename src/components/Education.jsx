"use client";
import { useState } from "react";
import {
  FaUniversity,
  FaBook,
  FaCalendarAlt,
  FaSchool,
  FaRegBuilding,
} from "react-icons/fa";

export default function Education() {
  const [degreeUniversity, setDegreeUniversity] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [terminalYear, setTerminalYear] = useState("");
  const [terminalSpecialization, setTerminalSpecialization] = useState("");

  const [trainingType, setTrainingType] = useState("");
  const [trainingSubject, setTrainingSubject] = useState("");
  const [trainingInstitution, setTrainingInstitution] = useState("");
  const [trainingYear, setTrainingYear] = useState("");

  const isValid =
    degreeUniversity.trim() !== "" &&
    degreeName.trim() !== "" &&
    terminalYear.trim() !== "" &&
    terminalSpecialization.trim() !== "" &&
    trainingType.trim() !== "" &&
    trainingSubject.trim() !== "" &&
    trainingInstitution.trim() !== "" &&
    trainingYear.trim() !== "";

  return (
    <div className="bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-semibold mb-1">Education</h1>
      <p className="text-gray-600 mb-6">
        Please provide your academic qualifications and formal trainings.
      </p>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2 mb-5">
        
        {/* University Name */}
        <div className="flex flex-col">
          <label
            htmlFor="degreeUniversity"
            className="text-gray-700 font-medium ml-1 mb-1"
          >
            University Name <span className="text-red-500">*</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaUniversity className="text-gray-400 text-lg mr-2" />
              <input
                id="degreeUniversity"
                type="text"
                placeholder="University of XYZ"
                value={degreeUniversity}
                onChange={(e) => setDegreeUniversity(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
                maxLength="100"
              />
            </div>
          </div>
        </div>

        {/* Degree Name */}
        <div className="flex flex-col">
          <label
            htmlFor="degreeName"
            className="text-gray-700 font-medium ml-1 mb-1"
          >
            Degree Name <span className="text-red-500">*</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaBook className="text-gray-400 text-lg mr-2" />
              <input
                id="degreeName"
                type="text"
                placeholder="MS / PhD / BS etc."
                value={degreeName}
                onChange={(e) => setDegreeName(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
                maxLength="80"
              />
            </div>
          </div>
        </div>

        {/* Year of Terminal Degree */}
        <div className="flex flex-col">
          <label
            htmlFor="terminalYear"
            className="text-gray-700 font-medium ml-1 mb-1"
          >
            Year of Terminal Degree <span className="text-red-500">*</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-400 text-lg mr-2" />
              <input
                id="terminalYear"
                type="number"
                placeholder="2022"
                value={terminalYear}
                onChange={(e) => setTerminalYear(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
                maxLength="4"
              />
            </div>
          </div>
        </div>

        {/* Specialization */}
        <div className="flex flex-col">
          <label
            htmlFor="terminalSpecialization"
            className="text-gray-700 font-medium ml-1 mb-1"
          >
            Specialization <span className="text-red-500">*</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaSchool className="text-gray-400 text-lg mr-2" />
              <input
                id="terminalSpecialization"
                type="text"
                placeholder="Artificial Intelligence, Microbiology etc."
                value={terminalSpecialization}
                onChange={(e) => setTerminalSpecialization(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
                maxLength="100"
              />
            </div>
          </div>
        </div>

        {/* --- Formal Training Section --- */}

        {/* Training Type */}
        <div className="flex flex-col">
          <label
            htmlFor="trainingType"
            className="text-gray-700 font-medium ml-1 mb-1"
          >
            Type of Training <span className="text-red-500">*</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaRegBuilding className="text-gray-400 text-lg mr-2" />
              <input
                id="trainingType"
                type="text"
                placeholder="Workshop, Certification, Course etc."
                value={trainingType}
                onChange={(e) => setTrainingType(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
                maxLength="80"
              />
            </div>
          </div>
        </div>

        {/* Training Subject */}
        <div className="flex flex-col">
          <label
            htmlFor="trainingSubject"
            className="text-gray-700 font-medium ml-1 mb-1"
          >
            Subject of Training <span className="text-red-500">*</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaBook className="text-gray-400 text-lg mr-2" />
              <input
                id="trainingSubject"
                type="text"
                placeholder="Genetics, Data Analysis, etc."
                value={trainingSubject}
                onChange={(e) => setTrainingSubject(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
                maxLength="80"
              />
            </div>
          </div>
        </div>

        {/* Training Institution */}
        <div className="flex flex-col">
          <label
            htmlFor="trainingInstitution"
            className="text-gray-700 font-medium ml-1 mb-1"
          >
            Institution <span className="text-red-500">*</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaRegBuilding className="text-gray-400 text-lg mr-2" />
              <input
                id="trainingInstitution"
                type="text"
                placeholder="ABC Institute"
                value={trainingInstitution}
                onChange={(e) => setTrainingInstitution(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
                maxLength="100"
              />
            </div>
          </div>
        </div>

        {/* Training Year */}
        <div className="flex flex-col">
          <label
            htmlFor="trainingYear"
            className="text-gray-700 font-medium ml-1 mb-1"
          >
            Year Attended <span className="text-red-500">*</span>
          </label>

          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-400 text-lg mr-2" />
              <input
                id="trainingYear"
                type="number"
                placeholder="2021"
                value={trainingYear}
                onChange={(e) => setTrainingYear(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
                maxLength="4"
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
          className={`px-5 py-2 rounded-lg bg-purple-600 text-white ${
            !isValid
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-purple-700 hover:shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300"
          }`}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}