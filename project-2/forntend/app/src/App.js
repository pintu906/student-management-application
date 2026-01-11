import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddStudent from "./pages/AddStudent";
import ViewStudents from "./pages/ViewStudents";
import UpdateStudent from "./pages/UpdateStudent";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="add" element={<AddStudent />} />
          <Route path="view" element={<ViewStudents />} />
          <Route path="update/:id" element={<UpdateStudent />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
