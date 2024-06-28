import React from "react";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Sample data for demonstration
  const installations = [
    {
      id: 1,
      customerName: "John Doe",
      acModel: "Model XYZ",
      installationDate: "2024-01-15",
      nextServiceDate: "2024-07-15",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      acModel: "Model ABC",
      installationDate: "2024-02-20",
      nextServiceDate: "2024-08-20",
    },
    {
      id: 1,
      customerName: "John Doe",
      acModel: "Model XYZ",
      installationDate: "2024-01-15",
      nextServiceDate: "2024-07-15",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      acModel: "Model ABC",
      installationDate: "2024-02-20",
      nextServiceDate: "2024-07-02",
    },
  ];

  const upcomingServices = installations.filter((installation) => {
    const serviceDate = new Date(installation.nextServiceDate);
    const today = new Date();
    const timeDifference = serviceDate.getTime() - today.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference <= 11;
  });

  const handleEdit = (id) => {
    alert(`Edit item with id: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete item with id: ${id}`);
  };

  return (
    <div className="min-h-screen bg-lightgray p-6 flex flex-col">
      <h1 className="text-3xl font-semibold mb-6 text-navy">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        <div className="bg-white shadow-md border-l-8 border-navy p-6  ">
          <h2 className="text-xl font-semibold mb-4 text-navy">
            Total Installations
          </h2>
          <p className="text-2xl text-black">{installations.length}</p>
        </div>

        <div className="bg-white shadow-md border-l-8 border-navy p-6">
          <h2 className="text-xl font-semibold mb-4 text-navy">
            Upcoming Services
          </h2>
          <p className="text-2xl text-black">{upcomingServices.length}</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between">
          <span className="text-2xl font-semibold mb-4 text-navy">
            Installations
          </span>
          <Link to='/register-installation'>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 me-2 mb-2 mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-navy text-white">
              <tr>
                <th className="py-2 px-4 border rounded-ss-lg min-w-180">
                  Customer Name
                </th>
                <th className="py-2 px-4 border min-w-180">AC Model</th>
                <th className="py-2 px-4 border min-w-180">Installation Date</th>
                <th className="py-2 px-4 border min-w-180">Next Service Date</th>
                <th className="py-2 px-4 border rounded-se-lg min-w-260">Actions</th>
              </tr>
            </thead>
            <tbody>
              {installations.map((installation) => (
                <tr key={101 + installation.id} className="border-b odd:bg-white  even:bg-gray-100 ">
                  <td className="py-2 px-4 border text-gray-600 text-center">
                    {installation.customerName}
                  </td>
                  <td className="py-2 px-4 border text-gray-600 text-center">
                    {installation.acModel}
                  </td>
                  <td className="py-2 px-4 border text-gray-600 text-center">
                    {installation.installationDate}
                  </td>
                  <td className="py-2 px-4 border text-gray-600 text-center">
                    {installation.nextServiceDate}
                  </td>
                  <td className="py-2 px-4 border text-gray-600 text-center min-w-260">
                    <Link to='/installation-details'>
                      <button className="bg-green-500 text-white py-1 px-4 rounded mr-2">
                        View
                      </button>
                    </Link>
                    <button
                      onClick={() => handleEdit(installation.id)}
                      className="bg-orange text-white py-1 px-4 rounded hover:shadow-md hover:shadow-cyan-500/50 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(installation.id)}
                      className="bg-red-500 text-white py-1 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-navy">Upcoming Services</h2>
        <div className="overflow-x-auto">
          {upcomingServices.length < 1 ? (
            <p className="py-4 px-4 border bg-white text-black text-center rounded-lg">
              No Upcoming Service
            </p>
          ) : (
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="py-2 px-4 border min-w-180 rounded-ss-lg min-w-12">
                    Customer Name
                  </th>
                  <th className="py-2 px-4 border min-w-180">AC Model</th>
                  <th className="py-2 px-4 border min-w-180">Installation Date</th>
                  <th className="py-2 px-4 border min-w-180">Next Service Date</th>
                  <th className="py-2 px-4 border rounded-se-lg min-w-260">Actions</th>
                </tr>
              </thead>
              <tbody>
                {upcomingServices.map((service) => (
                  <tr key={201 + service.id} className="border-b">
                    <td className="py-2 px-4 border text-gray-600 text-center ">
                      {service.customerName}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-cente ">
                      {service.acModel}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center ">
                      {service.installationDate}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center ">
                      {service.nextServiceDate}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center min-w-260">
                      <Link to='/installation-details'>
                        <button className="bg-green-500 text-white py-1 px-4 rounded mr-2">
                          View
                        </button>
                      </Link>
                      <button
                        onClick={() => handleEdit(service.id)}
                        className="bg-orange text-white py-1 px-4 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="bg-red-500 text-white py-1 px-4 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
