import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import "../style/auth.css";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // 🔥 important
    try {
      await API.post("/register", form);
      alert("Registered Successfully ✅");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed ❌");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>
          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

          <select name="role" className="optional" onChange={handleChange}>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>

          <button type="submit">Signup</button>
        </form>

        <p>
          Already have account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
