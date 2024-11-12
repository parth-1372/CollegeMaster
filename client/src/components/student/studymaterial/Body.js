import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../../../utils/Spinner";
import * as classes from "../../../utils/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { getStudyMaterial } from "../../../redux/actions/studentActions";

const Body = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const [selectedSubject, setSelectedSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  
  const subjects = useSelector((state) => state.student.enrolledSubjects);
  const materials = useSelector((state) => state.student.studyMaterials);
  
  useEffect(() => {
    if (selectedSubject) {
      setLoading(true);
      dispatch(getStudyMaterial(selectedSubject));
    }
  }, [selectedSubject, dispatch]);

  useEffect(() => {
    if (materials) {
      setLoading(false);
    }
  }, [materials]);

  useEffect(() => {
    if (Object.keys(error).length > 0) {
      setLoading(false);
    }
  }, [error]);

  return (
    <div className="flex-[0.8] mt-3 px-3 md:px-6 bg-white">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <h1 className="text-lg md:text-xl">Study Materials</h1>
        </div>
        
        {/* Dropdown for selecting subject */}
        <div className="mr-10 bg-white rounded-xl pt-6 pl-6 h-auto md:h-[29.5rem] overflow-y-auto">
          <div className="col-span-3 mr-6">
            <div className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Loading Materials"
                  height={50}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
              {error && error.message && (
                <p className="text-red-500 text-2xl font-bold">{error.message}</p>
              )}
            </div>

            {/* Subject selection */}
            <div className="mb-4">
              <h2 className="text-xl font-bold">Select Subject</h2>
              <Select
                required
                displayEmpty
                sx={{ height: 36 }}
                inputProps={{ "aria-label": "Subject" }}
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <MenuItem value="">None</MenuItem>
                {subjects?.map((subject) => (
                  <MenuItem key={subject.subjectCode} value={subject.subjectCode}>
                    {subject.subjectName} - {subject.subjectCode}
                  </MenuItem>
                ))}
              </Select>
            </div>

            {/* List of materials */}
            {!loading && materials?.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Study Materials</h2>
                <div>
                  {materials.map((material, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                      <h3 className="text-md font-bold">{material.title}</h3>
                      <a
                        href={material.fileUrl}
                        download
                        className="text-blue-500 hover:underline"
                      >
                        Download {material.title}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {materials?.length === 0 && !loading && (
              <p className="text-gray-500">No study materials available for this subject.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
