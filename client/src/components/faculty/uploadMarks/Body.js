

import React, { useEffect, useState } from "react";
import BoyIcon from "@mui/icons-material/Boy";
import { useDispatch, useSelector } from "react-redux";
import { getStudent, uploadMark } from "../../../redux/actions/facultyActions";
import { MenuItem, Select } from "@mui/material";
import * as classes from "../../../utils/styles";
import { MARKS_UPLOADED, SET_ERRORS } from "../../../redux/actionTypes";
import { getTest } from "../../../redux/actions/facultyActions";

const Body = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const store = useSelector((state) => state);
  const tests = store.faculty.tests.result;
  const [marks, setMarks] = useState([]);
  const [value, setValue] = useState({
    department: "",
    year: "",
    section: "",
    test: "",
  });
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
      setLoading(false);
      setValue({ department: "", year: "", section: "", test: "" });
    }
  }, [store.errors]);

  const handleInputChange = (value, _id) => {
    const newMarks = [...marks];
    let index = newMarks.findIndex((m) => m._id === _id);
    if (index === -1) {
      newMarks.push({ _id, value });
    } else {
      newMarks[index].value = value;
    }
    setMarks(newMarks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(true);
    setLoading(true);
    setError({});
    dispatch(getStudent(value));
  };
  const students = useSelector((state) => state.admin.students.result);

  const uploadMarks = () => {
    setError({});
    dispatch(uploadMark(marks, value.department, value.section, value.year, value.test));
  };

  useEffect(() => {
    if (students?.length !== 0) setLoading(false);
  }, [students]);

  useEffect(() => {
    dispatch({ type: SET_ERRORS, payload: {} });
    setValue({ ...value, department: user.result.department });
  }, []);

  useEffect(() => {
    if (store.errors || store.faculty.marksUploaded) {
      setLoading(false);
      if (store.faculty.marksUploaded) {
        setValue({ department: "", year: "", test: "", section: "" });
        setSearch(false);
        dispatch({ type: SET_ERRORS, payload: {} });
        dispatch({ type: MARKS_UPLOADED, payload: false });
      }
    } else {
      setLoading(true);
    }
  }, [store.errors, store.faculty.marksUploaded]);

  useEffect(() => {
    if (value.year !== "" && value.section !== "") {
      dispatch(getTest(value));
    }
  }, [value.year, value.section]);

  return (
    <div className="flex flex-col flex-[0.8] mt-3 px-4 bg-[#000000] rounded-2xl shadow-2xl h-full overflow-y-auto  text-white ">
      <div className="space-y-5 p-6">
        <div className="flex text-gray-400 items-center space-x-2">
          <BoyIcon />
          <h1 className="text-lg font-semibold">All Students</h1>
        </div>
        <div className="bg-[#101010] text-white rounded-xl p-6 shadow-lg">
          <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
            <label htmlFor="year" className="text-sm font-medium">Year</label>
            <Select
              required
              displayEmpty
              sx={{ height: 36, width: "100%" ,backgroundColor:'white',color:'black'}}
              inputProps={{ "aria-label": "Without label" }}
              value={value.year}
              onChange={(e) => setValue({ ...value, year: e.target.value })}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
            </Select>

            <label htmlFor="section" className="text-sm font-medium">Section</label>
            <Select
              required
              displayEmpty
              sx={{ height: 36, width: "100%",backgroundColor:'white',color:'black' }}
              inputProps={{ "aria-label": "Without label" }}
              value={value.section}
              onChange={(e) => setValue({ ...value, section: e.target.value })}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </Select>

            <label htmlFor="test" className="text-sm font-medium">Test</label>
            <Select
              required
              displayEmpty
              sx={{ height: 36, width: "100%",backgroundColor:'white',color:'black' }}
              inputProps={{ "aria-label": "Without label" }}
              value={value.test}
              onChange={(e) => setValue({ ...value, test: e.target.value })}>
              <MenuItem value="">None</MenuItem>
              {tests?.map((test, idx) => (
                <MenuItem value={test.test} key={idx}>
                  {test.test}
                </MenuItem>
              ))}
            </Select>
            <button className={`${classes.adminFormSubmitButton} w-full`} type="submit">
              Search
            </button>
          </form>
        </div>

        {search && !loading && students?.length !== 0 && (
          <div className="bg-black text-white rounded-xl p-4 mt-5 shadow-md space-y-5">
            {/* Desktop view */}
            <div className="hidden md:grid grid-cols-8 gap-2">
              <h1 className="col-span-1 font-semibold">Sr no.</h1>
              <h1 className="col-span-2 font-semibold">Name</h1>
              <h1 className="col-span-2 font-semibold">Username</h1>
              <h1 className="col-span-1 font-semibold">Section</h1>
              <h1 className="col-span-2 font-semibold">Marks</h1>
            </div>

            {/* Mobile view */}
            <div className="block md:hidden ">
              {students.map((stu, idx) => (
                <div key={idx} className="  border-white border-2 border-r-2 p-4 rounded-lg shadow-md mb-4 bg-black">
                  <div><strong>Sr No:</strong> {idx + 1}</div>
                  <div><strong>Name:</strong> {stu.name}</div>
                  <div><strong>Username:</strong> {stu.username}</div>
                  <div><strong>Section:</strong> {stu.section}</div>
                  <input
                    onChange={(e) => handleInputChange(e.target.value, stu._id)}
                    value={stu.marks}
                    className="border rounded px-2 mt-2 w-full text-black"
                    type="text"
                    placeholder="Enter marks"
                  />
                </div>
              ))}
            </div>

            {/* Desktop table rows */}
            {students.map((stu, idx) => (
              <div key={idx} className="hidden md:grid grid-cols-8 gap-2 py-2 bg-black ">
                <h1 className="col-span-1">{idx + 1}</h1>
                <h1 className="col-span-2">{stu.name}</h1>
                <h1 className="col-span-2">{stu.username}</h1>
                <h1 className="col-span-1">{stu.section}</h1>
                <input
                  onChange={(e) => handleInputChange(e.target.value, stu._id)}
                  value={stu.marks}
                  className="col-span-2 border rounded px-2 text-black"
                  type="text"
                  placeholder="Enter marks"
                />
              </div>
            ))}

            <button
              onClick={uploadMarks}
              className={`${classes.adminFormSubmitButton} bg-blue-500 mt-2 w-full`}>
              Upload
            </button>
          </div>
        )}
        {(error.examError || error.backendError) && (
          <p className="text-red-500 text-xl font-bold mt-4">{error.examError || error.backendError}</p>
        )}
      </div>
    </div>
  );
};

