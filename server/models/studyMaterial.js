import mongoose from "mongoose";

const studyMaterialSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true,
    },
  material: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export default mongoose.model("studymaterial", studyMaterialSchema);
