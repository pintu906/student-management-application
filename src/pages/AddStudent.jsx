import { useState } from "react";
import API from "../api";
import "../style/dashboard.css";

const AddStudent = () => {
  const [form, setForm] = useState({
    name:"", rollNo:"", email:"", class:"", section:"", mobile:"", address:""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = async () => {
    try {
      await API.post("/students/add", form);
      alert("Student Added");
    } catch {
      alert("Only Admin Allowed / Error");
    }
  };

  return (
    <div className="card">
      <h2>Add Student</h2>

      {Object.keys(form).map((key) => (
        <input key={key} name={key} placeholder={key} onChange={handleChange} />
      ))}

      <button onClick={handleAdd}>Add Student</button>
    </div>
  );
};

export default AddStudent;
