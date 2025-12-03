export const authStyles = {
  container: "flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100",

  mainBox: "bg-white rounded-xl shadow-xl flex w-4/5 max-w-4xl",

  leftPanel: "w-3/5 p-5",
  rightPanel: "w-2/5 bg-purple-500 text-white rounded-tr-xl rounded-br-xl py-40 px-12",

  contentContainer: "flex flex-col py-10 items-center self-center",

  titlePrimary: "text-3xl font-bold mb-2 w-72 text-left  self-center pb-5",
  brand: "text-left font-bold text-purple-500",

  inputBox:
    "border-2 border-gray-200 bg-gray-200 rounded-md p-2.5 w-72 mb-3 transition-colors duration-200 focus-within:border-purple-500 hover:border-purple-500",

  input:
    "w-full outline-none text-sm bg-transparent text-gray-800 placeholder-gray-500",

  icon: "text-gray-500 mr-2.5",
  iconLock: "text-gray-400 mr-2.5",

  termsContainer: "flex text-xs w-70",

  intermediateLine: "w-20 h-0 border-1 text-gray-300 rounded-full mt-2.5",
  intermediateText: "text-sm text-gray-500 mx-2",

  socialButtonsContainer: "flex justify-center my-3",
  socialButton:
    "border-2 border-gray-300 rounded-full p-3 mx-1 bg-white transform transition duration-200 hover:shadow-xl hover:scale-105 hover:bg-purple-500 hover:text-white hover:border-purple-500  focus:outline-none focus:ring-2 focus:ring-purple-300 transform duration-400 hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)]",

  primaryButton:
    "border-2 border-purple-500 bg-purple-500 rounded-full px-12 py-2 inline-block font-semibold text-white transform transition duration-200 my-5 focus:outline-none focus:ring-2 focus:ring-purple-300",

  primaryButtonDisabled:
    "opacity-50 cursor-not-allowed hover:shadow-none hover:scale-100",

  link: "text-purple-500 hover:text-purple-700 transition duration-300",
};