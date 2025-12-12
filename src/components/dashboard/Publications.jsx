"use client";

import { useState } from "react";
import { FaUserAlt, FaBook, FaGlobe, FaLink } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { Globe } from "lucide-react";
import { FaMicrophoneAlt } from "react-icons/fa";

export default function ResearchPublications() {
  const [journal, setJournal] = useState({
    authorType: "",
    title: "",
    journalName: "",
    publishingYear: "",
    volume: "",
    impactFactor: "",
    doiUrl: "",
    journalType: "",
    hecRecognized: "",
    hrjsCategory: "",
  });

  const [abstracts, setAbstracts] = useState({
    title: "",
    conferenceName: "",
    date: "",
    page: "",
    type: "",
    mode: "",
  });

  const [books, setBooks] = useState({
    title: "",
    author: "",
    date: "",
    agency: "",
    type: "",
  });

  const [chapters, setChapters] = useState({
    title: "",
    author: "",
    bookName: "",
    date: "",
    agency: "",
  });

  const isValidJournal =
    journal.authorType &&
    journal.title &&
    journal.journalName &&
    journal.publishingYear &&
    journal.volume &&
    journal.impactFactor &&
    journal.doiUrl &&
    journal.journalType &&
    journal.hecRecognized &&
    journal.hrjsCategory;

  return (
    <div className="bg-white shadow-md rounded-xl p-8 space-y-6">
      <h1 className="text-2xl font-semibold">Research Publications</h1>
      <p className="text-gray-600">
        Enter your research publication and related academic contributions.
      </p>

      {/* JOURNAL PAPERS */}
      <h2 className="text-lg font-semibold">Journal Papers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Author Type */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">
            Author / Corresponding Author
            <span className="text-red-500"> *</span>
          </label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <FaUserAlt className="text-gray-400 mr-2" />
            <select
              value={journal.authorType}
              onChange={(e) =>
                setJournal({ ...journal, authorType: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            >
              <option value="">Select</option>
              <option value="Author">Author</option>
              <option value="Corresponding Author">Corresponding Author</option>
            </select>
          </div>
        </div>

        {/* Publication Title */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">
            Publication Title<span className="text-red-500"> *</span>
          </label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter title"
              value={journal.title}
              onChange={(e) =>
                setJournal({ ...journal, title: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        {/* Journal Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">
            Journal Name<span className="text-red-500"> *</span>
          </label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter journal name"
              value={journal.journalName}
              onChange={(e) =>
                setJournal({ ...journal, journalName: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        {/* Publishing Year */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">
            Publishing Year<span className="text-red-500"> *</span>
          </label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="number"
              placeholder="2024"
              value={journal.publishingYear}
              onChange={(e) =>
                setJournal({ ...journal, publishingYear: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        {/* Volume */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">
            Journal Volume<span className="text-red-500"> *</span>
          </label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="7(3)"
              value={journal.volume}
              onChange={(e) =>
                setJournal({ ...journal, volume: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        {/* Impact Factor */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">
            Impact Factor<span className="text-red-500"> *</span>
          </label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="5.13"
              value={journal.impactFactor}
              onChange={(e) =>
                setJournal({ ...journal, impactFactor: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>
      </div>

      {/* DOI */}
      <div className="flex flex-col">
        <label className="text-gray-700 mb-1">
          DOI / URL<span className="text-red-500"> *</span>
        </label>
        <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
          <FaLink className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Enter DOI or URL"
            value={journal.doiUrl}
            onChange={(e) => setJournal({ ...journal, doiUrl: e.target.value })}
            className="bg-transparent w-full outline-none"
          />
        </div>
      </div>

      {/* Journal Type, HEC, HRJS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">
            Journal Type<span className="text-red-500"> *</span>
          </label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <FaGlobe className="text-gray-400 mr-2" />
            <select
              value={journal.journalType}
              onChange={(e) =>
                setJournal({ ...journal, journalType: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            >
              <option value="">Select</option>
              <option value="National">National</option>
              <option value="International">International</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">
            HEC Recognized<span className="text-red-500"> *</span>
          </label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <FaGlobe className="text-gray-400 mr-2" />
            <select
              value={journal.hecRecognized}
              onChange={(e) =>
                setJournal({ ...journal, hecRecognized: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">
            HRJS Category<span className="text-red-500"> *</span>
          </label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2 hover:border-purple-500 focus-within:border-purple-500 transition">
            <MdOutlineCategory className="text-gray-400 mr-2" />
            <select
              value={journal.hrjsCategory}
              onChange={(e) =>
                setJournal({ ...journal, hrjsCategory: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            >
              <option value="">Select</option>
              <option value="W">W</option>
              <option value="X">X</option>
              <option value="Y">Y</option>
              <option value="Z">Z</option>
              <option value="None">None</option>
            </select>
          </div>
        </div>
      </div>

      {/* ABSTRACTS */}
      <h2 className="text-lg font-semibold mt-6">
        Abstracts in Conference Proceedings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Title</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter title"
              value={abstracts.title}
              onChange={(e) =>
                setAbstracts({ ...abstracts, title: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Conference Name</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter conference name"
              value={abstracts.conferenceName}
              onChange={(e) =>
                setAbstracts({ ...abstracts, conferenceName: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Date</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="date"
              value={abstracts.date}
              onChange={(e) =>
                setAbstracts({ ...abstracts, date: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Page #</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="e.g., 45-47"
              value={abstracts.page}
              onChange={(e) =>
                setAbstracts({ ...abstracts, page: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">National / International</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaGlobe className="text-gray-400 mr-2" />
            <select
              value={abstracts.type}
              onChange={(e) =>
                setAbstracts({ ...abstracts, type: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            >
              <option value="">Select</option>
              <option value="National">National</option>
              <option value="International">International</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Oral / Poster</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaMicrophoneAlt className="text-gray-400 mr-2" />
            <select
              value={abstracts.mode}
              onChange={(e) =>
                setAbstracts({ ...abstracts, mode: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            >
              <option value="">Select</option>
              <option value="Oral">Oral</option>
              <option value="Poster">Poster</option>
            </select>
          </div>
        </div>
      </div>

      {/* BOOKS */}
      <h2 className="text-lg font-semibold mt-6">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Title</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter book title"
              value={books.title}
              onChange={(e) => setBooks({ ...books, title: e.target.value })}
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Author / Editor</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaUserAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter author or editor name"
              value={books.author}
              onChange={(e) => setBooks({ ...books, author: e.target.value })}
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Publish Date</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="date"
              value={books.date}
              onChange={(e) => setBooks({ ...books, date: e.target.value })}
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Publishing Agency</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter agency name"
              value={books.agency}
              onChange={(e) => setBooks({ ...books, agency: e.target.value })}
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">National / International</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaGlobe className="text-gray-400 mr-2" />
            <select
              value={books.type}
              onChange={(e) => setBooks({ ...books, type: e.target.value })}
              className="bg-transparent w-full outline-none"
            >
              <option value="">Select</option>
              <option value="National">National</option>
              <option value="International">International</option>
            </select>
          </div>
        </div>
      </div>

      {/* BOOK CHAPTERS */}
      <h2 className="text-lg font-semibold mt-6">Book Chapters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Chapter Title</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter chapter title"
              value={chapters.title}
              onChange={(e) =>
                setChapters({ ...chapters, title: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Author</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaUserAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter author name"
              value={chapters.author}
              onChange={(e) =>
                setChapters({ ...chapters, author: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Book Name</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter book name"
              value={chapters.bookName}
              onChange={(e) =>
                setChapters({ ...chapters, bookName: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Publish Date</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="date"
              value={chapters.date}
              onChange={(e) =>
                setChapters({ ...chapters, date: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Publishing Agency</label>
          <div className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-md p-2">
            <FaBook className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter agency name"
              value={chapters.agency}
              onChange={(e) =>
                setChapters({ ...chapters, agency: e.target.value })
              }
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>
      </div>

      {/* Save Buttons */}
      <div className="flex justify-end gap-3 mt-6">
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
