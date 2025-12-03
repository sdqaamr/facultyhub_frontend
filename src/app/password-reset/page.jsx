"use client";

import { useState } from "react";

import Head from "next/head";
import { FaLock, FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

export default function PasswordReset() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isValid = newPassword.trim() !== "" && confirmPassword.trim() !== "" && newPassword === confirmPassword;
  function toggleShowNewPassword() {
    setShowNewPassword((s) => !s);
  }
  function toggleShowConfirmPassword() {
    setShowConfirmPassword((s) => !s);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>FacultyHub - Reset Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-xl shadow-2xl flex w-4/5 max-w-4xl">
          {/* Reset Password Form */}
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
              <h2 className="text-3xl font-bold mb-2">Reset Password!</h2>
              <p className="text-gray-600 mb-10">
                Please enter your new password below.
              </p>

              <div className="flex flex-col items-center">
                {/* New Password */}
                <div className="border-2 border-gray-200 bg-gray-200 rounded-md p-2.5 w-72 mb-3 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
                  <div className="flex items-center">
                    <FaLock className="text-gray-400 mr-2.5" />
                    <input
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      className="w-full pr-8 outline-none text-sm bg-transparent text-gray-800 placeholder-gray-500"
                    />
                    <button
                      type="button"
                      aria-label={
                        showNewPassword ? "Hide password" : "Show password"
                      }
                      onClick={toggleShowNewPassword}
                      className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      {showNewPassword ? (
                        <FaEye className="text-lg" />
                      ) : (
                        <FaEyeSlash className="text-lg" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="border-2 border-gray-200 bg-gray-200 rounded-md p-2.5 w-72 mb-3 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
                  <div className="flex items-center">
                    <FaLock className="text-gray-400 mr-2.5" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full pr-8 outline-none text-sm bg-transparent text-gray-800 placeholder-gray-500"
                    />
                    <button
                      type="button"
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                      onClick={toggleShowConfirmPassword}
                      className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      {showConfirmPassword ? (
                        <FaEye className="text-lg" />
                      ) : (
                        <FaEyeSlash className="text-lg" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="py-2"></div>

                <Link href="/password-changed">
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
          <div className="w-2/5 bg-purple-500 text-white rounded-tr-xl rounded-br-xl py-40 px-12">
            <h2 className="text-3xl font-bold mb-2">Security First!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Choose a strong password to keep your account secure
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
