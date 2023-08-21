import React from "react";
import { useLocation } from "react-router-dom";

const EmployeeProfile = () => {
  const state = useLocation();
  const employee = state.employee;
  return <div></div>;
};

export default EmployeeProfile;
