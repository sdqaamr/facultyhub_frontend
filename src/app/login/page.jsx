"use client";

import { useState } from "react";
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

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.trim() !== "" && password.trim() !== "";

  function toggleShowPassword() {
    setShowPassword((s) => !s);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>FacultyHub - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-xl shadow-2xl flex w-4/5 max-w-4xl">
          {/* sign in section */}
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-purple-500">FacultyHub </span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2 max-w-100 pl-25 text-left pb-5">
                Welcome Back! Glad to see you again!
              </h2>

              <div className="flex flex-col items-center">
                <div className="border-2 border-gray-200 bg-gray-200 rounded-md p-2.5 w-72 mb-3 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
                  <div className="flex items-center">
                    <FaRegEnvelope className="text-gray-500 mr-2.5" />
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

                <div className="border-2 border-gray-200 bg-gray-200 rounded-md p-2.5 w-72 mb-3 focus-within:border-purple-500 hover:border-purple-500 transition-colors duration-200">
                  <div className="flex items-center">
                    <FaLock className="text-gray-400 mr-2.5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
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

                <div className="flex w-70 mb-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" className="mr-2 accent-purple-500" />
                    Remember me
                  </label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto text-xs text-purple-500 hover:text-purple-700 transition duration-300 cursor-pointer"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="flex justify-center">
                  <div className="w-20 h-0 border-1 text-gray-300 rounded-full mt-2.5"></div>
                  <p className="text-sm text-gray-500 mx-2">or login with</p>
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
                  Login
                </button>

                <div className="text-center">
                  <p className="text-gray-700 text-sm">
                    Don't have an account?{" "}
                    <Link
                      href="/register"
                      className="text-purple-500 hover:text-purple-700 transition duration-300"
                    >
                      Register Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* sign up section */}
          <div className="w-2/5 bg-purple-500 text-white rounded-tr-xl rounded-br-xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Enter your personal details and start journey with us
            </p>
            <Link href="/register">
              <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-500 transition duration-300">
                Register
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