export default Body;






// import React, { useEffect, useState } from "react";
// import BoyIcon from "@mui/icons-material/Boy";
// import { useDispatch, useSelector } from "react-redux";
// import { getStudent, uploadMark } from "../../../redux/actions/facultyActions";
// import { MenuItem, Select } from "@mui/material";
// import * as classes from "../../../utils/styles";
// import { MARKS_UPLOADED, SET_ERRORS } from "../../../redux/actionTypes";
// import { getTest } from "../../../redux/actions/facultyActions";

// const Body = () => {
//   const dispatch = useDispatch();
//   const user = JSON.parse(localStorage.getItem("user"));

//   const [error, setError] = useState({});
//   const [loading, setLoading] = useState(false);
//   const store = useSelector((state) => state);
//   const tests = store.faculty.tests.result;
//   const [marks, setMarks] = useState([]);
//   const [value, setValue] = useState({
//     department: "",
//     year: "",
//     section: "",
//     test: "",
//   });
//   const [search, setSearch] = useState(false);

//   useEffect(() => {
//     if (Object.keys(store.errors).length !== 0) {
//       setError(store.errors);
//       setLoading(false);
//       setValue({ department: "", year: "", section: "", test: "" });
//     }
//   }, [store.errors]);

//   const handleInputChange = (value, _id) => {
//     const newMarks = [...marks];
//     let index = newMarks.findIndex((m) => m._id === _id);
//     if (index === -1) {
//       newMarks.push({ _id, value });
//     } else {
//       newMarks[index].value = value;
//     }
//     setMarks(newMarks);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSearch(true);
//     setLoading(true);
//     setError({});
//     dispatch(getStudent(value));
//   };
//   const students = useSelector((state) => state.admin.students.result);

