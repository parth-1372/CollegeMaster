import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem, Select, TextField, Card, CardContent, Typography, Button } from "@mui/material";
import Spinner from "../../../utils/Spinner";
import * as classes from "../../../utils/styles";
import { feedback } from "../../../redux/actions/adminActions";

const Body = () => {
  const dispatch = useDispatch();
  const { feedbac, loading, error } = useSelector((state) => state.admin);
  const store = useSelector((state) => state);
  const [filters, setFilters] = useState({
    subjectCode: "",
    department: "",
    year: "",
    section: ""
  });

  const handleInputChange = (field) => (event) => {
    setFilters((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(feedback(filters));
  };
  const feedbacks = useSelector((state) => state.admin.feedback);
  console.log(feedbacks);
  useEffect(() => {
    if (error) {
      console.error("Error fetching feedback:", error);
    }
  }, [error]);

  return (
    <div className="flex-[0.8] mt-3 px-4 md:px-6 lg:px-8 space-y-5">
      <header className="flex text-gray-400 items-center space-x-2">
        <h1 className="text-xl md:text-2xl">View Feedbacks</h1>
      </header>

      <section className="bg-black text-white rounded-xl p-4 md:p-6 min-h-[29.5rem]">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Form */}
          <form className="w-full lg:w-1/4 flex flex-col space-y-4" onSubmit={handleSubmit}>
            {["subjectCode", "department", "section"].map((field) => (
              <div key={field}>
                <label className="text-sm md:text-base capitalize" htmlFor={field}>
                  {field.replace(/([A-Z])/g, ' $1')}
                </label>
                <TextField
                  required
                  placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                  value={filters[field]}
                  onChange={handleInputChange(field)}
                  sx={{ width: "100%", backgroundColor: 'white' }}
                />
              </div>
            ))}
            <label className="text-sm md:text-base">Year</label>
            <Select
              required
              displayEmpty
              value={filters.year}
              onChange={handleInputChange("year")}
              sx={{ height: 36, width: "100%", backgroundColor: 'white', color: 'black' }}
            >
              <MenuItem value="">None</MenuItem>
              {[1, 2, 3, 4].map((year) => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
              ))}
            </Select>
            <button className={`${classes.adminFormSubmitButton} w-full mt-4`} type="submit">Search</button>
          </form>

          {/* Feedback Results */}
          <div className="w-full lg:w-3/4">
            {loading && <Spinner message="Loading Feedbacks..." height={50} width={150} color="#111111" />}
            {error && <p className="text-red-500 text-lg md:text-2xl font-bold">{error}</p>}

            {!loading && feedbacks?.result?.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {feedbacks.result.map((feedback) => (
      <Card key={feedback._id} sx={{ width: "100%", minHeight: '150px', display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Subject Code: {feedback.subjectCode}</Typography>
          <Typography variant="body2" color="text.secondary">Department: {feedback.department}</Typography>
          <Typography variant="body2" color="text.secondary">Year: {feedback.year}, Section: {feedback.section}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>Feedback: {feedback.feedback}</Typography>
          <div className="mt-2 space-y-1">
            {["Clarity", "Knowledge", "Presentation", "Helpfulness", "Engagement"].map((aspect) => (
              <Typography key={aspect}>{aspect} Rating: {feedback[`${aspect.toLowerCase()}Rating`]}</Typography>
            ))}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
)}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
