import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="h-screen w-screen backdrop-blur-md flex justify-center items-center overflow-auto lg:overflow-hidden"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: window.innerWidth >= 1024 ? "fixed" : "scroll", // Fixed on large screens only
      }}
    >
      <div className="flex flex-col items-center space-y-8 lg:space-y-12 px-4 py-8 lg:py-0">
        <h1 className="text-2xl lg:text-3xl font-semibold bg-black text-white w-full text-center py-4 bg-opacity-75 rounded-2xl mt-96 md:mt-11 p-12 md:p-5">
          ABC Institute of Technology
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Admin Card */}
          <div className="h-72 w-64 lg:h-96 lg:w-80 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#4b3a8f] bg-opacity-60 rounded-xl transition-transform duration-300 hover:scale-105">
            <h1 className="text-3xl lg:text-4xl font-extrabold">Admin</h1>
            <Link
              type="button"
              to="/login/adminlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-28 lg:w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>
          {/* Faculty Card */}
          <div className="h-72 w-64 lg:h-96 lg:w-80 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#3a8f6a] bg-opacity-60 rounded-xl transition-transform duration-300 hover:scale-105">
            <h1 className="text-3xl lg:text-4xl font-extrabold">Faculty</h1>
            <Link
              type="button"
              to="/login/facultylogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-28 lg:w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>
          {/* Student Card */}
          <div className="h-72 w-64 lg:h-96 lg:w-80 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#8f4b3a] bg-opacity-60 rounded-xl transition-transform duration-300 hover:scale-105">
            <h1 className="text-3xl lg:text-4xl font-extrabold">Student</h1>
            <Link
              type="button"
              to="/login/studentlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-28 lg:w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;