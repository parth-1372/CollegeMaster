// import React, { useEffect, useState } from "react";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import { useDispatch, useSelector } from "react-redux";
// import { getSubject } from "../../../redux/actions/adminActions";
// import { MenuItem, Select } from "@mui/material";
// import Spinner from "../../../utils/Spinner";
// import { SET_ERRORS } from "../../../redux/actionTypes";
// import * as classes from "../../../utils/styles";

// const Body = () => {
//   const dispatch = useDispatch();
//   const [error, setError] = useState({});
//   const testResult = useSelector((state) => state.student.testResult.result);

//   const [loading, setLoading] = useState(false);
//   const store = useSelector((state) => state);

//   const [search, setSearch] = useState(false);

//   console.log(error);
//   useEffect(() => {
//     if (Object.keys(store.errors).length !== 0) {
//       setError(store.errors);
//       setLoading(false);
//     }
//   }, [store.errors]);

//   const subjects = useSelector((state) => state.admin.subjects.result);

//   useEffect(() => {
//     if (subjects?.length !== 0) setLoading(false);
//   }, [subjects]);

//   useEffect(() => {
//     dispatch({ type: SET_ERRORS, payload: {} });
//   }, []);

//   return (
//     <div className="flex-[0.8] mt-3">
//       <div className="space-y-5">
//         <div className="flex text-gray-400 items-center space-x-2">
//           <MenuBookIcon />
//           <h1>All Subjects</h1>
//         </div>
//         <div className=" mr-10 bg-white rounded-xl pt-6 pl-6 h-[29.5rem]">
//           <div className="col-span-3 mr-6">
//             <div className={classes.loadingAndError}>
//               {loading && (
//                 <Spinner
//                   message="Loading"
//                   height={50}
//                   width={150}
//                   color="#111111"
//                   messageColor="blue"
//                 />
//               )}
//               {error.noSubjectError && (
//                 <p className="text-red-500 text-2xl font-bold">
//                   {error.noSubjectError}
//                 </p>
//               )}
//             </div>
//             {!loading &&
//               Object.keys(error).length === 0 &&
//               subjects?.length !== 0 && (
//                 <div className={classes.adminData}>
//                   <div className="grid grid-cols-8">
//                     <h1 className={`${classes.adminDataHeading} col-span-1`}>
//                       Sr no.
//                     </h1>
//                     <h1 className={`${classes.adminDataHeading} col-span-1`}>
//                       Subject Code
//                     </h1>
//                     <h1 className={`${classes.adminDataHeading} col-span-2`}>
//                       Subject Name
//                     </h1>
//                     <h1 className={`${classes.adminDataHeading} col-span-2`}>
//                       Test
//                     </h1>
//                     <h1 className={`${classes.adminDataHeading} col-span-1`}>
//                       Marks Obtained
//                     </h1>
//                     <h1 className={`${classes.adminDataHeading} col-span-1`}>
//                       Total Marks
//                     </h1>
//                   </div>
//                   {testResult?.map((res, idx) => (
//                     <div
//                       key={idx}
//                       className={`${classes.adminDataBody} grid-cols-8`}>
//                       <h1
//                         className={`col-span-1 ${classes.adminDataBodyFields}`}>
//                         {idx + 1}
//                       </h1>
//                       <h1
//                         className={`col-span-1 ${classes.adminDataBodyFields}`}>
//                         {res.subjectCode}
//                       </h1>
//                       <h1
//                         className={`col-span-2 ${classes.adminDataBodyFields}`}>
//                         {res.subjectName}
//                       </h1>
//                       <h1
//                         className={`col-span-2 ${classes.adminDataBodyFields}`}>
//                         {res.test}
//                       </h1>
//                       <h1
//                         className={`col-span-1 ${classes.adminDataBodyFields}`}>
//                         {res.marks}
//                       </h1>
//                       <h1
//                         className={`col-span-1 ${classes.adminDataBodyFields}`}>
//                         {res.totalMarks}
//                       </h1>
//                     </div>
//                   ))}
//                 </div>
//               )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Body;



















