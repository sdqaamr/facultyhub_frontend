"use client";

import { useState } from "react";
import {
  FaUserAlt,
  FaBook,
  FaGlobe,
  FaLink,
} from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";

export default function ResearchPublications() {
  /* ------------------------- Journal Papers ------------------------- */
  const [journal, setJournal] = useState({
    authorType: "",
    title: "",
    journalName: "",
    publishingYear: "",
    volume: "",
    impactFactor: "",
    example: "",
    doiUrl: "",
    journalType: "",
    hecRecognized: "",
    hrjsCategory: "",
  });

  /* ------------------------- Abstracts ------------------------- */
  const [abstracts, setAbstracts] = useState({
    title: "",
    conferenceName: "",
    date: "",
    page: "",
    type: "",
    mode: "",
  });

  /* ------------------------- Books ------------------------- */
  const [books, setBooks] = useState({
    title: "",
    author: "",
    year: "",
    agency: "",
    type: "",
  });

  /* ------------------------- Book Chapters ------------------------- */
  const [chapters, setChapters] = useState({
    title: "",
    author: "",
    bookName: "",
    year: "",
    agency: "",
  });

  const isValidJournal =
    journal.authorType &&
    journal.title &&
    journal.journalName &&
    journal.publishingYear &&
    journal.volume &&
    journal.impactFactor &&
    journal.example &&
    journal.doiUrl &&
    journal.journalType &&
    journal.hecRecognized &&
    journal.hrjsCategory;

  return (
    <div className="bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-semibold mb-1">Research Publications</h1>
      <p className="text-gray-600 mb-6">
        Enter your research publication and related academic contributions.
      </p>

      {/* ----------------------------------------------------------- */}
      {/* ------------------- JOURNAL PUBLICATIONS ------------------ */}
      {/* ----------------------------------------------------------- */}

      <h2 className="text-lg font-semibold mb-4">Journal Papers</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Author Type */}
        <FieldSelect
          label="Author / Corresponding Author *"
          icon={<FaUserAlt className="text-gray-400 mr-2" />}
          value={journal.authorType}
          onChange={(v) => setJournal({ ...journal, authorType: v })}
          options={["Author", "Corresponding Author"]}
        />

        {/* Publication Title */}
        <FieldInput
          label="Publication Title *"
          icon={<FaBook className="text-gray-400 mr-2" />}
          value={journal.title}
          placeholder="Enter title"
          onChange={(v) => setJournal({ ...journal, title: v })}
        />

        {/* Journal Name */}
        <FieldInput
          label="Journal Name *"
          icon={<FaBook className="text-gray-400 mr-2" />}
          value={journal.journalName}
          placeholder="Enter journal name"
          onChange={(v) => setJournal({ ...journal, journalName: v })}
        />

        {/* Publishing Year */}
        <FieldInput
          label="Publishing Year *"
          type="number"
          icon={<FaBook className="text-gray-400 mr-2" />}
          placeholder="2024"
          value={journal.publishingYear}
          onChange={(v) => setJournal({ ...journal, publishingYear: v })}
        />

        {/* Volume */}
        <FieldInput
          label="Journal Volume *"
          icon={<FaBook className="text-gray-400 mr-2" />}
          placeholder="7(3)"
          value={journal.volume}
          onChange={(v) => setJournal({ ...journal, volume: v })}
        />

        {/* Impact Factor */}
        <FieldInput
          label="Impact Factor *"
          icon={<FaBook className="text-gray-400 mr-2" />}
          placeholder="5.13"
          value={journal.impactFactor}
          onChange={(v) => setJournal({ ...journal, impactFactor: v })}
        />
      </div>

      {/* Example Field */}
      <div className="flex flex-col mt-5">
        <label className="text-gray-700 font-medium ml-1 mb-1">
          Example Reference *
        </label>
        <textarea
          value={journal.example}
          onChange={(e) =>
            setJournal({ ...journal, example: e.target.value })
          }
          placeholder="Paste full reference..."
          rows={4}
          className="border-2 border-gray-200 bg-gray-100 rounded-md p-3
          focus-within:border-purple-500 hover:border-purple-500 outline-none resize-none"
        />
      </div>

      {/* DOI */}
      <FieldInput
        full
        label="DOI / URL *"
        icon={<FaLink className="text-gray-400 mr-2" />}
        placeholder="Enter DOI or URL"
        value={journal.doiUrl}
        onChange={(v) => setJournal({ ...journal, doiUrl: v })}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Journal Type */}
        <FieldSelect
          label="Journal Type *"
          icon={<FaGlobe className="text-gray-400 mr-2" />}
          value={journal.journalType}
          onChange={(v) => setJournal({ ...journal, journalType: v })}
          options={["National", "International"]}
        />

        {/* HEC Recognized */}
        <FieldSelect
          label="HEC Recognized *"
          value={journal.hecRecognized}
          onChange={(v) => setJournal({ ...journal, hecRecognized: v })}
          options={["Yes", "No"]}
        />

        {/* HRJS */}
        <FieldInput
          label="HRJS Category *"
          icon={<MdOutlineCategory className="text-gray-400 mr-2" />}
          placeholder="Enter category"
          value={journal.hrjsCategory}
          onChange={(v) => setJournal({ ...journal, hrjsCategory: v })}
        />
      </div>

      {/* ----------------------------------------------------------- */}
      {/* -------------------- ABSTRACTS SECTION -------------------- */}
      {/* ----------------------------------------------------------- */}

      <h2 className="text-lg font-semibold mt-12 mb-4">
        Abstracts in Conference Proceedings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FieldInput
          label="Title"
          icon={<FaBook className="text-gray-400 mr-2" />}
          placeholder="Enter title"
          value={abstracts.title}
          onChange={(v) => setAbstracts({ ...abstracts, title: v })}
        />

        <FieldInput
          label="Conference Name"
          icon={<FaBook className="text-gray-400 mr-2" />}
          placeholder="Enter conference name"
          value={abstracts.conferenceName}
          onChange={(v) => setAbstracts({ ...abstracts, conferenceName: v })}
        />

        <FieldInput
          label="Date"
          type="date"
          icon={<FaBook className="text-gray-400 mr-2" />}
          value={abstracts.date}
          onChange={(v) => setAbstracts({ ...abstracts, date: v })}
        />

        <FieldInput
          label="Page #"
          icon={<FaBook className="text-gray-400 mr-2" />}
          value={abstracts.page}
          onChange={(v) => setAbstracts({ ...abstracts, page: v })}
        />

        <FieldSelect
          label="National / International"
          value={abstracts.type}
          onChange={(v) => setAbstracts({ ...abstracts, type: v })}
          options={["National", "International"]}
        />

        <FieldSelect
          label="Oral / Poster"
          value={abstracts.mode}
          onChange={(v) => setAbstracts({ ...abstracts, mode: v })}
          options={["Oral", "Poster"]}
        />
      </div>

      {/* ----------------------------------------------------------- */}
      {/* ---------------------- BOOKS SECTION ---------------------- */}
      {/* ----------------------------------------------------------- */}
      <h2 className="text-lg font-semibold mt-12 mb-4">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FieldInput
          label="Title"
          icon={<FaBook className="text-gray-400 mr-2" />}
          value={books.title}
          onChange={(v) => setBooks({ ...books, title: v })}
        />

        <FieldInput
          label="Author / Editor"
          icon={<FaUserAlt className="text-gray-400 mr-2" />}
          value={books.author}
          onChange={(v) => setBooks({ ...books, author: v })}
        />

        <FieldInput
          label="Publishing Year"
          type="number"
          icon={<FaBook className="text-gray-400 mr-2" />}
          value={books.year}
          onChange={(v) => setBooks({ ...books, year: v })}
        />

        <FieldInput
          label="Publishing Agency"
          icon={<FaBook className="text-gray-400 mr-2" />}
          value={books.agency}
          onChange={(v) => setBooks({ ...books, agency: v })}
        />

        <FieldSelect
          label="National / International"
          value={books.type}
          onChange={(v) => setBooks({ ...books, type: v })}
          options={["National", "International"]}
        />
      </div>

      {/* ----------------------------------------------------------- */}
      {/* ------------------- BOOK CHAPTERS SECTION ----------------- */}
      {/* ----------------------------------------------------------- */}
      <h2 className="text-lg font-semibold mt-12 mb-4">Book Chapters</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FieldInput
          label="Chapter Title"
          icon={<FaBook className="text-gray-400 mr-2" />}
          value={chapters.title}
          onChange={(v) => setChapters({ ...chapters, title: v })}
        />

        <FieldInput
          label="Author"
          icon={<FaUserAlt className="text-gray-400 mr-2" />}
          value={chapters.author}
          onChange={(v) => setChapters({ ...chapters, author: v })}
        />

        <FieldInput
          label="Book Name"
          icon={<FaBook className="text-gray-400 mr-2" />}
          value={chapters.bookName}
          onChange={(v) => setChapters({ ...chapters, bookName: v })}
        />

        <FieldInput
          label="Publishing Year"
          type="number"
          icon={<FaBook className="text-gray-400 mr-2" />}
          value={chapters.year}
          onChange={(v) => setChapters({ ...chapters, year: v })}
        />

        <FieldInput
          label="Publishing Agency"
          icon={<FaBook className="text-gray-400 mr-2" />}
          value={chapters.agency}
          onChange={(v) => setChapters({ ...chapters, agency: v })}
        />
      </div>

      {/* Save Buttons */}
      <div className="flex justify-end gap-3 mt-10">
        <button className="px-5 py-2 rounded-lg border border-gray-400 hover:bg-gray-100">
          Cancel
        </button>

        <button
          disabled={!isValidJournal}
          className={`px-5 py-2 rounded-lg bg-purple-600 text-white ${
            !isValidJournal
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-purple-700 hover:shadow-lg hover:scale-105"
          }`}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- */
/* ----------------------- UI COMPONENTS ---------------------- */
/* ----------------------------------------------------------- */

function FieldInput({
  label,
  icon,
  value,
  placeholder = "",
  type = "text",
  onChange,
  full,
}) {
  return (
    <div className={`flex flex-col ${full ? "md:col-span-2" : ""}`}>
      <label className="text-gray-700 font-medium ml-1 mb-1">{label}</label>
      <div
        className="border-2 border-gray-200 bg-gray-100 rounded-md p-2
        focus-within:border-purple-500 hover:border-purple-500 transition duration-200"
      >
        <div className="flex items-center">
          {icon}
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className="bg-transparent w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
}

function FieldSelect({ label, icon, value, onChange, options }) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium ml-1 mb-1">{label}</label>
      <div
        className="border-2 border-gray-200 bg-gray-100 rounded-md p-2
        focus-within:border-purple-500 hover:border-purple-500 transition duration-200"
      >
        <div className="flex items-center">
          {icon}
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="bg-transparent outline-none w-full"
          >
            <option value="">Select</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}