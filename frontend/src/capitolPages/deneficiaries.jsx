import React from "react";
import "./beneficiaries.css";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-green-900 text-white p-5 flex flex-col">
      <h1 className="text-xl font-bold mb-5">Scholarship System</h1>
      <nav>
        <ul className="space-y-4">
          <li className="hover:bg-green-700 p-2 rounded">DashBoard</li>
          <li className="bg-green-700 p-2 rounded">Beneficiaries</li>
          <li className="hover:bg-green-700 p-2 rounded">Schedule</li>
          <li className="hover:bg-green-700 p-2 rounded">About Us</li>
          <li className="hover:bg-green-700 p-2 rounded">Landing Page</li>
          <li className="hover:bg-green-700 p-2 rounded">Logout</li>
        </ul>
      </nav>
    </div>
  );
};

const BeneficiariesTable = () => {
  return (
    <div className="p-5 w-full">
      <h2 className="text-2xl font-bold mb-4">List of Beneficiaries:</h2>
      <table className="w-full border-collapse border border-black">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black p-2">SR-Code or Student ID</th>
            <th className="border border-black p-2">Student Name</th>
            <th className="border border-black p-2">School/Universities</th>
            <th className="border border-black p-2">Student Email</th>
            <th className="border border-black p-2">GCash Number</th>
            <th className="border border-black p-2">GCash Account Name</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, i) => (
            <tr key={i}>
              <td className="border border-black p-2"></td>
              <td className="border border-black p-2"></td>
              <td className="border border-black p-2"></td>
              <td className="border border-black p-2"></td>
              <td className="border border-black p-2"></td>
              <td className="border border-black p-2"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-beige-100">
      <Sidebar />
      <BeneficiariesTable />
    </div>
  );
};

export default Dashboard;
