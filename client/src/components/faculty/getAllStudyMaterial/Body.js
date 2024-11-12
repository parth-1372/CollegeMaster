import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem, Select, TextField, Card, CardContent, Typography, Button } from "@mui/material";
import Spinner from "../../../utils/Spinner";
import * as classes from "../../../utils/styles";
import { getstudymaterial } from "../../../redux/actions/facultyActions"; 

const Body = () => {
  const dispatch = useDispatch();
  
  const store = useSelector((state) => state);
  const user = JSON.parse(localStorage.getItem("user"));
  const departments = useSelector((state) => state.admin.allDepartment);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [search, setSearch] = useState(false);
  
  const [value, setValue] = useState({
    year: "",
    section: "",
    subjectCode: "",
    department: user.result.department 
  });
  
  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
      setValue({
        subjectCode: "",
        section: "",
        year: "",
        title: "",
        department: user.result.department,
        date: "", 
      });
    }
  }, [store.errors]);
  const material = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSearch(true);
    setError({});
    console.log("Submitting:", value);  

    const requestBody = JSON.stringify(value); 
    
    // Dispatch the action to get study materials
    dispatch(getstudymaterial(value));
  };
  const studyMaterials = useSelector((state) => state.faculty.studymaterial); 
  console.log(studyMaterials);

  useEffect(() => {
    if (studyMaterials) setLoading(false);
  }, [studyMaterials]);

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <h1>Study Materials</h1>
        </div>
        <div className="mr-10 bg-white grid grid-cols-4 rounded-xl pt-6 pl-6 h-[29.5rem]">
          <form
            className="flex flex-col space-y-2 col-span-1"
            onSubmit={handleSubmit}
          >
            <label htmlFor="year">Year</label>
            <Select
              required
              displayEmpty
              sx={{ height: 36, width: 224 }}
              inputProps={{ "aria-label": "Without label" }}
              value={value.year}
              onChange={(e) => setValue({ ...value, year: e.target.value })}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
            </Select>

            <label htmlFor="section">Section</label>
            <Select
              required
              displayEmpty
              sx={{ height: 36, width: 224 }}
              inputProps={{ "aria-label": "Without label" }}
              value={value.section}
              onChange={(e) => setValue({ ...value, section: e.target.value })}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </Select>

            <label htmlFor="subjectCode">Subject Code</label>
            <TextField
              required
              placeholder="Enter Subject Code"
              value={value.subjectCode}
              onChange={(e) =>
                setValue({ ...value, subjectCode: e.target.value })
              }
              sx={{ width: 224 }}
            />

            <button
              className={`${classes.adminFormSubmitButton} w-56`}
              type="submit"
            >
              Search
            </button>
          </form>

          <div className="col-span-3 mr-6">
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
              {error.backendError && (
                <p className="text-red-500 text-2xl font-bold">
                  {error.backendError}
                </p>
              )}
            </div>

            {!loading && studyMaterials?.result?.length > 0 && (
  <div className="grid grid-cols-3 gap-4">
    {studyMaterials.result.map((material, idx) => (
      <Card key={material._id} sx={{ width: 275 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {material.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Department: {material.department}
          </Typography>
          <Button
            href={material.material} // Use the correct field for download
            download
            sx={{ marginTop: 1 }}
            variant="outlined"
            color="primary"
          >
            Download
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Body; 