const express = require("express");
const router = express.Router();
const Student = require("../models/Students");
const authMiddleware = require("../middleware/authMiddleware");



const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied (Admin only)" });
  }
  next();
};

// ➕ Add Student
router.post("/add",authMiddleware,isAdmin, async (req, res) => {
  try {
    const { name, rollNo, email, class: studentClass, section, mobile, address } = req.body;

    const exist = await Student.findOne({ rollNo });
    if (exist) {
      return res.status(400).json({ message: "Roll number already exists" });
    }

    const student = new Student({
      name,
      rollNo,
      email,
      class: studentClass,
      section,
      mobile,
      address,
    });

    await student.save();

    res.status(201).json({ message: "Student added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// 📋 Get All Students
router.get("/all",authMiddleware,isAdmin, async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// ✏ Update Student
router.put("/:id",authMiddleware,isAdmin, async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Student updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// ❌ Delete Student
router.delete("/:id",authMiddleware,isAdmin, async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;