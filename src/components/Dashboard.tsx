import React from "react";

const Dashboard = ({ currentPageId }: { currentPageId: number }) => {
  return (
    <div className="dashboard">
      <ul className="dashboard-list">
        <li
          className={
            currentPageId === 1
              ? "active-page dashboard-item"
              : "dashboard-item"
          }
        >
          Home
        </li>
        <li
          className={
            currentPageId === 2
              ? "active-page dashboard-item"
              : "dashboard-item"
          }
        >
          Make order
        </li>
        <li
          className={
            currentPageId === 3
              ? "active-page dashboard-item"
              : "dashboard-item"
          }
        >
          Book order
        </li>
        <li
          className={
            currentPageId === 4
              ? "active-page dashboard-item"
              : "dashboard-item"
          }
        >
          Receipt
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
