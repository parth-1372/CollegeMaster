import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
    studentId: {
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
    feedback: {
        type: String,
        required: true,
    },
    clarityRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    knowledgeRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    presentationRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    helpfulnessRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    engagementRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
});

export default mongoose.model("feedback", feedbackSchema);