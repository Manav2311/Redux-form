import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Update_Employee } from "../Redux/Actions";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const UpdateDetailes = () => {
  let prevData = useSelector((state) => state.employees);

  let paramId = useParams();
  let [UpdateEmpDetailes, setUpdateEmpDetailes] = useState(() => {
    let oneEmp = {};
    prevData.map((emp) => {
      if (emp.id == paramId.id) {
        oneEmp = emp;
      }
    });
    return oneEmp;
  });

  console.log(UpdateEmpDetailes);

  let dispatch = useDispatch();

  let navigation = useNavigate();
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUpdateEmpDetailes({ ...UpdateEmpDetailes, [name]: value });
  };
  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let record = { ...UpdateEmpDetailes };
    dispatch(Update_Employee(record));
    toast.success("Details Updated Successfully");
    navigation("/viewEmployees");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#cadaf9] text-gray-900 px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8 border border-gray-300">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Update Employee Details
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
              value={UpdateEmpDetailes.name ? UpdateEmpDetailes.name : ""}
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
              value={UpdateEmpDetailes.email ? UpdateEmpDetailes.email : ""}
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
                UpdateEmpDetailes.phoneNumber
                  ? UpdateEmpDetailes.phoneNumber
                  : ""
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
                UpdateEmpDetailes.designation
                  ? UpdateEmpDetailes.designation
                  : ""
              }
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700">Profile Image URL</label>
            <img
              src={UpdateEmpDetailes.image ? UpdateEmpDetailes.image : ""}
              alt=""
              height={100}
              width={100}
            />
            <input
              type="text"
              name="image"
              placeholder="Enter Profile Image URL"
              value={UpdateEmpDetailes.image ? UpdateEmpDetailes.image : ""}
              className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-500 hover:to-blue-600 transition duration-200 shadow-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateDetailes;
