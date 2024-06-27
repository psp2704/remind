// // src/components/Dashboard.js
// import React from 'react';

// const Dashboard = () => {
//   // Sample data for demonstration
//   const installations = [
//     { id: 1, customerName: 'John Doe', acModel: 'Model XYZ', installationDate: '2024-01-15', nextServiceDate: '2024-07-15' },
//     { id: 2, customerName: 'Jane Smith', acModel: 'Model ABC', installationDate: '2024-02-20', nextServiceDate: '2024-08-20' },
//     { id: 1, customerName: 'John Doe', acModel: 'Model XYZ', installationDate: '2024-01-15', nextServiceDate: '2024-07-15' },
//     { id: 2, customerName: 'Jane Smith', acModel: 'Model ABC', installationDate: '2024-02-20', nextServiceDate: '2024-07-01' },
//   ];

//   const upcomingServices = installations.filter(installation => {
//     const serviceDate = new Date(installation.nextServiceDate);
//     const today = new Date();
//     const timeDifference = serviceDate.getTime() - today.getTime();
//     const daysDifference = timeDifference / (1000 * 3600 * 24);
//     return daysDifference <= 11;
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Total Installations</h2>
//           <p className="text-2xl">{installations.length}</p>
//         </div>

//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Upcoming Services</h2>
//           <p className="text-2xl">{upcomingServices.length}</p>
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4">Installations</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {installations.map(installation => (
//             <div key={installation.id} className="bg-white shadow-md rounded-lg p-6">
//               <h3 className="text-xl font-semibold">{installation.customerName}</h3>
//               <p>AC Model: {installation.acModel}</p>
//               <p>Installation Date: {installation.installationDate}</p>
//               <p>Next Service Date: {installation.nextServiceDate}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4">Upcoming Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {upcomingServices.map(service => (
//             <div key={service.id} className="bg-white shadow-md rounded-lg p-6">
//               <h3 className="text-xl font-semibold">{service.customerName}</h3>
//               <p>AC Model: {service.acModel}</p>
//               <p>Installation Date: {service.installationDate}</p>
//               <p>Next Service Date: {service.nextServiceDate}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React from 'react';

// const Dashboard = () => {
//   // Sample data for demonstration
//   const installations = [
//     { id: 1, customerName: 'John Doe', acModel: 'Model XYZ', installationDate: '2024-01-15', nextServiceDate: '2024-07-15' },
//     { id: 2, customerName: 'Jane Smith', acModel: 'Model ABC', installationDate: '2024-02-20', nextServiceDate: '2024-08-20' },
//   ];

//   const upcomingServices = installations.filter(installation => {
//     const serviceDate = new Date(installation.nextServiceDate);
//     const today = new Date();
//     const timeDifference = serviceDate.getTime() - today.getTime();
//     const daysDifference = timeDifference / (1000 * 3600 * 24);
//     return daysDifference <= 11;
//   });

//   return (
//     <div className="min-h-screen bg-lightgray p-6">
//       <h1 className="text-3xl font-semibold mb-6 text-navy">Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 text-navy">Total Installations</h2>
//           <p className="text-2xl text-black">{installations.length}</p>
//         </div>

//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 text-navy">Upcoming Services</h2>
//           <p className="text-2xl text-black">{upcomingServices.length}</p>
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4 text-navy">Installations</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-lg">
//             <thead className="bg-navy text-white">
//               <tr>
//                 <th className="py-2 px-4">Customer Name</th>
//                 <th className="py-2 px-4">AC Model</th>
//                 <th className="py-2 px-4">Installation Date</th>
//                 <th className="py-2 px-4">Next Service Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {installations.map(installation => (
//                 <tr key={installation.id} className="bg-lightgray border-b">
//                   <td className="py-2 px-4 text-black">{installation.customerName}</td>
//                   <td className="py-2 px-4 text-black">{installation.acModel}</td>
//                   <td className="py-2 px-4 text-black">{installation.installationDate}</td>
//                   <td className="py-2 px-4 text-black">{installation.nextServiceDate}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4 text-navy">Upcoming Services</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-lg">
//             <thead className="bg-navy text-white">
//               <tr>
//                 <th className="py-2 px-4">Customer Name</th>
//                 <th className="py-2 px-4">AC Model</th>
//                 <th className="py-2 px-4">Installation Date</th>
//                 <th className="py-2 px-4">Next Service Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {upcomingServices.map(service => (
//                 <tr key={service.id} className="bg-lightgray border-b">
//                   <td className="py-2 px-4 text-black">{service.customerName}</td>
//                   <td className="py-2 px-4 text-black">{service.acModel}</td>
//                   <td className="py-2 px-4 text-black">{service.installationDate}</td>
//                   <td className="py-2 px-4 text-black">{service.nextServiceDate}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

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
    console.log(`Edit item with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with id: ${id}`);
  };

  return (
    <div className="min-h-screen bg-lightgray p-6">
      <h1 className="text-3xl font-semibold mb-6 text-navy">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-navy">
            Total Installations
          </h2>
          <p className="text-2xl text-black">{installations.length}</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-navy">
            Upcoming Services
          </h2>
          <p className="text-2xl text-black">{upcomingServices.length}</p>
        </div>
      </div>

      <div className="mt-8">
        <div className=" flex justify-between">
          <span className="text-2xl font-semibold mb-4 text-navy">
            Installations
          </span>
          <Link to='/regiter-installation'>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 me-2 mb-2 mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          >
            Add
          </button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-navy text-white">
              <tr>
                <th className="py-2 px-4 border rounded-ss-lg">
                  Customer Name
                </th>
                <th className="py-2 px-4 border">AC Model</th>
                <th className="py-2 px-4 border">Installation Date</th>
                <th className="py-2 px-4 border">Next Service Date</th>
                <th className="py-2 px-4 border rounded-se-lg ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {installations.map((installation) => (
                <tr key={101 + installation.id} className=" border-b">
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
                  <td className="py-2 px-4 border text-gray-600 text-center">
                    <Link to='/installation-details'>
                  <button
                      // onClick={() => handleView(installation.id)}
                      className="bg-green-500 text-white py-1 px-4 rounded mr-2"
                    >
                      View
                    </button>
                    </Link>
                    <button
                      onClick={() => handleEdit(installation.id)}
                      className="bg-orange text-white py-1 px-4 rounded hover:shodow-md hover:shadow-cyan-500/50  mr-2"
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
        <h2 className="text-2xl font-semibold mb-4 text-navy">
          Upcoming Services
        </h2>
        <div className="overflow-x-auto">
          {upcomingServices.length < 1 ? (
            <p className="py-4 px-4 border bg-white text-black text-center rounded-lg">
              No Upcoming Service
            </p>
          ) : (
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="py-2 px-4 border rounded-ss-lg">
                    Customer Name
                  </th>
                  <th className="py-2 px-4 border">AC Model</th>
                  <th className="py-2 px-4 border">Installation Date</th>
                  <th className="py-2 px-4 border">Next Service Date</th>
                  <th className="py-2 px-4 border rounded-se-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {upcomingServices.map((service) => (
                  <tr key={201 + service.id} className="border-b">
                    <td className="py-2 px-4 border text-gray-600 text-center">
                      {service.customerName}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center">
                      {service.acModel}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center">
                      {service.installationDate}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center">
                      {service.nextServiceDate}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center">
                    <Link to='/installation-details'>
                    <button
                      // onClick={() => handleView(installation.id)}
                      className="bg-green-500 text-white py-1 px-4 rounded mr-2"
                    >
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