//   const uploadMarks = () => {
//     setError({});
//     dispatch(uploadMark(marks, value.department, value.section, value.year, value.test));
//   };

//   useEffect(() => {
//     if (students?.length !== 0) setLoading(false);
//   }, [students]);

//   useEffect(() => {
//     dispatch({ type: SET_ERRORS, payload: {} });
//     setValue({ ...value, department: user.result.department });
//   }, []);

//   useEffect(() => {
//     if (store.errors || store.faculty.marksUploaded) {
//       setLoading(false);
//       if (store.faculty.marksUploaded) {
//         setValue({ department: "", year: "", test: "", section: "" });
//         setSearch(false);
//         dispatch({ type: SET_ERRORS, payload: {} });
//         dispatch({ type: MARKS_UPLOADED, payload: false });
//       }
//     } else {
//       setLoading(true);
//     }
//   }, [store.errors, store.faculty.marksUploaded]);

//   useEffect(() => {
//     if (value.year !== "" && value.section !== "") {
//       dispatch(getTest(value));
//     }
//   }, [value.year, value.section]);

//   return (
//     <div className="flex flex-col flex-[0.8] mt-3 px-4 bg-[#f4f6fa] rounded-2xl shadow-2xl h-full overflow-y-auto">
//       <div className="space-y-5 p-6">
//         <div className="flex text-gray-400 items-center space-x-2">
//           <BoyIcon />
//           <h1 className="text-lg font-semibold">All Students</h1>
//         </div>
//         <div className="bg-white rounded-xl p-6 shadow-lg">
//           <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
//             <label htmlFor="year" className="text-sm font-medium">Year</label>
//             <Select
//               required
//               displayEmpty
//               sx={{ height: 36, width: "100%" }}
//               inputProps={{ "aria-label": "Without label" }}
//               value={value.year}
//               onChange={(e) => setValue({ ...value, year: e.target.value })}>
//               <MenuItem value="">None</MenuItem>
//               <MenuItem value="1">1</MenuItem>
//               <MenuItem value="2">2</MenuItem>
//               <MenuItem value="3">3</MenuItem>
//               <MenuItem value="4">4</MenuItem>
//             </Select>

//             <label htmlFor="section" className="text-sm font-medium">Section</label>
//             <Select
//               required
//               displayEmpty
//               sx={{ height: 36, width: "100%" }}
//               inputProps={{ "aria-label": "Without label" }}
//               value={value.section}
//               onChange={(e) => setValue({ ...value, section: e.target.value })}>
//               <MenuItem value="">None</MenuItem>
//               <MenuItem value="1">1</MenuItem>
//               <MenuItem value="2">2</MenuItem>
//               <MenuItem value="3">3</MenuItem>
//             </Select>

//             <label htmlFor="test" className="text-sm font-medium">Test</label>
//             <Select
//               required
//               displayEmpty
//               sx={{ height: 36, width: "100%" }}
//               inputProps={{ "aria-label": "Without label" }}
//               value={value.test}
//               onChange={(e) => setValue({ ...value, test: e.target.value })}>
//               <MenuItem value="">None</MenuItem>
//               {tests?.map((test, idx) => (
//                 <MenuItem value={test.test} key={idx}>
//                   {test.test}
//                 </MenuItem>
//               ))}
//             </Select>
//             <button className={`${classes.adminFormSubmitButton} w-full`} type="submit">
//               Search
//             </button>
//           </form>
//         </div>

