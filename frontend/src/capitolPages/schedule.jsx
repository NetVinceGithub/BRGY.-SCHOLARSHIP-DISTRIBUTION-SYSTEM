import React from "react";
import "./schedule.css";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-green-900 text-white p-5 flex flex-col">
      <h1 className="text-xl font-bold mb-5">Scholarship System</h1>
      <nav>
        <ul className="space-y-4">
          <li className="hover:bg-green-700 p-2 rounded">DashBoard</li>
          <li className="hover:bg-green-700 p-2 rounded">Beneficiaries</li>
          <li className="bg-green-700 p-2 rounded">Schedule</li>
          <li className="hover:bg-green-700 p-2 rounded">About Us</li>
          <li className="hover:bg-green-700 p-2 rounded">Landing Page</li>
          <li className="hover:bg-green-700 p-2 rounded">Logout</li>
        </ul>
      </nav>
    </div>
  );
};

const ScheduleTable = () => {
  const scheduleData = [
    { beneficiaries: 100, barangay: "Barangay 1", date: "March 16, 2025" },
    { beneficiaries: 100, barangay: "Barangay 2", date: "March 17, 2025" },
    { beneficiaries: 120, barangay: "Barangay 3", date: "March 18, 2025" },
    { beneficiaries: 120, barangay: "Barangay 4", date: "March 19, 2025" },
    { beneficiaries: 150, barangay: "Barangay 5", date: "March 19, 2025" },
    { beneficiaries: 160, barangay: "Barangay 6", date: "March 19, 2025" },
    { beneficiaries: 180, barangay: "Barangay 7", date: "March 19, 2025" },
    { beneficiaries: 190, barangay: "Barangay 8", date: "March 19, 2025" },
  ];

  return (
    <div className="p-5 w-full">
      <h2 className="text-2xl font-bold mb-4">List of Schedule:</h2>
      <button className="bg-green-700 text-white px-4 py-2 rounded mb-4">Send</button>
      <table className="w-full border-collapse border border-black">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black p-2">Number of Beneficiaries</th>
            <th className="border border-black p-2">Barangay</th>
            <th className="border border-black p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, i) => (
            <tr key={i}>
              <td className="border border-black p-2">{item.beneficiaries}</td>
              <td className="border border-black p-2">{item.barangay}</td>
              <td className="border border-black p-2">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SchedulePage = () => {
  return (
    <div className="flex h-screen bg-beige-100">
      <Sidebar />
      <ScheduleTable />
    </div>
  );
};

export default SchedulePage;
