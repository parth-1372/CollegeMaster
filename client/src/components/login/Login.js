// // import React from "react";
// // import { Link } from "react-router-dom";

// // const Login = () => {
// //   return (
// //     <div
// //       className="h-screen w-screen backdrop-blur-md flex justify-center "
// //       style={{
// //       //  backgroundImage: url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"),
// //         backgroundRepeat: "no-repeat",
// //         backgroundPosition: "center",
// //         backgroundSize: "cover",
// //       }}
// //     >
// //       <div className="flex flex-col items-center mt-10 space-y-32 ">
// //         <h1 className="text-3xl font-semibold bg-black text-white w-full text-center py-4 bg-opacity-75 rounded-2xl">
// //           ABC Institute of Technology
// //         </h1>
// //         <div className="grid grid-cols-3 gap-28">
// //           {/* Admin Card */}
// //           <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#4b3a8f] bg-opacity-60 rounded-xl transition-transform duration-300 hover:scale-105 ">
// //             <h1 className="text-4xl font-extrabold">Admin</h1>
// //             <Link
// //               type="button"
// //               to="/login/adminlogin"
// //               className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
// //             >
// //               Login
// //             </Link>
// //           </div>
// //           {/* Faculty Card */}
// //           <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#3a8f6a] bg-opacity-60 rounded-xl transition-transform duration-300 hover:scale-105 ">
// //             <h1 className="text-4xl font-extrabold">Faculty</h1>
// //             <Link
// //               type="button"
// //               to="/login/facultylogin"
// //               className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
// //             >
// //               Login
// //             </Link>
// //           </div>
// //           {/* Student Card */}
// //           <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#8f4b3a] bg-opacity-60 rounded-xl transition-transform duration-300 hover:scale-105 ">
// //             <h1 className="text-4xl font-extrabold">Student</h1>
// //             <Link
// //               type="button"
// //               to="/login/studentlogin"
// //               className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
// //             >
// //               Login
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };



// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="h-screen w-screen flex justify-center">
//       {/* Fixed Background Div for Full Coverage */}
//       <div className="fixed inset-0 bg-[#121212] z-0"></div>
      
//       <div className="flex flex-col items-center mt-10 space-y-16 md:space-y-32 z-10 relative">
//         <h1 className="text-2xl md:text-3xl font-semibold bg-black text-white w-full text-center py-4 bg-opacity-75 rounded-2xl">
//           ABC Institute of Technology
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-28">
//           {/* Admin Card */}
//           <div className="h-80 w-80 md:h-96 md:w-96 space-y-6 md:space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#f8b500] bg-opacity-80 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl transform hover:-translate-y-2">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-white">Admin</h1>
//             <Link
//               type="button"
//               to="/login/adminlogin"
//               className="flex items-center justify-center bg-blue-500 h-10 w-28 md:w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
//             >
//               Login
//             </Link>
//           </div>
//           {/* Faculty Card */}
//           <div className="h-80 w-80 md:h-96 md:w-96 space-y-6 md:space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#1abb9c] bg-opacity-80 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl transform hover:-translate-y-2">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-white">Faculty</h1>
//             <Link
//               type="button"
//               to="/login/facultylogin"
//               className="flex items-center justify-center bg-blue-500 h-10 w-28 md:w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
//             >
//               Login
//             </Link>
//           </div>
//           {/* Student Card */}
//           <div className="h-80 w-80 md:h-96 md:w-96 space-y-6 md:space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#e43a19] bg-opacity-80 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl transform hover:-translate-y-2">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-white">Student</h1>
//             <Link
//               type="button"
//               to="/login/studentlogin"
//               className="flex items-center justify-center bg-blue-500 h-10 w-28 md:w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;






// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="h-screen w-screen flex justify-center bg-[#121212]">
//       {/* Animated background gradient */}
//       <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 animate-gradient z-0"></div>
      