//         {search && !loading && students?.length !== 0 && (
//           <div className="bg-white rounded-xl p-4 mt-5 shadow-md space-y-5">
//             {/* Desktop view */}
//             <div className="hidden md:grid grid-cols-8 gap-2">
//               <h1 className="col-span-1 font-semibold">Sr no.</h1>
//               <h1 className="col-span-2 font-semibold">Name</h1>
//               <h1 className="col-span-2 font-semibold">Username</h1>
//               <h1 className="col-span-1 font-semibold">Section</h1>
//               <h1 className="col-span-2 font-semibold">Marks</h1>
//             </div>

//             {/* Mobile view */}
//             <div className="block md:hidden">
//               {students.map((stu, idx) => (
//                 <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
//                   <div><strong>Sr No:</strong> {idx + 1}</div>
//                   <div><strong>Name:</strong> {stu.name}</div>
//                   <div><strong>Username:</strong> {stu.username}</div>
//                   <div><strong>Section:</strong> {stu.section}</div>
//                   <input
//                     onChange={(e) => handleInputChange(e.target.value, stu._id)}
//                     value={stu.marks}
//                     className="border rounded px-2 mt-2 w-full"
//                     type="text"
//                     placeholder="Enter marks"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Desktop table rows */}
//             {students.map((stu, idx) => (
//               <div key={idx} className="hidden md:grid grid-cols-8 gap-2 py-2">
//                 <h1 className="col-span-1">{idx + 1}</h1>
//                 <h1 className="col-span-2">{stu.name}</h1>
//                 <h1 className="col-span-2">{stu.username}</h1>
//                 <h1 className="col-span-1">{stu.section}</h1>
//                 <input
//                   onChange={(e) => handleInputChange(e.target.value, stu._id)}
//                   value={stu.marks}
//                   className="col-span-2 border rounded px-2"
//                   type="text"
//                   placeholder="Enter marks"
//                 />
//               </div>
//             ))}

//             <button
//               onClick={uploadMarks}
//               className={`${classes.adminFormSubmitButton} bg-blue-500 mt-2 w-full`}>
//               Upload
//             </button>
//           </div>
//         )}
//         {(error.examError || error.backendError) && (
//           <p className="text-red-500 text-xl font-bold mt-4">{error.examError || error.backendError}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Body;





// import React, { useEffect, useState } from "react";
// import BoyIcon from "@mui/icons-material/Boy";
// import { useDispatch, useSelector } from "react-redux";
// import { getStudent, uploadMark } from "../../../redux/actions/facultyActions";
// import { MenuItem, Select } from "@mui/material";
// import * as classes from "../../../utils/styles";
// import { MARKS_UPLOADED, SET_ERRORS } from "../../../redux/actionTypes";
// import { getTest } from "../../../redux/actions/facultyActions";

// const Body = () => {
//   const dispatch = useDispatch();
//   const user = JSON.parse(localStorage.getItem("user"));

//   const [error, setError] = useState({});
//   const [loading, setLoading] = useState(false);
//   const store = useSelector((state) => state);
//   const tests = store.faculty.tests.result;
//   const [marks, setMarks] = useState([]);
//   const [value, setValue] = useState({
//     department: "",
//     year: "",
//     section: "",
//     test: "",
//   });
//   const [search, setSearch] = useState(false);

//   useEffect(() => {
//     if (Object.keys(store.errors).length !== 0) {
//       setError(store.errors);
//       setLoading(false);
//       setValue({ department: "", year: "", section: "", test: "" });
//     }
//   }, [store.errors]);

//   const handleInputChange = (value, _id) => {
//     const newMarks = [...marks];
//     let index = newMarks.findIndex((m) => m._id === _id);
//     if (index === -1) {
//       newMarks.push({ _id, value });
//     } else {
//       newMarks[index].value = value;
//     }
//     setMarks(newMarks);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSearch(true);
//     setLoading(true);
//     setError({});
//     dispatch(getStudent(value));
//   };
//   const students = useSelector((state) => state.admin.students.result);

