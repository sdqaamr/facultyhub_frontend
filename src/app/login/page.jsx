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

import AuthInput from "@/components/AuthInput";
import AuthButton from "@/components/AuthButton";
import SocialButton from "@/components/SocialButton";
import AuthRightPanel from "@/components/AuthRightPanel";
import TopRightLogo from "@/components/TopRightLogo";

import { authStyles as styles } from "@/styles/authStyles";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.trim() !== "" && password.trim() !== "";

  function toggleShowPassword() {
    setShowPassword((s) => !s);
  }
  
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
                Welcome back! Glad to see you again
              </h2>

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
                  onClick={toggleShowPassword}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </AuthInput>

              {/* Terms */}
              <div className="flex text-xs w-70 justify-between">
                <label className="flex items-center text-xs cursor-pointer">
                  <input type="checkbox" className="mr-1 accent-purple-500" />
                  Remember me
                </label>
                <Link href="/password-forget" className={styles.link}>
                  Forgot Password?
                </Link>
              </div>

              {/* Social Login */}
              <div className="flex justify-center mt-4">
                <div className={styles.intermediateLine} />
                <span className={styles.intermediateText}>or login with</span>
                <div className={styles.intermediateLine} />
              </div>
              <div className={styles.socialButtonsContainer}>
                <SocialButton icon={<FaGoogle />} />
                <SocialButton icon={<FaFacebookF />} />
                <SocialButton icon={<FaTwitter />} />
                <SocialButton icon={<FaLinkedinIn />} />
              </div>

              {/* Register Button */}
              <Link href="/dashboard">
                <AuthButton disabled={!isValid}>Login</AuthButton>
              </Link>

              {/* Login Link */}
              <p className="text-sm text-gray-600">
                Don't have an account?
                <Link href="/register" className={styles.link}>
                  {" "}
                  Register
                </Link>
              </p>
            </div>
          </div>

          {/* Right Panel */}
          <AuthRightPanel
            title="Hello, Friend!"
            description="Enter your personal details and start journey with us."
            buttonText="Register"
            buttonLink="/register"
          />
        </div>
      </main>
    </div>
  );
}
