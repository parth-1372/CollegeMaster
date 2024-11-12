import mongoose from "mongoose";
const { Schema } = mongoose;
const feedbackSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "student",
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: "subject",
  },
  isFilled: {
    type: Boolean,
    default: false,
  },
    feedback: {
        type: String,
        default: "",
    },
    rating: {
        type: Number,
        default: 0,
    },

});

export default mongoose.model("attendance", attendenceSchema);