//   const uploadMarks = () => {
//     setError({});
//     dispatch(uploadMark(marks, value.department, value.section, value.year, value.test));
//   };

//   useEffect(() => {
//     if (students?.length !== 0) setLoading(false);
//   }, [students]);

//   useEffect(() => {
//     dispatch({ type: SET_ERRORS, payload: {} });
//     setValue({ ...value, department: user.result.department });
//   }, []);

//   useEffect(() => {
//     if (store.errors || store.faculty.marksUploaded) {
//       setLoading(false);
//       if (store.faculty.marksUploaded) {
//         setValue({ department: "", year: "", test: "", section: "" });
//         setSearch(false);
//         dispatch({ type: SET_ERRORS, payload: {} });
//         dispatch({ type: MARKS_UPLOADED, payload: false });
//       }
//     } else {
//       setLoading(true);
//     }
//   }, [store.errors, store.faculty.marksUploaded]);

//   useEffect(() => {
//     if (value.year !== "" && value.section !== "") {
//       dispatch(getTest(value));
//     }
//   }, [value.year, value.section]);

//   return (
//     // <div className="flex flex-col flex-[0.8] mt-3 px-4 bg-[#000000] text-white rounded-2xl shadow-2xl h-full overflow-y-auto">
//     //   <div className="space-y-5 p-6">
//     //     <div className="flex text-gray-400 items-center space-x-2">
//     //       <BoyIcon />
//     //       <h1 className="text-lg font-semibold">All Students</h1>
//     //     </div>
//     //     <div className="bg-[#131212] text-white rounded-xl p-6 shadow-lg">
//     //       <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
//     //         <label htmlFor="year" className="text-sm font-medium">Year</label>
//     //         <Select
//     //           required
//     //           displayEmpty
//     //           sx={{ height: 36, width: "100%" }}
//     //           inputProps={{ "aria-label": "Without label" }}
//     //           value={value.year}
//     //           onChange={(e) => setValue({ ...value, year: e.target.value })}>
//     //           <MenuItem value="">None</MenuItem>
//     //           <MenuItem value="1">1</MenuItem>
//     //           <MenuItem value="2">2</MenuItem>
//     //           <MenuItem value="3">3</MenuItem>
//     //           <MenuItem value="4">4</MenuItem>
//     //         </Select>

//     //         <label htmlFor="section" className="text-sm font-medium">Section</label>
//     //         <Select
//     //           required
//     //           displayEmpty
//     //           sx={{ height: 36, width: "100%" }}
//     //           inputProps={{ "aria-label": "Without label" }}
//     //           value={value.section}
//     //           onChange={(e) => setValue({ ...value, section: e.target.value })}>
//     //           <MenuItem value="">None</MenuItem>
//     //           <MenuItem value="1">1</MenuItem>
//     //           <MenuItem value="2">2</MenuItem>
//     //           <MenuItem value="3">3</MenuItem>
//     //         </Select>

//     //         <label htmlFor="test" className="text-sm font-medium">Test</label>
//     //         <Select
//     //           required
//     //           displayEmpty
//     //           sx={{ height: 36, width: "100%" }}
//     //           inputProps={{ "aria-label": "Without label" }}
//     //           value={value.test}
//     //           onChange={(e) => setValue({ ...value, test: e.target.value })}>
//     //           <MenuItem value="">None</MenuItem>
//     //           {tests?.map((test, idx) => (
//     //             <MenuItem value={test.test} key={idx}>
//     //               {test.test}
//     //             </MenuItem>
//     //           ))}
//     //         </Select>
//     //         <button className={`${classes.adminFormSubmitButton} w-full`} type="submit">
//     //           Search
//     //         </button>
//     //       </form>
//     //     </div>

