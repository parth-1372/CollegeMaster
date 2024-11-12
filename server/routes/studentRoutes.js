import express from "express";
import {
  studentLogin,
  updatedPassword,
  updateStudent,
  testResult,
  attendance,
  getStudyMaterial,
  feedback
} from "../controller/studentController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/login", studentLogin);
router.post("/updatepassword", auth, updatedPassword);
router.post("/updateprofile", auth, updateStudent);
router.post("/testresult", auth, testResult);
router.post("/attendance", auth, attendance);
router.get("/getstudymaterial", auth,  getStudyMaterial);
router.post("/getstudymaterial", getStudyMaterial);

router.post("/feedback", auth, feedback);

export default router;
