"use client";
import { useState } from "react";
import {
  FaUser,
  FaBriefcase,
  FaGlobe,
  FaLink,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { MdOutlineSchool, MdOutlinePublic } from "react-icons/md";

export default function PersonalInfo() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [researchArea, setResearchArea] = useState("");
  const [nationality, setNationality] = useState("");
  const [researcherId, setResearcherId] = useState("");
  const [orcidUrl, setOrcidUrl] = useState("");
  const [googleScholarLink, setGoogleScholarLink] = useState("");

  const isValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    designation.trim() !== "" &&
    specialization.trim() !== "" &&
    researchArea.trim() !== "" &&
    nationality.trim() !== "" &&
    researcherId.trim() !== "" &&
    orcidUrl.trim() !== "" &&
    googleScholarLink.trim() !== "";

  return (
    <div className="bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-semibold mb-1">Personal Information</h1>
      <p className="text-gray-600 mb-6">
        Please fill your basic professional details.
      </p>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-evenly mt-2 mb-5">
        {/* Full Name */}
        <div className="align-left items-left flex flex-col">
          <label
            htmlFor="fullName"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Full Name<span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaUser className="text-gray-400 text-lg mr-2" />
              <input
                id="fullName"
                type="fullName"
                placeholder="John David"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                maxLength="50"
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Academic Title / Designation */}
        <div className="align-left items-left flex flex-col">
          <label
            htmlFor="designation"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Academic Title/Designation
            <span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaBriefcase className="text-gray-400 text-lg mr-2" />
              <input
                id="designation"
                type="designation"
                placeholder="Assistant Professor"
                name="designation"
                maxLength="50"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                required
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Subject / Major */}
        <div className="align-left items-left flex flex-col">
          <label
            htmlFor="specialization"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Subject/Major Specialization
            <span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <MdOutlineSchool className="text-gray-400 text-lg mr-2" />
              <input
                id="specialization"
                type="specialization"
                placeholder="Computer Science, Biotechnology, etc."
                name="specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                maxLength="50"
                required
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Research Area */}
        <div className="align-left items-left flex flex-col">
          <label
            htmlFor="researchArea"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Research Area<span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <MdOutlinePublic className="text-gray-400 text-lg mr-2" />
              <input
                id="researchArea"
                type="researchArea"
                placeholder="Machine Learning, Genetics, etc."
                name="researchArea"
                value={researchArea}
                onChange={(e) => setResearchArea(e.target.value)}
                maxLength="50"
                required
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Nationality */}
        <div className="align-left items-left flex flex-col">
          <label
            htmlFor="nationality"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Nationality (Single/Dual)
            <span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaGlobe className="text-gray-400 text-lg mr-2" />
              <input
                id="nationality"
                type="nationality"
                placeholder="Pakistani / Pakistani-British"
                name="nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                maxLength="80"
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Researcher ID */}
        <div className="align-left items-left flex flex-col">
          <label
            htmlFor="researcherId"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Researcher ID/URL<span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaLink className="text-gray-400 text-lg mr-2" />
              <input
                id="researcherId"
                type="researcherId"
                placeholder="https://www.researcherid.com/..."
                name="researcherId"
                value={researcherId}
                onChange={(e) => setResearcherId(e.target.value)}
                maxLength="100"
                required
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* ORCID */}
        <div className="align-left items-left flex flex-col">
          <label
            htmlFor="orcidUrl"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            ORCID ID/URL<span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaLink className="text-gray-400 text-lg mr-2" />
              <input
                id="orcidUrl"
                type="orcidUrl"
                placeholder="https://orcid.org/0000-0000-0000-0000"
                name="orcidUrl"
                value={orcidUrl}
                onChange={(e) => setOrcidUrl(e.target.value)}
                maxLength="100"
                required
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Google Scholar */}
        <div className="align-left items-left flex flex-col">
          <label
            htmlFor="googleScholarLink"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Google Scholar Link<span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaLink className="text-gray-400 text-lg mr-2" />
              <input
                id="googleScholarLink"
                type="googleScholarLink"
                placeholder="https://scholar.google.com/..."
                name="googleScholarLink"
                value={googleScholarLink}
                onChange={(e) => setGoogleScholarLink(e.target.value)}
                maxLength="10"
                required
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="align-left items-left flex flex-col">
          <label
            htmlFor="email"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Email<span className="text-red-500"> *</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaEnvelope className="text-gray-400 text-lg mr-2" />
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength="50"
                required
                className="w-full outline-none text-md bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="align-left items-left flex flex-col">
          <label
            htmlFor="phone"
            className="taxt-gray-700 font-medium text-left ml-1 mb-1"
          >
            Contact Number
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 mb-1 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
            <div className="flex items-center">
              <FaPhone className="text-gray-400 text-lg mr-2" />
              <input
                id="phone"
                type="phone"
                placeholder="03xx-xxxxxxx"
                name="phone"
                maxLength="12"
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