//       <div className="flex flex-col items-center mt-10 space-y-16 md:space-y-32 z-10 relative">
//         <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
//           ABC Institute of Technology
//         </h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
//           {/* Admin Card */}
//           <div className="group relative">
//             <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
//             <div className="relative h-80 w-80 md:h-96 md:w-96 flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-[#f8b500] to-yellow-600 shadow-2xl transition-all duration-500 
//                         transform perspective-1000 hover:rotate-y-12 hover:scale-105 
//                         before:absolute before:inset-0 before:bg-black/20 before:rounded-xl">
//               <div className="absolute inset-0 bg-black/20 rounded-xl backdrop-blur-sm"></div>
//               <div className="relative z-10 space-y-8">
//                 <h1 className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
//                   Admin
//                 </h1>
//                 <Link
//                   to="/login/adminlogin"
//                   className="flex items-center justify-center bg-white/20 backdrop-blur-md h-12 w-36 text-lg rounded-xl text-white 
//                            shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] 
//                            transition-all duration-300 hover:scale-110 hover:bg-white/30"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Faculty Card */}
//           <div className="group relative">
//             <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-teal-400 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
//             <div className="relative h-80 w-80 md:h-96 md:w-96 flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-[#1abb9c] to-teal-600 shadow-2xl transition-all duration-500 
//                         transform perspective-1000 hover:rotate-y-12 hover:scale-105
//                         before:absolute before:inset-0 before:bg-black/20 before:rounded-xl">
//               <div className="absolute inset-0 bg-black/20 rounded-xl backdrop-blur-sm"></div>
//               <div className="relative z-10 space-y-8">
//                 <h1 className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
//                   Faculty
//                 </h1>
//                 <Link
//                   to="/login/facultylogin"
//                   className="flex items-center justify-center bg-white/20 backdrop-blur-md h-12 w-36 text-lg rounded-xl text-white 
//                            shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] 
//                            transition-all duration-300 hover:scale-110 hover:bg-white/30"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Student Card */}
//           <div className="group relative">
//             <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
//             <div className="relative h-80 w-80 md:h-96 md:w-96 flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-[#e43a19] to-red-600 shadow-2xl transition-all duration-500 
//                         transform perspective-1000 hover:rotate-y-12 hover:scale-105
//                         before:absolute before:inset-0 before:bg-black/20 before:rounded-xl">
//               <div className="absolute inset-0 bg-black/20 rounded-xl backdrop-blur-sm"></div>
//               <div className="relative z-10 space-y-8">
//                 <h1 className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
//                   Student
//                 </h1>
//                 <Link
//                   to="/login/studentlogin"
//                   className="flex items-center justify-center bg-white/20 backdrop-blur-md h-12 w-36 text-lg rounded-xl text-white 
//                            shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] 
//                            transition-all duration-300 hover:scale-110 hover:bg-white/30"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


















// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="h-screen w-screen flex justify-center bg-[#121212] overflow-hidden">
//       {/* Enhanced animated background gradient */}
//       <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 animate-gradient z-0">
//         {/* Floating orbs in background */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-float"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-float-delayed"></div>
//       </div>
      
//       <div className="flex flex-col items-center mt-10 space-y-16 md:space-y-32 z-10 relative">
//         <div className="relative">
//           <h1 className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
//             ABC Institute of Technology
//           </h1>
//           <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
//           {/* Admin Card - Enhanced with golden theme */}
//           <div className="group relative">
//             <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
//             <div className="relative h-80 w-80 md:h-96 md:w-96 flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-[#FFD700] via-amber-500 to-yellow-500 shadow-2xl transition-all duration-500 
//                         transform perspective-1000 hover:rotate-y-12 hover:scale-105 group
//                         before:absolute before:inset-0 before:bg-black/10 before:rounded-xl">
//               <div className="absolute inset-0 bg-black/10 rounded-xl backdrop-blur-sm group-hover:bg-black/5 transition-colors duration-300"></div>
//               <div className="relative z-10 space-y-8">
//                 <h1 className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(255,215,0,0.8)] transition-all duration-300">
//                   Admin
//                 </h1>
//                 <Link
//                   to="/login/adminlogin"
//                   className="flex items-center justify-center bg-white/20 backdrop-blur-md h-12 w-36 text-lg rounded-xl text-white 
//                            shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] 
//                            transition-all duration-300 hover:scale-110 hover:bg-white/30"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Faculty Card - Enhanced with cyan theme */}
//           <div className="group relative">
//             <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
//             <div className="relative h-80 w-80 md:h-96 md:w-96 flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-[#00CED1] via-cyan-500 to-teal-400 shadow-2xl transition-all duration-500 
//                         transform perspective-1000 hover:rotate-y-12 hover:scale-105 group
//                         before:absolute before:inset-0 before:bg-black/10 before:rounded-xl">
//               <div className="absolute inset-0 bg-black/10 rounded-xl backdrop-blur-sm group-hover:bg-black/5 transition-colors duration-300"></div>
//               <div className="relative z-10 space-y-8">
//                 <h1 className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(0,206,209,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(0,206,209,0.8)] transition-all duration-300">
//                   Faculty
//                 </h1>
//                 <Link
//                   to="/login/facultylogin"
//                   className="flex items-center justify-center bg-white/20 backdrop-blur-md h-12 w-36 text-lg rounded-xl text-white 
//                            shadow-[0_0_15px_rgba(0,206,209,0.3)] hover:shadow-[0_0_25px_rgba(0,206,209,0.5)] 
//                            transition-all duration-300 hover:scale-110 hover:bg-white/30"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Student Card - Enhanced with magenta theme */}
//           <div className="group relative">
//             <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-pink-300 to-fuchsia-400 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
//             <div className="relative h-80 w-80 md:h-96 md:w-96 flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-[#FF1493] via-rose-500 to-pink-500 shadow-2xl transition-all duration-500 
//                         transform perspective-1000 hover:rotate-y-12 hover:scale-105 group
//                         before:absolute before:inset-0 before:bg-black/10 before:rounded-xl">
//               <div className="absolute inset-0 bg-black/10 rounded-xl backdrop-blur-sm group-hover:bg-black/5 transition-colors duration-300"></div>
//               <div className="relative z-10 space-y-8">
//                 <h1 className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,20,147,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(255,20,147,0.8)] transition-all duration-300">
//                   Student
//                 </h1>
//                 <Link
//                   to="/login/studentlogin"
//                   className="flex items-center justify-center bg-white/20 backdrop-blur-md h-12 w-36 text-lg rounded-xl text-white 
//                            shadow-[0_0_15px_rgba(255,20,147,0.3)] hover:shadow-[0_0_25px_rgba(255,20,147,0.5)] 
//                            transition-all duration-300 hover:scale-110 hover:bg-white/30"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



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
      
      <div className="flex flex-col items-center mt-10 space-y-16 md:space-y-32 z-10 relative">
        <div className="relative">
          <h1 className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
            ABC Institute of Technology
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
                <h1 className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(255,215,0,0.8)] transition-all duration-300">
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
                <h1 className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(0,206,209,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(0,206,209,0.8)] transition-all duration-300">
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
                <h1 className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,20,147,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(255,20,147,0.8)] transition-all duration-300">
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

// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="h-screen w-screen flex justify-center bg-[#e5e7eb] overflow-y-auto overflow-x-hidden">
//       {/* Subtle Background Image */}
//       <div
//         className="fixed inset-0 bg-cover bg-center opacity-60 z-0" // Increased opacity
//         style={{
//           backgroundImage: `url("https://www.iith.ac.in/assets/images/towers/tower2.jpg")`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       ></div>

//       <div className="flex flex-col items-center mt-10 space-y-16 md:space-y-32 z-10 relative">
//         <div className="relative">
//           <h1 className="text-2xl md:text-5xl font-bold text-gray-700">
//             ABC Institute of Technology
//           </h1>
//           <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
//           {/* Admin Card with Dark Bronze Theme */}
//           <div className="group relative">
//             <div className="absolute -inset-1 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 rounded-xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
//             <div className="relative h-80 w-80 md:h-96 md:w-96 flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-orange-200 to-orange-300 shadow-lg transition-all duration-500 
//                         transform perspective-1000 hover:rotate-y-3 hover:scale-105">
//               <div className="relative z-10 space-y-8">
//                 <h1 className="text-4xl font-semibold text-gray-800">
//                   Admin
//                 </h1>
//                 <Link
//                   to="/login/adminlogin"
//                   className="flex items-center justify-center bg-gray-200 h-12 w-36 text-lg rounded-xl text-gray-800 shadow-md 
//                            transition-all duration-300 hover:scale-105 hover:bg-gray-300"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Faculty Card with Dark Teal Theme */}
//           <div className="group relative">
//             <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 rounded-xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
//             <div className="relative h-80 w-80 md:h-96 md:w-96 flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-cyan-200 to-cyan-300 shadow-lg transition-all duration-500 
//                         transform perspective-1000 hover:rotate-y-3 hover:scale-105">
//               <div className="relative z-10 space-y-8">
//                 <h1 className="text-4xl font-semibold text-gray-800">
//                   Faculty
//                 </h1>
//                 <Link
//                   to="/login/facultylogin"
//                   className="flex items-center justify-center bg-gray-200 h-12 w-36 text-lg rounded-xl text-gray-800 shadow-md 
//                            transition-all duration-300 hover:scale-105 hover:bg-gray-300"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Student Card with Dark Coral Theme */}
//           <div className="group relative">
//             <div className="absolute -inset-1 bg-gradient-to-r from-rose-300 via-rose-400 to-rose-500 rounded-xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
//             <div className="relative h-80 w-80 md:h-96 md:w-96 flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-rose-200 to-rose-300 shadow-lg transition-all duration-500 
//                         transform perspective-1000 hover:rotate-y-3 hover:scale-105">
//               <div className="relative z-10 space-y-8">
//                 <h1 className="text-4xl font-semibold text-gray-800">
//                   Student
//                 </h1>
//                 <Link
//                   to="/login/studentlogin"
//                   className="flex items-center justify-center bg-gray-200 h-12 w-36 text-lg rounded-xl text-gray-800 shadow-md 
//                            transition-all duration-300 hover:scale-105 hover:bg-gray-300"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

