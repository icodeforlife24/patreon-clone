import Image from "next/image";
export default function Home() {
  return (
    <>
      <h1 className="text-8xl flex font-bold text-center mt-10 text-amber-50 justify-center items-center">Buy Me A Coffee<img src="/assets/coffee.gif" alt="Coffee gif" className="w-30 h-auto" />       </h1>
      <h2 className="text-xl text-center mt-5 text-amber-50">Support my work by buying me a coffee!</h2>
      <div className="flex justify-center w-300 mx-auto mt-5">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Get Started
          </span>
        </button>
        <button className=" relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Know More
          </span>
        </button>
      </div>
    </>
  );
}


