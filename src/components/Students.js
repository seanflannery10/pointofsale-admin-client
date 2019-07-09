import React from "react";
import { Link } from "react-router-dom";

const Students = ({ currentUser }) => {
  return (
    <div className="home-hero">
      <h1>Welcome to the Students page</h1>
      <ul>
        <li>
          <Link to="/studentAdd">Add Student</Link>
        </li>
        <li>
          <Link to="/studentModify">Modify/View Student Accounts</Link>
        </li>
        <li>
          <Link to="/studentReports">Student Account Reports</Link>
        </li>
        <li>
          <Link to="/studentList">List/Print Students</Link>
        </li>
        <li>
          <Link to="/studentRenumber">Renumber Students</Link>
        </li>
      </ul>
    </div>
  );
};

export default Students;
