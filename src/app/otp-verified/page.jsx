import Head from "next/head";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function OtpVerified() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>FacultyHub - OTP Verified</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-xl shadow-2xl flex w-4/5 max-w-4xl">
          {/* Success Message */}
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-purple-500">FacultyHub</span>
            </div>
            <div className="py-18">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaCheckCircle className="text-green-500 text-4xl" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-2">OTP Verified!</h2>
              <p className="text-gray-600 mb-5 max-w-100 pl-20">
                Your email has been verified successfully. You can now access
                your account.
              </p>

              <div className="flex flex-col items-center">
                <Link href="/login">
                  <button className="border-2 border-purple-500 bg-purple-500 rounded-full px-12 py-2 inline-block font-semibold text-white transform transition duration-200 my-5 focus:outline-none focus:ring-2 hover:shadow-lg hover:scale-105 focus:ring-gray-100">
                    Continue to Login
                  </button>
                </Link>

                <div className="text-center">
                  <p className="text-gray-600 text-sm">
                    Need help?{" "}
                    <button className="text-purple-500 hover:text-purple-700 transition duration-300">
                      Contact Support
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Section */}
          <div className="w-2/5 bg-purple-500 text-white rounded-tr-xl rounded-br-xl py-40 px-12">
            <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              You're now part of our FacultyHub community. Let's get started
              with your journey!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
