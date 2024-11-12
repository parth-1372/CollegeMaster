import mongoose from "mongoose";
<<<<<<< HEAD
const { Schema } = mongoose;
=======

>>>>>>> a5bc99ec1f5a846fba9b3b78297946d15067afe5
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

<<<<<<< HEAD
export default mongoose.model("studymaterial", studyMaterialSchema);
=======
export default mongoose.model("studymaterial", studyMaterialSchema);
>>>>>>> a5bc99ec1f5a846fba9b3b78297946d15067afe5
