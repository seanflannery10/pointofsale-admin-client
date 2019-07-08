import React from "react";
import { Link } from "react-router-dom";

const Students = ({ currentUser }) => {
  return (
    <div className="home-hero">
      <h1>Welcome to the Students page</h1>
      <ul>
        <li>
          <Link to="/addStudent">Add Student</Link>
        </li>
        <li>
          <Link to="/modifyStudent">Modify/View Student</Link>
        </li>
        <li>
          <Link to="/studentReports">Student Account Reports</Link>
        </li>
        <li>
          <Link to="/listStudent">List/Print Students</Link>
        </li>
        <li>
          <Link to="/renumberStudent">Renumber Students</Link>
        </li>
      </ul>
    </div>
  );
};

export default Students;
