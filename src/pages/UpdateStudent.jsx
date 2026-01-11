import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../api";
import "../style/dashboard.css";

const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name:"", class:"", section:"" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const update = async () => {
    await API.put(`/students/${id}`, form);
    alert("Updated");
    navigate("/dashboard/view");
  };

  return (
    <div className="card">
      <h2>Update Student</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="class" placeholder="Class" onChange={handleChange} />
      <input name="section" placeholder="Section" onChange={handleChange} />
      <button onClick={update}>Update</button>
    </div>
  );
};

export default UpdateStudent;