//     //     {search && !loading && students?.length !== 0 && (
//     //       <div className="bg-black text-white rounded-xl p-4 mt-5 shadow-md space-y-5">
//     //         {/* Desktop view */}
//     //         <div className="hidden md:grid grid-cols-8 gap-2">
//     //           <h1 className="col-span-1 font-semibold">Sr no.</h1>
//     //           <h1 className="col-span-2 font-semibold">Name</h1>
//     //           <h1 className="col-span-2 font-semibold">Username</h1>
//     //           <h1 className="col-span-1 font-semibold">Section</h1>
//     //           <h1 className="col-span-2 font-semibold">Marks</h1>
//     //         </div>

//     //         {/* Mobile view */}
//     //         <div className="block md:hidden space-y-4">
//     //           {students.map((stu, idx) => (
//     //             <div key={idx} className="bg-black text-white p-4 rounded-lg shadow-lg border border-gray-300">
//     //               <div className="font-semibold">Sr No: {idx + 1}</div>
//     //               <div><strong>Name:</strong> {stu.name}</div>
//     //               <div><strong>Username:</strong> {stu.username}</div>
//     //               <div><strong>Section:</strong> {stu.section}</div>
//     //               <input
//     //                 onChange={(e) => handleInputChange(e.target.value, stu._id)}
//     //                 value={stu.marks}
//     //                 className="border rounded px-2 mt-2 w-full"
//     //                 type="text"
//     //                 placeholder="Enter marks"
//     //               />
//     //             </div>
//     //           ))}
//     //         </div>

//     //         {/* Desktop table rows */}
//     //         {students.map((stu, idx) => (
//     //           <div key={idx} className="hidden md:grid grid-cols-8 gap-2 py-2">
//     //             <h1 className="col-span-1">{idx + 1}</h1>
//     //             <h1 className="col-span-2">{stu.name}</h1>
//     //             <h1 className="col-span-2">{stu.username}</h1>
//     //             <h1 className="col-span-1">{stu.section}</h1>
//     //             <input
//     //               onChange={(e) => handleInputChange(e.target.value, stu._id)}
//     //               value={stu.marks}
//     //               className="col-span-2 border rounded px-2"
//     //               type="text"
//     //               placeholder="Enter marks"
//     //             />
//     //           </div>
//     //         ))}

//     //         <button
//     //           onClick={uploadMarks}
//     //           className={`${classes.adminFormSubmitButton} bg-blue-500 mt-2 w-full`}>
//     //           Upload
//     //         </button>
//     //       </div>
//     //     )}
//     //     {(error.examError || error.backendError) && (
//     //       <p className="text-red-500 text-xl font-bold mt-4">{error.examError || error.backendError}</p>
//     //     )}
//     //   </div>
//     // </div>

//     <div className="flex flex-col flex-[0.8] mt-3 px-4 bg-[#000000] text-white rounded-2xl shadow-2xl h-full overflow-y-auto">
//   <div className="space-y-5 p-6">
//     <div className="flex text-gray-400 items-center space-x-2">
//       <BoyIcon />
//       <h1 className="text-lg font-semibold">All Students</h1>
//     </div>
//     <div className="bg-[#131212] text-white rounded-xl p-6 shadow-lg">
//       <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
        
//         {/* Year Dropdown */}
//         <label htmlFor="year" className="text-sm font-medium">Year</label>
//         <Select
//           required
//           displayEmpty
//           sx={{ height: 36, width: "100%" }}
//           inputProps={{ "aria-label": "Without label" }}
//           value={value.year}
//           onChange={(e) => setValue({ ...value, year: e.target.value })}
//         >
//           <MenuItem value="">None</MenuItem>
//           <MenuItem value="1">1</MenuItem>
//           <MenuItem value="2">2</MenuItem>
//           <MenuItem value="3">3</MenuItem>
//           <MenuItem value="4">4</MenuItem>
//         </Select>

