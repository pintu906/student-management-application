import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import "../style/dashboard.css";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation(); // current route path

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dash-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Student Panel</h2>
        <Link to="add">➕ Add Student</Link>
        <Link to="view">📋 View Students</Link>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>

      {/* Main area */}
      <div className="main-area">
        {/* Sirf dashboard home pe image dikhe */}
        {location.pathname === "/dashboard" && (
          <img src="/sck.jpg" alt="Dashboard" className="dashboard-img" />
        )}

        {/* Add / View pages yahan render honge */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
