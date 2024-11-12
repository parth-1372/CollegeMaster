import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { feedback } from "../../../redux/actions/studentActions"; 
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as classes from "../../../utils/styles";

const Body = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    studentId: "",
    subjectCode: "",
    department: "",
    year: "",
    section: "",
    feedback: "",
    clarityRating: "",
    knowledgeRating: "",
    presentationRating: "",
    helpfulnessRating: "",
    engagementRating: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    setLoading(true);
    const requestBody = JSON.stringify(value);
    console.log(value);
    dispatch(feedback(value));
  };

  return (
    <div className="flex-[0.8] mt-3 bg-black text-white">
      <div className="space-y-5">
        <h1>Submit Feedback</h1>
        <form className={classes.adminForm0} onSubmit={handleSubmit}>
          <div className={classes.adminForm1}>
            <div className={classes.adminForm2l}>
              <div className={classes.adminForm3}>
                <h1 className={classes.adminLabel}>Student ID:</h1>
                <input
                  placeholder="Student ID"
                  required
                  className={classes.adminInput}
                  type="text"
                  value={value.studentId}
                  onChange={(e) =>
                    setValue({ ...value, studentId: e.target.value })
                  }
                />
              </div>

              <div className={classes.adminForm3}>
                <h1 className={classes.adminLabel}>Subject Code:</h1>
                <input
                  required
                  placeholder="Subject Code"
                  className={classes.adminInput}
                  type="text"
                  value={value.subjectCode}
                  onChange={(e) =>
                    setValue({ ...value, subjectCode: e.target.value })
                  }
                />
              </div>

              <div className={classes.adminForm3}>
                <h1 className={classes.adminLabel}>Department:</h1>
                <input
                  required
                  placeholder="Department"
                  className={classes.adminInput}
                  type="text"
                  value={value.department}
                  onChange={(e) =>
                    setValue({ ...value, department: e.target.value })
                  }
                />
              </div>

              <div className={classes.adminForm3}>
                <h1 className={classes.adminLabel}>Year:</h1>
                <Select
                  required
                  displayEmpty
                  sx={{ height: 36, backgroundColor: "black", color: "white" }}
                  value={value.year}
                  onChange={(e) => setValue({ ...value, year: e.target.value })}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </div>

              <div className={classes.adminForm3}>
                <h1 className={classes.adminLabel}>Section:</h1>
                <input
                  required
                  placeholder="Section"
                  className={classes.adminInput}
                  type="text"
                  value={value.section}
                  onChange={(e) =>
                    setValue({ ...value, section: e.target.value })
                  }
                />
              </div>
            </div>

            <div className={classes.adminForm2r}>
              {/* Feedback fields for different rating categories */}
              {["Clarity", "Knowledge", "Presentation", "Helpfulness", "Engagement"].map((ratingType) => (
                <div className={classes.adminForm3} key={ratingType}>
                  <h1 className={classes.adminLabel}>{`${ratingType} Rating:`}</h1>
                  <Select
                    required
                    displayEmpty
                    sx={{ height: 36, backgroundColor: "black", color: "white" }}
                    value={value[`${ratingType.toLowerCase()}Rating`]}
                    onChange={(e) =>
                      setValue({
                        ...value,
                        [`${ratingType.toLowerCase()}Rating`]: e.target.value
                      })
                    }
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <MenuItem key={num} value={num}>{num}</MenuItem>
                    ))}
                  </Select>
                </div>
              ))}
            </div>
          </div>

          <div className={classes.adminForm3}>
            <h1 className={classes.adminLabel}>Custom Feedback:</h1>
            <textarea
              placeholder="Provide your feedback here..."
              required
              className={classes.adminInput}
              value={value.feedback}
              onChange={(e) =>
                setValue({ ...value, feedback: e.target.value })
              }
              rows="4"
              style={{
                maxHeight: '200px', // Adjust the max-height based on your design
                overflowY: 'auto',   // Enable vertical scrollbar when content overflows
              }}
            />
          </div>

          <div className={`${classes.adminFormButton} flex justify-center space-x-4`}>
            <button className={classes.adminFormSubmitButton} type="submit">
              Submit Feedback
            </button>
            <button
              onClick={() => setValue({
                studentId: "",
                subjectCode: "",
                department: "",
                year: "",
                section: "",
                feedback: "",
                clarityRating: "",
                knowledgeRating: "",
                presentationRating: "",
                helpfulnessRating: "",
                engagementRating: ""
              })}
              className={classes.adminFormClearButton}
              type="button"
            >
              Clear
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Body;
