"use client";

import Head from "next/head";
import { FaRegEnvelope, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function OTP() {
  const [code, setCode] = useState(["", "", "", ""]);
  const isValid = code.every((digit) => digit.trim() !== "");

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    // Handle verification logic here
    // After successful verification, redirect to email-verified
    window.location.href = "/email-verified";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>FacultyHub - Verify OTP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-xl shadow-xl flex w-4/5 max-w-4xl">
          {/* Verify Email Form */}
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
            <div className="py-15">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-200 p-3 rounded-full">
                  <FaRegEnvelope className="text-purple-500 text-2xl" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-2">OTP Verify!</h2>
              <p className="text-gray-600 mb-10">
                We've sent a 4-digit code to your email address
              </p>

              <form
                onSubmit={handleVerify}
                className="flex flex-col items-center"
              >
                {/* Code Input */}
                <div className="flex justify-center space-x-2 mb-5">
                  {code.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                      className="w-12 h-12 border-2 border-gray-200 bg-gray-200 rounded-lg text-center text-lg font-semibold hover:border-purple-500 focus:border-purple-500 focus:outline-none transition-colors duration-200"
                      required
                    />
                  ))}
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
                    Verify
                  </button>
                </Link>

                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-2">
                    Didn't receive the code?{" "}
                    <button
                      type="button"
                      className="text-purple-500 hover:text-purple-700 transition duration-300"
                    >
                      Resend
                    </button>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Wrong email?{" "}
                    <Link
                      href="/register"
                      className="text-purple-500 hover:text-purple-700 transition duration-300"
                    >
                      Go back
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Side Section */}
          <div className="w-2/5 bg-purple-500 text-white rounded-tr-xl rounded-br-xl py-42 px-12">
            <h2 className="text-3xl font-bold mb-2">Almost There!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Verify your email to complete your registration and start using
              FacultyHub community
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
