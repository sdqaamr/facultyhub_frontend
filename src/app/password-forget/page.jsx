"use client";

import Head from "next/head";
import { useState } from "react";
import { FaRegEnvelope, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function PasswordForget() {
    const [email, setEmail] = useState("");
    const isValid = email.trim() !== "";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>FacultyHub - Forgot Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-xl shadow-2xl flex w-4/5 max-w-4xl">
          {/* Forgot Password Form */}
          <div className="w-3/5 p-5">
            <div className="font-bold flex">
              <Link
                href="/login"
                className="flex items-center text-purple-500 hover:text-purple-700 transition duration-300"
              >
                <FaArrowLeft className="mr-2" />
              </Link>
              <span className="text-purple-500">FacultyHub</span>
            </div>
            <div className="py-18">
              <h2 className="text-3xl font-bold mb-2">
                Forgot Password?
              </h2>
              <p className="text-gray-900 mb-10 max-w-120 pl-10">
                Don't worry! happens. Enter your email address and we'll send you code to reset your
                password.
              </p>

              <div className="flex flex-col items-center">
                {/* Email Input */}
                <div className="border-2 border-gray-200 bg-gray-200 rounded-md p-2.5 w-72 mb-3 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
                  <div className="flex items-center">
                    <FaRegEnvelope className="text-gray-400 mr-2.5" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength="50"
                      required
                      className="w-full outline-none text-sm bg-transparent text-gray-800 placeholder-gray-500"
                    />
                  </div>
                </div>

                <Link href="/password-reset">
                  <button
                  disabled={!isValid}
                  aria-disabled={!isValid}
                  className={`border-2 border-purple-500 bg-purple-500 rounded-full px-12 py-2 inline-block font-semibold text-white transform transition duration-200 my-5 focus:outline-none focus:ring-2 focus:ring-purple-300 ${
                    !isValid
                      ? "opacity-50 cursor-not-allowed hover:shadow-none hover:scale-100"
                      : "hover:shadow-lg hover:scale-105"
                  }`}
                >
                  Submit
                </button>
                </Link>

                <div className="text-center">
                  <p className="text-gray-600 text-sm">
                    Remember your password?{" "}
                    <Link
                      href="/login"
                      className="text-purple-500 hover:text-purple-700 transition duration-300"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Section */}
          <div className="w-2/5 bg-purple-500 text-white rounded-tr-xl rounded-br-xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Remember your password? Login to access your account
            </p>
            <Link href="/login">
              <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-500 transition duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
