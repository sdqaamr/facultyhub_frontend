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
  const [designation, setDesignation] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [researchArea, setResearchArea] = useState("");
  const [nationality, setNationality] = useState("");
  const [researcherId, setResearcherId] = useState("");
  const [orcidUrl, setOrcidUrl] = useState("");
  const [googleScholarLink, setGoogleScholarLink] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [biosketch, setBiosketch] = useState("");

  const isValid =
    fullName.trim() !== "" &&
    designation.trim() !== "" &&
    specialization.trim() !== "" &&
    researchArea.trim() !== "" &&
    nationality.trim() !== "" &&
    researcherId.trim() !== "" &&
    orcidUrl.trim() !== "" &&
    googleScholarLink.trim() !== "" &&
    email.trim() !== "" &&
    biosketch.trim().length >= 100 &&
    biosketch.trim().length <= 200;

  return (
    <div className="bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-semibold mb-1">Personal Information</h1>
      <p className="text-gray-600 mb-6">
        Please fill your professional details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2 mb-5">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <div className="flex items-center">
              <FaUser className="text-gray-400 text-lg mr-2" />
              <input
                type="text"
                placeholder="John David"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Designation */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Academic Title / Designation <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <div className="flex items-center">
              <FaBriefcase className="text-gray-400 text-lg mr-2" />
              <input
                type="text"
                placeholder="Assistant Professor"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Specialization */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Subject / Major Specialization{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <div className="flex items-center">
              <MdOutlineSchool className="text-gray-400 text-lg mr-2" />
              <input
                type="text"
                placeholder="Computer Science, Biotechnology, etc."
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Research Area */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Research Area <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <div className="flex items-center">
              <MdOutlinePublic className="text-gray-400 text-lg mr-2" />
              <input
                type="text"
                placeholder="Machine Learning, Genetics, etc."
                value={researchArea}
                onChange={(e) => setResearchArea(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Nationality */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Nationality (Single / Dual) <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <div className="flex items-center">
              <FaGlobe className="text-gray-400 text-lg mr-2" />
              <input
                type="text"
                placeholder="Pakistani / Pakistani-British"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Researcher ID */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Researcher ID / URL <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <div className="flex items-center">
              <FaLink className="text-gray-400 text-lg mr-2" />
              <input
                type="text"
                placeholder="https://www.researcherid.com/..."
                value={researcherId}
                onChange={(e) => setResearcherId(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* ORCID */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            ORCID ID / URL <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <div className="flex items-center">
              <FaLink className="text-gray-400 text-lg mr-2" />
              <input
                type="text"
                placeholder="https://orcid.org/0000-0000-0000-0000"
                value={orcidUrl}
                onChange={(e) => setOrcidUrl(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Google Scholar */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Google Scholar Link <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <div className="flex items-center">
              <FaLink className="text-gray-400 text-lg mr-2" />
              <input
                type="text"
                placeholder="https://scholar.google.com/..."
                value={googleScholarLink}
                onChange={(e) => setGoogleScholarLink(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <div className="flex items-center">
              <FaEnvelope className="text-gray-400 text-lg mr-2" />
              <input
                type="text"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Contact Number
          </label>
          <div className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <div className="flex items-center">
              <FaPhone className="text-gray-400 text-lg mr-2" />
              <input
                type="text"
                placeholder="03xx-xxxxxxx"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Biosketch */}
      <div className="flex flex-col mt-4">
        <label className="text-gray-700 font-medium ml-1 mb-1">
          Biosketch (100–200 words) <span className="text-red-500">*</span>
        </label>

        <textarea
          placeholder="Write a short professional summary..."
          value={biosketch}
          onChange={(e) => setBiosketch(e.target.value)}
          rows={5}
          className="border-2 border-gray-200 bg-gray-100 rounded-md p-3 text-gray-800 outline-none focus:border-purple-500 hover:border-purple-500 transition duration-200"
        ></textarea>

        <p className="text-sm text-gray-500 mt-1">
          {biosketch.trim().split(" ").filter(Boolean).length} words
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-8">
        <button className="px-5 py-2 rounded-lg border border-gray-400 hover:bg-gray-100 transition">
          Cancel
        </button>

        <button
          disabled={!isValid}
          className={`px-5 py-2 rounded-lg bg-purple-600 text-white ${
            isValid
              ? "hover:bg-purple-700 hover:shadow-lg hover:scale-105 transition"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}
