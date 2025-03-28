


// import React, { useEffect, useRef, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
// import EngineeringIcon from "@mui/icons-material/Engineering";
// import AddIcon from "@mui/icons-material/Add";
// import MenuIcon from "@mui/icons-material/Menu"; // Import Menu icon
// import { useDispatch } from "react-redux";
// import decode from "jwt-decode";

// const isNotActiveStyle =
//   "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1";
// const isActiveStyle =
//   "flex items-center px-5 gap-3 text-blue-600 transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1";

// const Sidebar = () => {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const sidebarRef = useRef(null); // Ref for the sidebar
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

//   const logout = () => {
//     alert("OOPS! Your session expired. Please Login again");
//     dispatch({ type: "LOGOUT" });
//     navigate("/login/studentlogin");
//   };

//   useEffect(() => {
//     const token = user?.token;

//     if (token) {
//       const decodedToken = decode(token);
//       if (decodedToken.exp * 1000 < new Date().getTime()) logout();
//     }

//     setUser(JSON.parse(localStorage.getItem("faculty")));
//   }, [navigate]);

//   // Handle sidebar toggle
//   const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);

//   // Handle click outside to close sidebar
//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isSidebarOpen) {
//       setIsSidebarOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside); // Add event listener
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside); // Clean up on unmount
//     };
//   }, [isSidebarOpen]);

//   return (
//     <div className="relative">
//       {/* Hamburger Icon */}
//       <div className="md:hidden p-2 cursor-pointer z-50" onClick={handleSidebarToggle}>
//         <MenuIcon /> {/* Hamburger icon */}
//       </div>

//       {/* Sidebar */}
//       <div
//         ref={sidebarRef}
//         className={`fixed top-0 left-0 h-full bg-white transition-transform duration-300 z-40 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:flex-[0.2]`}
//       >
//         <div className="space-y-8 overflow-y-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-300 h-[33rem]">
//           <div className="">
//             <NavLink
//               to="/student/home"
//               className={({ isActive }) =>
//                 isActive ? isActiveStyle : isNotActiveStyle
//               }
//             >
//               <HomeIcon />
//               <h1 className="font-normal">Dashboard</h1>
//             </NavLink>
//             <NavLink
//               to="/student/profile"
//               className={({ isActive }) =>
//                 isActive ? isActiveStyle : isNotActiveStyle
//               }
//             >
//               <AssignmentIndIcon />
//               <h1 className="font-normal">Profile</h1>
//             </NavLink>
//           </div>
//           <div className="">
//             <NavLink
//               to="/student/testresult"
//               className={({ isActive }) =>
//                 isActive ? isActiveStyle : isNotActiveStyle
//               }
//             >
//               <AddIcon />
//               <h1 className="font-normal">Test results</h1>
//             </NavLink>
//             <NavLink
//               to="/student/attendance"
//               className={({ isActive }) =>
//                 isActive ? isActiveStyle : isNotActiveStyle
//               }
//             >
//               <AddIcon />
//               <h1 className="font-normal">Attendance</h1>
//             </NavLink>
//           </div>
//           <div className="">
//             <NavLink
//               to="/student/subjectlist"
//               className={({ isActive }) =>
//                 isActive ? isActiveStyle : isNotActiveStyle
//               }
//             >
//               <EngineeringIcon />
//               <h1 className="font-normal">Subject List</h1>
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;





import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu"; // Import Menu icon
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-white hover:text-gray-300 transition-all duration-200 ease-in-out capitalize hover:bg-gray-700 py-2 my-1";
const isActiveStyle =
  "flex items-center px-5 gap-3 text-blue-300 transition-all duration-200 ease-in-out capitalize hover:bg-gray-700 py-2 my-1";

const Sidebar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sidebarRef = useRef(null); // Ref for the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const logout = () => {
    alert("OOPS! Your session expired. Please Login again");
    dispatch({ type: "LOGOUT" });
    navigate("/login/studentlogin");
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("faculty")));
  }, [navigate]);

  // Handle sidebar toggle
  const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);

  // Handle click outside to close sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // Add event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up on unmount
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <div className="md:hidden p-2 cursor-pointer z-50" onClick={handleSidebarToggle}>
        <MenuIcon /> {/* Hamburger icon */}
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-black transition-transform duration-300 z-40 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:flex-[0.2]`}
      >
        <div className="space-y-8 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-gray-600 h-[33rem]">
          <div className="">
            <NavLink
              to="/student/home"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              <HomeIcon />
              <h1 className="font-normal">Dashboard</h1>
            </NavLink>
            <NavLink
              to="/student/profile"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              <AssignmentIndIcon />
              <h1 className="font-normal">Profile</h1>
            </NavLink>
          </div>
          <div className="">
            <NavLink
              to="/student/testresult"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              <AddIcon />
              <h1 className="font-normal">Test results</h1>
            </NavLink>
            <NavLink
              to="/student/attendance"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              <AddIcon />
              <h1 className="font-normal">Attendance</h1>
            </NavLink>
          </div>
          <div className="">
            <NavLink
              to="/student/subjectlist"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              <EngineeringIcon />
              <h1 className="font-normal">Subject List</h1>
            </NavLink>
          </div>
          <div className="">
            <NavLink
              to="/student/studymaterial"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              <EngineeringIcon />
              <h1 className="font-normal">Study Material</h1>
            </NavLink>
          </div>
          <div className="">
            <NavLink
              to="/student/feedback"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              <EngineeringIcon />
              <h1 className="font-normal">Feedback Form</h1>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;






