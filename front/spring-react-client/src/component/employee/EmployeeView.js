import React, { useEffect, useState } from "react";

const EmployeeView = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      //result is going to be a promise
      let result = await fetch("http://localhost:9192/employees");
      //need to wait for the promise
      let data = await result.json();
      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex items-center justify-center">
      <table className="border text-center">
        <thead className="border ">
          <tr className="border-b text-center	">
            <th>
              <div className="mx-2">ID</div>
            </th>
            <th className="border">
              <div className="mx-2"> First Name</div>
            </th>
            <th className="border">
              <div className="mx-2">Last Name</div>
            </th>
            <th className="border">
              <div className="mx-2">Emali</div>
            </th>
            <th className="border">
              <div className="mx-2">Dapartment</div>
            </th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>
        <tbody className="text-center border-b font-medium">
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <th scope="row" key={index} className="border">
                {index + 1}
              </th>
              <td className=" border">
                <div className="mx-2">{employee.firstName}</div>
              </td>
              <td className="border">
                <div className="mx-2">{employee.lastName}</div>
              </td>
              <td className="border">
                <div className="mx-2">{employee.email}</div>
              </td>
              <td className="border">
                <div className="mx-2">{employee.department}</div>
              </td>
              <td className="border">
                <button className="mx-3 bg-blue-500 text-white font-bold py-2 px-4 rounded ">
                  View
                </button>
              </td>
              <td className="border">
                <button className="mx-3 bg-yellow-500 text-white font-bold py-2 px-4 rounded ">
                  Update
                </button>
              </td>
              <td className="border">
                <button className="mx-3 bg-red-500 text-white font-bold py-2 px-4 rounded ">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EmployeeView;
