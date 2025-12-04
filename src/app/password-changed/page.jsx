import Head from "next/head";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function PasswordChanged() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>FacultyHub - Password Changed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-xl shadow-xl flex w-4/5 max-w-4xl">
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
              <h2 className="text-3xl font-bold mb-2">Password Changed!</h2>
              <p className="text-gray-800 mb-5 max-w-100 pl-23">
                Congratulations! Your password has been changed successfully.
                You can now sign in with your new password.
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
          <div className="w-2/5 bg-purple-500 text-white rounded-tr-xl rounded-br-xl py-42 px-12">
            <h2 className="text-3xl font-bold mb-2">Secure Access!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Your account security is our priority. Keep your password safe and
              secure.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
