import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import DashboardLayout from "../dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Signup />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/dashboard/employee" element={<DashboardLayout />} />
      <Route path="/dashboard/more" element={<DashboardLayout />} />
    </Routes>
  );
}

export default AppRoutes;
