"use client";

import { useState } from "react";

import PersonalInfo from "@/components/PersonalInfo";
// import Education from "@/components/dashboard/Education";
// import Research from "@/components/dashboard/Research";
// import Publications from "@/components/dashboard/Publications";
// import Projects from "@/components/dashboard/Projects";
// import Awards from "@/components/dashboard/Awards";
// import Account from "@/components/dashboard/Account";
// import Settings from "@/components/dashboard/Settings";
import TopRightLogo from "@/components/TopRightLogo";

export default function FacultyDashboard() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* LEFT SIDEBAR */}
      <div className="w-64 bg-white shadow-lg p-6 border-r border-gray-300 flex flex-col h-screen fixed left-0 top-0 justify-between">
        {/* Top Navigation Tabs */}
        <div>
          <TopRightLogo />

          <ul className="space-y-1.5 mt-8">
            {[
              "personal",
              "education",
              "research",
              "publications",
              "projects",
              "awards",
            ].map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-1.5 rounded-lg font-medium transition 
              ${
                activeTab === tab
                  ? "bg-purple-100 text-purple-600"
                  : "hover:bg-gray-100"
              }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section: Account, Settings, Logout */}
        <div className="border-t border-gray-300 pt-4 mt-6">
          <ul className="space-y-1.5">
            <li>
              <button
                onClick={() => setActiveTab("account")}
                className={`w-full text-left px-4 py-1.5 rounded-lg font-medium transition 
            ${
              activeTab === "account"
                ? "bg-purple-100 text-purple-600"
                : "hover:bg-gray-100"
            }`}
              >
                Account
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full text-left px-4 py-1.5 rounded-lg font-medium transition 
            ${
              activeTab === "settings"
                ? "bg-purple-100 text-purple-600"
                : "hover:bg-gray-100"
            }`}
              >
                Settings
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("logout")}
                className="w-full text-left px-4 py-1.5 rounded-lg font-medium text-red-500 hover:bg-red-100 transition"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT CONTENT AREA */}
     {/* <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} /> */}

      {/* Right Panel */}
      <div className="p-8 ml-64 flex-1">

        {activeTab === "personal" && <PersonalInfo />}
        {/* {activeTab === "education" && <Education />}
        {activeTab === "research" && <Research />}
        {activeTab === "publications" && <Publications />}
        {activeTab === "projects" && <Projects />}
        {activeTab === "awards" && <Awards />}

        {activeTab === "account" && <Account />}
        {activeTab === "settings" && <Settings />} */}
      </div>
    </div>
  );
}
