import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddEmployee } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  let [registerEmployee, setRegisterEmployee] = useState({});

  let prevData = useSelector((state) => state.Employees);
  // console.log(prevData);

  let dispatch = useDispatch();
  let nevagation = useNavigate();

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setRegisterEmployee({ ...registerEmployee, [name]: value });
  };
  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let record = { ...registerEmployee, id: generateUniqueId() };
    dispatch(AddEmployee(record));
    setRegisterEmployee({});
    // nevagation("/viewEmployees");
    toast.success("Record Registration Successfully");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#cadaf9] text-gray-900 px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8 border border-gray-300">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Employee Registration
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          method="post"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name"
              name="name"
              value={registerEmployee.name ? registerEmployee.name : ""}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              name="email"
              value={registerEmployee.email ? registerEmployee.email : ""}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="number"
              className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone Number"
              name="phoneNumber"
              value={
                registerEmployee.phoneNumber ? registerEmployee.phoneNumber : ""
              }
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Designation</label>
            <input
              type="text"
              className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Designation"
              name="designation"
              value={
                registerEmployee.designation ? registerEmployee.designation : ""
              }
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700">Profile Image URL</label>
            <img
              src={registerEmployee.image ? registerEmployee.image : ""}
              alt="Profile Photo"
              height={100}
              width={100}
            />
            <input
              type="text"
              name="image"
              value={registerEmployee.image ? registerEmployee.image : ""}
              placeholder="Enter Profile Image URL"
              className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-500 hover:to-blue-600 transition duration-200 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
