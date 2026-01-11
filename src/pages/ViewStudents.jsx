import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../style/dashboard.css";

const ViewStudents = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const load = async () => {
    const res = await API.get("/students/all");
    setStudents(res.data);
  };

  useEffect(() => { load(); }, []);

  const del = async (id) => {
    await API.delete(`/students/${id}`);
    load();
  };

  return (
    <div className="card">
      <h2>All Students</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th><th>Roll</th><th>Class</th><th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.rollNo}</td>
              <td>{s.class}</td>
              <td>
                <button onClick={() => navigate(`/dashboard/update/${s._id}`)}>Edit</button>
                <button onClick={() => del(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudents;