// import React, { useEffect, useState } from "react";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import { useDispatch, useSelector } from "react-redux";
// import Spinner from "../../../utils/Spinner";
// import { SET_ERRORS } from "../../../redux/actionTypes";
// import * as classes from "../../../utils/styles";

// const Body = () => {
//   const dispatch = useDispatch();
//   const [error, setError] = useState({});
//   const testResult = useSelector((state) => state.student.testResult.result);
//   const [loading, setLoading] = useState(false);
//   const store = useSelector((state) => state);
//   const subjects = useSelector((state) => state.admin.subjects.result);

//   useEffect(() => {
//     if (Object.keys(store.errors).length !== 0) {
//       setError(store.errors);
//       setLoading(false);
//     }
//   }, [store.errors]);

//   useEffect(() => {
//     if (subjects?.length !== 0) setLoading(false);
//   }, [subjects]);

//   useEffect(() => {
//     dispatch({ type: SET_ERRORS, payload: {} });
//   }, []);

//   return (
//     <div className="flex-[0.8] mt-3">
//       <div className="space-y-5">
//         <div className="flex text-gray-400 items-center space-x-2">
//           <MenuBookIcon />
//           <h1 className="text-lg md:text-xl">All Subjects</h1>
//         </div>
//         <div className="mr-10 bg-white rounded-xl pt-6 pl-6 h-auto md:h-[29.5rem]">
//           <div className="col-span-3 mr-6">
//             <div className={classes.loadingAndError}>
//               {loading && (
//                 <Spinner
//                   message="Loading"
//                   height={50}
//                   width={150}
//                   color="#111111"
//                   messageColor="blue"
//                 />
//               )}
//               {error.noSubjectError && (
//                 <p className="text-red-500 text-2xl font-bold">
//                   {error.noSubjectError}
//                 </p>
//               )}
//             </div>
//             {!loading &&
//               Object.keys(error).length === 0 &&
//               subjects?.length !== 0 && (
//                 <div className={classes.adminData}>
//                   <div className="grid grid-cols-1 md:grid-cols-8 gap-2">
//                     <h1 className={`${classes.adminDataHeading} col-span-1 text-sm md:text-base`}>
//                       Sr no.
//                     </h1>
//                     <h1 className={`${classes.adminDataHeading} col-span-1 text-sm md:text-base`}>
//                       Subject Code
//                     </h1>
//                     <h1 className={`${classes.adminDataHeading} col-span-2 text-sm md:text-base`}>
//                       Subject Name
//                     </h1>
//                     <h1 className={`${classes.adminDataHeading} col-span-2 text-sm md:text-base`}>
//                       Test
//                     </h1>
//                     <h1 className={`${classes.adminDataHeading} col-span-1 text-sm md:text-base`}>
//                       Marks Obtained
//                     </h1>
//                     <h1 className={`${classes.adminDataHeading} col-span-1 text-sm md:text-base`}>
//                       Total Marks
//                     </h1>
//                   </div>
//                   {testResult?.map((res, idx) => (
//                     <div key={idx} className={`${classes.adminDataBody} grid grid-cols-1 md:grid-cols-8 gap-2`}>
//                       <h1 className={`col-span-1 ${classes.adminDataBodyFields} text-sm md:text-base`}>
//                         {idx + 1}
//                       </h1>
//                       <h1 className={`col-span-1 ${classes.adminDataBodyFields} text-sm md:text-base`}>
//                         {res.subjectCode}
//                       </h1>
//                       <h1 className={`col-span-2 ${classes.adminDataBodyFields} text-sm md:text-base`}>
//                         {res.subjectName}
//                       </h1>
//                       <h1 className={`col-span-2 ${classes.adminDataBodyFields} text-sm md:text-base`}>
//                         {res.test}
//                       </h1>
//                       <h1 className={`col-span-1 ${classes.adminDataBodyFields} text-sm md:text-base`}>
//                         {res.marks}
//                       </h1>
//                       <h1 className={`col-span-1 ${classes.adminDataBodyFields} text-sm md:text-base`}>
//                         {res.totalMarks}
//                       </h1>
//                     </div>
//                   ))}
//                 </div>
//               )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Body;



