//         {/* Section Dropdown */}
//         <label htmlFor="section" className="text-sm font-medium">Section</label>
//         <Select
//           required
//           displayEmpty
//           sx={{ height: 36, width: "100%" }}
//           inputProps={{ "aria-label": "Without label" }}
//           value={value.section}
//           onChange={(e) => setValue({ ...value, section: e.target.value })}
//         >
//           <MenuItem value="">None</MenuItem>
//           <MenuItem value="1">1</MenuItem>
//           <MenuItem value="2">2</MenuItem>
//           <MenuItem value="3">3</MenuItem>
//         </Select>

//         {/* Test Dropdown */}
//         <label htmlFor="test" className="text-sm font-medium">Test</label>
//         <Select
//           required
//           displayEmpty
//           sx={{ height: 36, width: "100%" }}
//           inputProps={{ "aria-label": "Without label" }}
//           value={value.test}
//           onChange={(e) => setValue({ ...value, test: e.target.value })}
//         >
//           <MenuItem value="">None</MenuItem>
//           {tests?.map((test, idx) => (
//             <MenuItem value={test.test} key={idx}>
//               {test.test}
//             </MenuItem>
//           ))}
//         </Select>

//         {/* Submit Button */}
//         <button className={`${classes.adminFormSubmitButton} w-full`} type="submit">
//           Search
//         </button>
//       </form>
//     </div>

//     {/* Conditional Content */}
//     {search && !loading && students?.length !== 0 && (
//       <div className="bg-black text-white rounded-xl p-4 mt-5 shadow-md space-y-5">
        
//         {/* Desktop View */}
//         <div className="hidden md:grid grid-cols-8 gap-2">
//           <h1 className="col-span-1 font-semibold">Sr no.</h1>
//           <h1 className="col-span-2 font-semibold">Name</h1>
//           <h1 className="col-span-2 font-semibold">Username</h1>
//           <h1 className="col-span-1 font-semibold">Section</h1>
//           <h1 className="col-span-2 font-semibold">Marks</h1>
//         </div>

//         {/* Mobile View */}
//         <div className="block md:hidden space-y-4">
//           {students.map((stu, idx) => (
//             <div key={idx} className="bg-black text-white p-4 rounded-lg shadow-lg border border-gray-300">
//               <div className="font-semibold">Sr No: {idx + 1}</div>
//               <div><strong>Name:</strong> {stu.name}</div>
//               <div><strong>Username:</strong> {stu.username}</div>
//               <div><strong>Section:</strong> {stu.section}</div>
//               <input
//                 onChange={(e) => handleInputChange(e.target.value, stu._id)}
//                 value={stu.marks}
//                 className="border rounded px-2 mt-2 w-full"
//                 type="text"
//                 placeholder="Enter marks"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Desktop Table Rows */}
//         {students.map((stu, idx) => (
//           <div key={idx} className="hidden md:grid grid-cols-8 gap-2 py-2">
//             <h1 className="col-span-1">{idx + 1}</h1>
//             <h1 className="col-span-2">{stu.name}</h1>
//             <h1 className="col-span-2">{stu.username}</h1>
//             <h1 className="col-span-1">{stu.section}</h1>
//             <input
//               onChange={(e) => handleInputChange(e.target.value, stu._id)}
//               value={stu.marks}
//               className="col-span-2 border rounded px-2"
//               type="text"
//               placeholder="Enter marks"
//             />
//           </div>
//         ))}

//         <button
//           onClick={uploadMarks}
//           className={`${classes.adminFormSubmitButton} bg-blue-500 mt-2 w-full`}>
//           Upload
//         </button>
//       </div>
//     )}

//     {/* Error Message */}
//     {(error.examError || error.backendError) && (
//       <p className="text-red-500 text-xl font-bold mt-4">{error.examError || error.backendError}</p>
//     )}
//   </div>
// </div>

//   );
// };

// export default Body;




