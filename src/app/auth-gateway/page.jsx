import Head from "next/head";
import { PiHandWavingBold } from "react-icons/pi";
import Link from "next/link";

export default function AuthGateway() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>FacultyHub - Continue</title>
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
                <div className="bg-yellow-100 p-3 rounded-full">
                  <PiHandWavingBold className="text-yellow-400 text-4xl scale-x-[-1]" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-2">
                Welcome to FacultyHub!
              </h2>
              <p className="text-gray-600 mb-5 max-w-110 pl-15">
                You can login to access your account, or continue as a guest to
                browse the home page.
              </p>

              <div className="flex flex-col items-center">
                <Link href="/login">
                  <button className="border-2 border-purple-500 text-white rounded-full w-40 py-2 inline-block font-semibold my-1 bg-purple-500 hover:bg-white hover:text-purple-600 transition duration-300 focus:outline-none focus:ring-2 hover:shadow-lg hover:scale-105 focus:ring-gray-100">
                    Login
                  </button>
                </Link>

                <Link href="/register">
                  <button className="border-2 border-purple-500 text-purple-600 rounded-full w-41 py-2 inline-block font-semibold my-1 hover:bg-purple-500 hover:text-white transition duration-300 focus:outline-none focus:ring-2 hover:shadow-lg hover:scale-105 focus:ring-gray-100">
                    Register
                  </button>
                </Link>

                <div className="text-center">
                  <button className="text-purple-500 hover:text-purple-700 transition duration-300 text-sm mt-2 block">
                    Continue as a Guest
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Section */}
          <div className="w-2/5 bg-purple-500 text-white rounded-tr-xl rounded-br-xl py-40 px-12">
            <h2 className="text-3xl font-bold mb-2">Explore</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Login or register to unlock all features and join our FacultyHub
              community.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
