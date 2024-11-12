import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-screen flex justify-center bg-[#121212] overflow-y-auto overflow-x-hidden">
      {/* Enhanced animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 animate-gradient z-0">
        {/* Floating orbs in background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="flex flex-col items-center mt-8 mb-8 space-y-8 md:mt-10 md:mb-10 md:space-y-16 z-10 relative">
        <div className="relative text-center px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
            Indian Institute of Technology
          </h1>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Admin Card - Enhanced with golden theme */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative h-80 w-80 md:h-96 md:w-96 flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-[#FFD700] via-amber-500 to-yellow-500 shadow-2xl transition-all duration-500 
                        transform perspective-1000 hover:rotate-y-12 hover:scale-105 group
                        before:absolute before:inset-0 before:bg-black/10 before:rounded-xl">
              <div className="absolute inset-0 bg-black/10 rounded-xl backdrop-blur-sm group-hover:bg-black/5 transition-colors duration-300"></div>
              <div className="relative z-10 space-y-8">
                <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(255,215,0,0.8)] transition-all duration-300">
                  Admin
                </h1>
                <Link
                  to="/login/adminlogin"
                  className="flex items-center justify-center bg-white/20 backdrop-blur-md h-12 w-36 text-lg rounded-xl text-white 
                           shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] 
                           transition-all duration-300 hover:scale-110 hover:bg-white/30"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>

          {/* Faculty Card - Enhanced with cyan theme */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative h-80 w-80 md:h-96 md:w-96 flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-[#00CED1] via-cyan-500 to-teal-400 shadow-2xl transition-all duration-500 
                        transform perspective-1000 hover:rotate-y-12 hover:scale-105 group
                        before:absolute before:inset-0 before:bg-black/10 before:rounded-xl">
              <div className="absolute inset-0 bg-black/10 rounded-xl backdrop-blur-sm group-hover:bg-black/5 transition-colors duration-300"></div>
              <div className="relative z-10 space-y-8">
                <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(0,206,209,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(0,206,209,0.8)] transition-all duration-300">
                  Faculty
                </h1>
                <Link
                  to="/login/facultylogin"
                  className="flex items-center justify-center bg-white/20 backdrop-blur-md h-12 w-36 text-lg rounded-xl text-white 
                           shadow-[0_0_15px_rgba(0,206,209,0.3)] hover:shadow-[0_0_25px_rgba(0,206,209,0.5)] 
                           transition-all duration-300 hover:scale-110 hover:bg-white/30"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>

          {/* Student Card - Enhanced with magenta theme */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-pink-300 to-fuchsia-400 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative h-80 w-80 md:h-96 md:w-96 flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-[#FF1493] via-rose-500 to-pink-500 shadow-2xl transition-all duration-500 
                        transform perspective-1000 hover:rotate-y-12 hover:scale-105 group
                        before:absolute before:inset-0 before:bg-black/10 before:rounded-xl">
              <div className="absolute inset-0 bg-black/10 rounded-xl backdrop-blur-sm group-hover:bg-black/5 transition-colors duration-300"></div>
              <div className="relative z-10 space-y-8">
                <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,20,147,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(255,20,147,0.8)] transition-all duration-300">
                  Student
                </h1>
                <Link
                  to="/login/studentlogin"
                  className="flex items-center justify-center bg-white/20 backdrop-blur-md h-12 w-36 text-lg rounded-xl text-white 
                           shadow-[0_0_15px_rgba(255,20,147,0.3)] hover:shadow-[0_0_25px_rgba(255,20,147,0.5)] 
                           transition-all duration-300 hover:scale-110 hover:bg-white/30"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;