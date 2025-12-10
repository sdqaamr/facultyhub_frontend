"use client";

import { IoPersonOutline  } from "react-icons/io5"
import { LogOutIcon, Settings, UserCircle } from "lucide-react"
import { useState } from "react";

import PersonalInfo from "@/components/dashboard/PersonalInfo";
import Education from "@/components/dashboard/Education";
import Conferences from "@/components/dashboard/Conferences";
import Workshops from "@/components/dashboard/Workshops";
import ResearchProjects from "@/components/dashboard/ResearchProjects";
import Publications from "@/components/dashboard/Publications";
import ResearchDomain from "@/components/dashboard/ResearchDomain";
import Collaborations from "@/components/dashboard/Collaborations";
import Patents from "@/components/dashboard/Patents";
import EmploymentRecord from "@/components/dashboard/EmploymentRecord";
import Awards from "@/components/dashboard/Awards";
import TopRightLogo from "@/components/TopRightLogo";

export default function FacultyDashboard() {
  const [activeTab, setActiveTab] = useState("Personal");

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* LEFT SIDEBAR */}
      <div className="w-70 bg-white shadow-lg px-6 pt-6 pb-1 border-r border-gray-300 flex flex-col h-screen fixed left-0 top-0 justify-between">
        {/* Top Navigation Tabs */}
        <div>
          <TopRightLogo />

          <ul className="space-y-1 mt-5">
            {[
              "Personal",
              "Education",
              "Conferences",
              "Workshops",
              "Research Projects",
              "Publications",
              "Research Domain",
              "Collaborations & Editorships",
              "Patents",
              "Employment Record",
              "Awards",
            ].map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition 
              ${
                activeTab === tab
                  ? "bg-purple-100 text-purple-600"
                  : "hover:bg-gray-100"
              }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section: Account, Settings, Logout */}
        <div className="border-t border-gray-300 pt-1.5 mt-6">
          <ul className="space-x-5 flex justify-center items-center flex-row">
            <li>
              <button
                onClick={() => setActiveTab("account")}
                className={`w-full h-full px-2.5 py-2.5 rounded-lg font-medium transition 
            ${
              activeTab === "account"
                ? "bg-purple-100 text-purple-600"
                : "hover:bg-gray-100"
            }`}
              >
                <UserCircle className="w-7 h-7" />
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full h-full px-2.5 py-2.5 rounded-lg font-medium transition 
            ${
              activeTab === "settings"
                ? "bg-purple-100 text-purple-600"
                : "hover:bg-gray-100"
            }`}
              >
                <Settings className="w-7 h-7" />
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("logout")}
                className="w-full h-full px-2.5 py-2.5 rounded-lg font-medium text-red-500 hover:bg-red-100 transition"
              >
                <LogOutIcon className="w-7 h-7" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT CONTENT AREA */}
     {/* <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} /> */}

      {/* Right Panel */}
      <div className="p-8 ml-70 flex-1">

        {activeTab === "Personal" && <PersonalInfo />}
        {activeTab === "Education" && <Education />}
        {activeTab === "Conferences" && <Conferences />}
        {activeTab === "Workshops" && <Workshops />}
        {activeTab === "Research Projects" && <ResearchProjects />}
        {activeTab === "Publications" && <Publications />}
        {activeTab === "Research Domain" && <ResearchDomain />}
        {activeTab === "Collaborations & Editorships" && <Collaborations />}
        {activeTab === "Patents" && <Patents />}
        {activeTab === "Employment Record" && <EmploymentRecord />}
        {activeTab === "Awards" && <Awards />}
        {/* {activeTab === "account" && <Account />} */}
        {/* {activeTab === "settings" && <Settings />} */}
        {/* {activeTab === "logout" && <Logout />} */}
      </div>
    </div>
  );
}
