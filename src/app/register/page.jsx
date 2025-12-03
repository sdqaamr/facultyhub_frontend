"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRegEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import AuthInput from "@/components/AuthInput";
import AuthButton from "@/components/AuthButton";
import SocialButton from "@/components/SocialButton";
import AuthRightPanel from "@/components/AuthRightPanel";
import TopRightLogo from "@/components/TopRightLogo";

import { authStyles as styles } from "@/styles/authStyles";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const isValid =
    fullName.trim() &&
    email.trim() &&
    password.trim() &&
    password === confirmPassword &&
    acceptTerms;

  return (
    <div className={styles.container}>
      <Head>
        <title>FacultyHub - Register</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className={styles.mainBox}>
          {/* Left Panel */}
          <div className={styles.leftPanel}>
            <TopRightLogo />
            <div className={styles.contentContainer}>
              <h2 className={styles.titlePrimary}>
                Hello! Register to get started
              </h2>

              {/* Full Name */}
              <AuthInput
                icon={<FaRegEnvelope />}
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              {/* Email */}
              <AuthInput
                icon={<FaRegEnvelope />}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Password */}
              <AuthInput
                icon={<FaLock />}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              >
                <button
                  type="button"
                  className="ml-2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </AuthInput>

              {/* Confirm Password */}
              <AuthInput
                icon={<FaLock />}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              >
                <button
                  type="button"
                  className="ml-2 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </AuthInput>

              {/* Terms */}
              <div className={styles.termsContainer}>
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mr-2 accent-purple-500"
                />
                <span>I agree to the</span>
                <Link href="/terms-and-conditions" className={styles.link}>
                  &nbsp;Terms & Conditions
                </Link>
              </div>

              {/* Social Login */}
              <div className="flex justify-center mt-4">
                <div className={styles.intermediateLine} />
                <span className={styles.intermediateText}>
                  or register with
                </span>
                <div className={styles.intermediateLine} />
              </div>
              <div className={styles.socialButtonsContainer}>
                <SocialButton icon={<FaGoogle />} />
                <SocialButton icon={<FaFacebookF />} />
                <SocialButton icon={<FaTwitter />} />
                <SocialButton icon={<FaLinkedinIn />} />
              </div>

              {/* Register Button */}
              <Link href="/register-success">
                <AuthButton disabled={!isValid}>Register</AuthButton>
              </Link>

              {/* Login Link */}
              <p className="text-sm text-gray-600 mt-2">
                Already have an account?
                <Link href="/login" className={styles.link}>
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>

          {/* Right Panel */}
          <AuthRightPanel
            title="Welcome Back!"
            description="Already have an account? Login to continue your journey."
            buttonText="Login"
            buttonLink="/login"
          />
        </div>
      </main>
    </div>
  );
}
