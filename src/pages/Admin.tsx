import React, { useState } from "react";
import "../styles/Admin.css";

const Admin = () => {
  const [reports, setReports] = useState([
    { id: 1, name: "Laptop", type: "Lost", date: "2025-03-15", status: "Pending" },
    { id: 2, name: "Wallet", type: "Found", date: "2025-03-16", status: "Resolved" },
  ]);

  const handleAction = (id: number, action: string) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.id === id ? { ...report, status: action } : report
      )
    );
  };

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Manage Reports</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="admin-content">
        <h1>Manage Lost & Found Reports</h1>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.name}</td>
                <td>{report.type}</td>
                <td>{report.date}</td>
                <td>{report.status}</td>
                <td>
                  <button
                    className="approve-btn"
                    onClick={() => handleAction(report.id, "Approved")}
                  >
                    Approve
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleAction(report.id, "Deleted")}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Admin;
