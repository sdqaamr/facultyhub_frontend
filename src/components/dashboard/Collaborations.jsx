"use client";
import { useState } from "react";
import { FaUser, FaBuilding, FaGlobe, FaPenFancy } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

export default function CollaborationsEditorships() {
  const [collabName, setCollabName] = useState("");
  const [collabOrg, setCollabOrg] = useState("");
  const [collabType, setCollabType] = useState("");
  const [collabNature, setCollabNature] = useState("");

  const [journalName, setJournalName] = useState("");
  const [impactFactor, setImpactFactor] = useState("");
  const [journalType, setJournalType] = useState("");

  const isValid =
    collabName.trim() !== "" &&
    collabOrg.trim() !== "" &&
    collabType.trim() !== "" &&
    collabNature.trim() !== "" &&
    journalName.trim() !== "" &&
    impactFactor.trim() !== "" &&
    journalType.trim() !== "";

  return (
    <div className="bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-semibold mb-1">
        Collaborations & Editorships
      </h1>
      <p className="text-gray-600 mb-6">
        Provide details about your research collaborations and editorships.
      </p>

      {/* Section 1 — Research Collaborations */}
      <h2 className="text-xl font-semibold mt-4 mb-3">
        Research Collaborations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Collaborator Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Collaborator Name<span className="text-red-500"> *</span>
          </label>
          <div
            className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center">
              <FaUser className="text-gray-400 text-lg mr-2" />
              <input
                placeholder="Dr. John Doe"
                value={collabName}
                onChange={(e) => setCollabName(e.target.value)}
                maxLength="50"
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Organization */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Organization<span className="text-red-500"> *</span>
          </label>
          <div
            className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center">
              <FaBuilding className="text-gray-400 text-lg mr-2" />
              <input
                placeholder="XYZ University / Research Lab"
                value={collabOrg}
                onChange={(e) => setCollabOrg(e.target.value)}
                maxLength="100"
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* National / International */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            National / International<span className="text-red-500"> *</span>
          </label>
          <div
            className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center">
              <FaGlobe className="text-gray-400 text-lg mr-2" />
              <input
                placeholder="National / International"
                value={collabType}
                onChange={(e) => setCollabType(e.target.value)}
                maxLength="30"
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Nature of Collaboration */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Nature of Collaboration<span className="text-red-500"> *</span>
          </label>
          <div
            className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center">
              <MdOutlineWork className="text-gray-400 text-lg mr-2" />
              <input
                placeholder="Research project, supervision, etc."
                value={collabNature}
                onChange={(e) => setCollabNature(e.target.value)}
                maxLength="100"
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 — Editorships */}
      <h2 className="text-xl font-semibold mt-8 mb-3">Editorships</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Journal Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Journal Name<span className="text-red-500"> *</span>
          </label>
          <div
            className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center">
              <FaPenFancy className="text-gray-400 text-lg mr-2" />
              <input
                placeholder="International Journal of ..."
                value={journalName}
                onChange={(e) => setJournalName(e.target.value)}
                maxLength="100"
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Impact Factor */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            Impact Factor<span className="text-red-500"> *</span>
          </label>
          <div
            className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center">
              <FaPenFancy className="text-gray-400 text-lg mr-2" />
              <input
                placeholder="2.3 / 5.8 / etc."
                value={impactFactor}
                onChange={(e) => setImpactFactor(e.target.value)}
                maxLength="10"
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* National / International */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium ml-1 mb-1">
            National / International<span className="text-red-500"> *</span>
          </label>
          <div
            className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 
          focus-within:border-purple-500 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center">
              <FaGlobe className="text-gray-400 text-lg mr-2" />
              <input
                placeholder="National / International"
                value={journalType}
                onChange={(e) => setJournalType(e.target.value)}
                maxLength="30"
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
            ${
              !isValid
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-purple-700 hover:scale-105"
            } 
            transition-transform`}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}
