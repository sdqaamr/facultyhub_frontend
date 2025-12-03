"use client";

import Head from "next/head";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaRegEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const isValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    password === confirmPassword &&
    acceptTerms;

  function toggleShowPassword() {
    setShowPassword((s) => !s);
  }
  function toggleShowConfirmPassword() {
    setShowConfirmPassword((s) => !s);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <Head>
        <title>FacultyHub - Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-xl shadow-xl flex w-4/5 max-w-4xl">
          {/* register section */}
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-purple-500">FacultyHub</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2 max-w-100 pl-25 text-left pb-5">
                Hello! Register to get started
              </h2>

              <div className="flex flex-col items-center">
                {/* Fullname */}
                <div className="border-2 border-gray-200 bg-gray-200 rounded-md p-2.5 w-72 mb-3 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
                  <div className="flex items-center">
                    <FaRegEnvelope className="text-gray-500 mr-2.5" />
                    <input
                      type="email"
                      placeholder="Full Name"
                      name="email"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      maxLength="50"
                      required
                      className="w-full outline-none text-sm bg-transparent text-gray-800 placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="border-2 border-gray-200 bg-gray-200 rounded-md p-2.5 w-72 mb-3 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
                  <div className="flex items-center">
                    <FaRegEnvelope className="text-gray-500 mr-2.5" />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength="50"
                      required
                      className="w-full outline-none text-sm bg-transparent text-gray-800 placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="border-2 border-gray-200 bg-gray-200 rounded-md p-2.5 w-72 mb-3 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
                  <div className="flex items-center">
                    <FaLock className="text-gray-400 mr-2.5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pr-8 outline-none text-sm bg-transparent text-gray-800 placeholder-gray-500"
                    />
                    <button
                      type="button"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={toggleShowPassword}
                      className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      {showPassword ? (
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
                      placeholder="Confirm Password"
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

                {/* Terms and Conditions */}
                <div className="flex w-70 mb-5">
                  <label className="flex items-center text-xs">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mr-2 accent-purple-500"
                    />
                    I agree to the{" "}
                  </label>
                  <Link href="/terms-and-conditions">
                    <p className="px-1 text-xs text-purple-500 hover:text-purple-700 transition duration-300 cursor-pointer">
                      {" "}
                      Terms & Conditions
                    </p>
                  </Link>
                </div>

                <div className="flex justify-center">
                  <div className="w-20 h-0 border-1 text-gray-300 rounded-full mt-2.5"></div>
                  <p className="text-sm text-gray-500 mx-2">or register with</p>
                  <div className="w-20 h-0 border-1 text-gray-300 rounded-full mt-2.5"></div>
                </div>

                <div className="flex justify-center my-3">
                  <button className="border-2 border-gray-300 rounded-full p-3 mx-1 bg-white transform transition duration-200 hover:shadow-xl hover:scale-105 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <FaGoogle className="text-md" />
                  </button>
                  <button className="border-2 border-gray-300 rounded-full p-3 mx-1 bg-white transform transition duration-200 hover:shadow-xl hover:scale-105 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <FaFacebookF className="text-md" />
                  </button>
                  <button className="border-2 border-gray-300 rounded-full p-3 mx-1 bg-white transform transition duration-200 hover:shadow-xl hover:scale-105 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <FaTwitter className="text-md" />
                  </button>
                  <button className="border-2 border-gray-300 rounded-full p-3 mx-1 bg-white transform transition duration-200 hover:shadow-xl hover:scale-105 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <FaLinkedinIn className="text-md" />
                  </button>
                </div>

                <button
                  disabled={!isValid}
                  aria-disabled={!isValid}
                  className={`border-2 border-purple-500 bg-purple-500 rounded-full px-12 py-2 inline-block font-semibold text-white transform transition duration-200 my-5 focus:outline-none focus:ring-2 focus:ring-purple-300 ${
                    !isValid
                      ? "opacity-50 cursor-not-allowed hover:shadow-none hover:scale-100"
                      : "hover:shadow-lg hover:scale-105"
                  }`}
                >
                  Register
                </button>

                <div className="text-center">
                  <p className="text-gray-600 text-sm">
                    Already have an account?{" "}
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

          {/* login section */}
          <div className="w-2/5 bg-purple-500 text-white rounded-tr-xl rounded-br-xl py-42 px-12">
            <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Already have an account? Login to continue your journey with us
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
