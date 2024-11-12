

// import React, { useEffect, useState } from "react";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import Spinner from "../../../../../utils/Spinner";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { facultyUpdatePassword } from "../../../../../redux/actions/facultyActions";

// const Body = () => {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState({});
//   const [loading, setLoading] = useState(false);
//   const store = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     if (Object.keys(store.errors).length !== 0) {
//       setError(store.errors);
//       setLoading(false);
//     }
//   }, [store.errors]);

//   const update = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     dispatch(
//       facultyUpdatePassword(
//         {
//           newPassword,
//           confirmPassword,
//           email: user.result.email,
//         },
//         navigate
//       )
//     );
//   };

//   useEffect(() => {
//     if (store.errors) {
//       setLoading(false);
//       setNewPassword("");
//       setConfirmPassword("");
//     }
//   }, [store.errors]);

//   return (
//     <div className="flex flex-col items-center w-full space-y-10 mt-24 px-4 md:px-6">
//       <form
//         onSubmit={update}
//         className="flex flex-col space-y-6 items-center w-full md:w-3/4 lg:w-1/2"
//       >
//         <h1 className="text-black text-2xl md:text-3xl font-bold text-center">
//           Update Password
//         </h1>
//         <div className="w-full">
//           <p className="text-[#515966] font-bold text-sm md:text-base mb-1">
//             New Password
//           </p>
//           <div className="bg-[#515966] rounded-lg px-3 flex items-center space-x-3 w-full">
//             <input
//               onChange={(e) => setNewPassword(e.target.value)}
//               value={newPassword}
//               required
//               type={showPassword ? "text" : "password"}
//               className="bg-[#515966] text-white rounded-lg outline-none py-2 w-full placeholder:text-sm md:placeholder:text-base"
//               placeholder="New Password"
//             />
//             {showPassword ? (
//               <VisibilityOffIcon
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="cursor-pointer text-white"
//               />
//             ) : (
//               <VisibilityIcon
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="cursor-pointer text-white"
//               />
//             )}
//           </div>
//         </div>
//         <div className="w-full">
//           <p className="text-[#515966] font-bold text-sm md:text-base mb-1">
//             Confirm Password
//           </p>
//           <div className="bg-[#515966] rounded-lg px-3 flex items-center space-x-3 w-full">
//             <input
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               value={confirmPassword}
//               required
//               type={showPassword ? "text" : "password"}
//               className="bg-[#515966] text-white rounded-lg outline-none py-2 w-full placeholder:text-sm md:placeholder:text-base"
//               placeholder="Confirm Password"
//             />
//             {showPassword ? (
//               <VisibilityOffIcon
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="cursor-pointer text-white"
//               />
//             ) : (
//               <VisibilityIcon
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="cursor-pointer text-white"
//               />
//             )}
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="w-full md:w-32 hover:scale-105 transition-all duration-150 rounded-lg flex items-center justify-center text-white text-base py-2 bg-[#04bd7d]"
//         >
//           Update
//         </button>
//         {loading && (
//           <Spinner
//             message="Updating"
//             height={30}
//             width={150}
//             color="#111111"
//             messageColor="#blue"
//           />
//         )}
//         {(error.mismatchError || error.backendError) && (
//           <p className="text-red-500">
//             {error.mismatchError || error.backendError}
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Body;



import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Spinner from "../../../../../utils/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { facultyUpdatePassword } from "../../../../../redux/actions/facultyActions";

const Body = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
      setLoading(false);
    }
  }, [store.errors]);

  const update = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(
      facultyUpdatePassword(
        {
          newPassword,
          confirmPassword,
          email: user.result.email,
        },
        navigate
      )
    );
  };

  useEffect(() => {
    if (store.errors) {
      setLoading(false);
      setNewPassword("");
      setConfirmPassword("");
    }
  }, [store.errors]);

  return (
    <div className="flex flex-col items-center w-full space-y-10 mt-24 px-4 md:px-6 bg-black text-white">
      <form
        onSubmit={update}
        className="flex flex-col space-y-6 items-center w-full md:w-3/4 lg:w-1/2"
      >
        <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
          Update Password
        </h1>
        <div className="w-full">
          <p className="text-white font-bold text-sm md:text-base mb-1">
            New Password
          </p>
          <div className="bg-black text-white rounded-lg px-3 flex items-center space-x-3 w-full">
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              required
              type={showPassword ? "text" : "password"}
              className="bg-black text-white rounded-lg outline-none py-2 w-full placeholder:text-sm md:placeholder:text-base"
              placeholder="New Password"
            />
            {showPassword ? (
              <VisibilityOffIcon
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer text-white"
              />
            ) : (
              <VisibilityIcon
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer text-white"
              />
            )}
          </div>
        </div>
        <div className="w-full">
          <p className="text-white font-bold text-sm md:text-base mb-1">
            Confirm Password
          </p>
          <div className="bg-black text-white rounded-lg px-3 flex items-center space-x-3 w-full">
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
              type={showPassword ? "text" : "password"}
              className="bg-black text-white rounded-lg outline-none py-2 w-full placeholder:text-sm md:placeholder:text-base"
              placeholder="Confirm Password"
            />
            {showPassword ? (
              <VisibilityOffIcon
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer text-white"
              />
            ) : (
              <VisibilityIcon
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer text-white"
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full md:w-32 hover:scale-105 transition-all duration-150 rounded-lg flex items-center justify-center text-white text-base py-2 bg-[#04bd7d]"
        >
          Update
        </button>
        {loading && (
          <Spinner
            message="Updating"
            height={30}
            width={150}
            color="#111111"
            messageColor="#blue"
          />
        )}
        {(error.mismatchError || error.backendError) && (
          <p className="text-red-500">
            {error.mismatchError || error.backendError}
          </p>
        )}
      </form>
    </div>
  );
};

export default Body;
