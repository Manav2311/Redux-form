import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Delete_Employee } from "../Redux/Actions";
import { FaTrash, FaEdit } from "react-icons/fa";

const ViewData = () => {
  let data = useSelector((state) => state.employees);
  console.log(data);
  let dispatch = useDispatch();
  let navigation = useNavigate();

  const handleDelete = (id) => {
    dispatch(Delete_Employee(id));
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#cadaf9] text-gray-900 px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8 border border-gray-300">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Employee Data</h1>
        </div>
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full border border-gray-300 text-left text-sm shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4 border border-gray-300 text-left">
                  Profile Image
                </th>
                <th className="p-4 border border-gray-300 text-left">Name</th>
                <th className="p-4 border border-gray-300 text-left">Email</th>
                <th className="p-4 border border-gray-300 text-left">
                  Designation
                </th>
                <th className="p-4 border border-gray-300 text-left">
                  Phone Number
                </th>
                <th className="p-4 border border-gray-300 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {data.map((val, i) => (
                <tr
                  key={i}
                  className="border border-gray-300 hover:bg-gray-100 transition duration-200 text-left"
                >
                  <td className="p-4">
                    <img
                      src={val.image}
                      alt=""
                      height={100}
                      width={100}
                      className="rounded-lg shadow-md"
                    />
                  </td>
                  <td className="p-4 font-medium text-lg text-gray-800">
                    {val.name}
                  </td>
                  <td className="p-4 text-lg ">{val.email}</td>
                  <td className="p-4text-lg ">{val.designation}</td>
                  <td className="p-4 font-semibold text-lg text-blue-600">
                    {val.phoneNumber}
                  </td>
                  <td className="p-4 text-lg flex space-x-4">
                    <button
                      onClick={() => handleDelete(val.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash size={30} />
                    </button>
                    <button>
                      <Link
                        to={`/updateDetails/${val.id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit size={30} />
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewData;
