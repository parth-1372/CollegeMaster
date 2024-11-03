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
  const subjects = useSelector((state) => state.admin.subjects.result);
  const store = useSelector((state) => state);

  // Set loading state based on subjects existence
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If there are errors, set loading to false and save errors
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
      setLoading(false);
      return; // Exit early if there's an error
    }

    // If subjects are populated, stop loading
    if (subjects?.length > 0) {
      setLoading(false);
    }
  }, [store.errors, subjects]); // Depend on errors and subjects

  useEffect(() => {
    // Clear errors on component mount
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
            {/* Render message if there are no tests and loading is false */}
            {!loading && Object.keys(error).length === 0 && testResult?.length === 0 && (
              <h1 className="text-lg md:text-xl mb-2">No test Is Created For You</h1>
            )}

            {/* Render a message if there are no subjects and loading is false */}
            {!loading && Object.keys(error).length === 0 && subjects?.length === 0 && testResult?.length === 0 && (
              <p className="text-gray-500 text-lg md:text-2xl font-bold">Nothing to show</p>
            )}

            {/* Only render subjects if loading is false and no error exists */}
            {!loading && Object.keys(error).length === 0 && subjects?.length > 0 && (
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
                      <h1 className={`${classes.adminDataHeading} col-span-1`}>Sr no.</h1>
                      <h1 className={`${classes.adminDataHeading} col-span-2`}>Subject Code</h1>
                      <h1 className={`${classes.adminDataHeading} col-span-3`}>Subject Name</h1>
                      <h1 className={`${classes.adminDataHeading} col-span-1`}>Total Lectures</h1>
                    </div>
                    {subjects.map((sub, idx) => (
                      <div
                        key={sub.subjectCode}
                        className={`${classes.adminDataBody} grid grid-cols-1 sm:grid-cols-7 gap-2`}
                      >
                        <h1 className={`col-span-1 ${classes.adminDataBodyFields}`}>{idx + 1}</h1>
                        <h1 className={`col-span-2 ${classes.adminDataBodyFields}`}>{sub.subjectCode}</h1>
                        <h1 className={`col-span-3 ${classes.adminDataBodyFields}`}>{sub.subjectName}</h1>
                        <h1 className={`col-span-1 ${classes.adminDataBodyFields}`}>{sub.totalLectures}</h1>
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
