import React, { useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

//Edge case to think about: - what if the user change the url on top to edit a different employee?
//
const EditEmployee = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  let { id } = useParams();
  let [employee, setEmployee] = useState(state.employee);

  let { firstName, lastName, email, department } = employee;
  const handleInputChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const submitEditEmployee = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:9192/employees/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(employee),
      headers: {
        "Content-type": "application/json;",
      },
    });
    navigate("/view-employees");
    return res;
  };

  return (
    <form
      className="w-full max-w-lg mt-6"
      onSubmit={(e) => submitEditEmployee(e)}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="firstName"
            type="text"
            value={firstName}
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="lastName"
            type="text"
            value={lastName}
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="email"
            type="text"
            value={email}
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Department
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="department"
            type="text"
            value={department}
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Submit
      </button>
      <Link
        className="mx-6 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        to={"/view-employees"}
      >
        Cancel
      </Link>
    </form>
  );
};

export default EditEmployee;