import React, { useEffect, useState } from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../utils/Spinner";
import { SET_ERRORS } from "../../../redux/actionTypes";
import * as classes from "../../../utils/styles";

const Body = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const testResult = useSelector((state) => state.student.testResult.result);
  const [loading, setLoading] = useState(false);
  const store = useSelector((state) => state);
  const subjects = useSelector((state) => state.admin.subjects.result);

  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
      setLoading(false);
    }
  }, [store.errors]);

  useEffect(() => {
    if (subjects?.length !== 0) setLoading(false);
  }, [subjects]);

  useEffect(() => {
    dispatch({ type: SET_ERRORS, payload: {} });
  }, [dispatch]);

  return (
    <div className="flex-1 mt-3 px-3 md:px-6">
      <div className="space-y-5">
        <div className="flex items-center space-x-2 text-gray-400">
          <MenuBookIcon />
          <h1 className="text-lg md:text-xl">All Subjects</h1>
        </div>
        <div className="bg-white rounded-xl pt-6 pl-4 pr-4 h-auto md:h-full md:overflow-hidden">
          <div className="mr-4 md:mr-6">
            <div className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Loading"
                  height={50}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
              {error.noSubjectError && (
                <p className="text-red-500 text-lg md:text-2xl font-bold">
                  {error.noSubjectError}
                </p>
              )}
            </div>
            {!loading &&
              Object.keys(error).length === 0 &&
              subjects?.length !== 0 && (
                <>
                  {/* Mobile Layout */}
                  <div className="block md:hidden space-y-4">
                    {testResult?.map((res, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-100 p-4 rounded-lg shadow-md grid gap-2 text-xs"
                      >
                        <div>
                          <span className="font-semibold">Sr no:</span> {idx + 1}
                        </div>
                        <div>
                          <span className="font-semibold">Subject Code:</span> {res.subjectCode}
                        </div>
                        <div>
                          <span className="font-semibold">Subject Name:</span> {res.subjectName}
                        </div>
                        <div>
                          <span className="font-semibold">Test:</span> {res.test}
                        </div>
                        <div>
                          <span className="font-semibold">Marks Obtained:</span> {res.marks}
                        </div>
                        <div>
                          <span className="font-semibold">Total Marks:</span> {res.totalMarks}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:block overflow-auto">
                    <div className={classes.adminData}>
                      <div className="grid grid-cols-1 sm:grid-cols-7 gap-2">
                        <h1 className={`${classes.adminDataHeading} col-span-1`}>
                          Sr no.
                        </h1>
                        <h1 className={`${classes.adminDataHeading} col-span-2`}>
                          Subject Code
                        </h1>
                        <h1 className={`${classes.adminDataHeading} col-span-3`}>
                          Subject Name
                        </h1>
                        <h1 className={`${classes.adminDataHeading} col-span-1`}>
                          Total Lectures
                        </h1>
                      </div>
                      {subjects.map((sub, idx) => (
                        <div
                          key={sub.subjectCode}
                          className={`${classes.adminDataBody} grid grid-cols-1 sm:grid-cols-7 gap-2`}
                        >
                          <h1 className={`col-span-1 ${classes.adminDataBodyFields}`}>
                            {idx + 1}
                          </h1>
                          <h1 className={`col-span-2 ${classes.adminDataBodyFields}`}>
                            {sub.subjectCode}
                          </h1>
                          <h1 className={`col-span-3 ${classes.adminDataBodyFields}`}>
                            {sub.subjectName}
                          </h1>
                          <h1 className={`col-span-1 ${classes.adminDataBodyFields}`}>
                            {sub.totalLectures}
                          </h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;


