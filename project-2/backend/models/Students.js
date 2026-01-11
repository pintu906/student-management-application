const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    rollNo: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    class: {type: String, required: true},
    section: {type: String, required: true},
    address: {type: String, required: true},
    mobile: {type: String, required: true},
    },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
