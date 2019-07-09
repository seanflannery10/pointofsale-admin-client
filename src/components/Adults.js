import React from "react";
import { Link } from "react-router-dom";

const Adults = ({ currentUser }) => {
  return (
    <div className="home-hero">
      <h1>Welcome to the Adults page</h1>
      <ul>
        <li>
          <Link to="/adultAdd">Add New Adult</Link>
        </li>
        <li>
          <Link to="/adultModify">Modify/View Adult Accounts</Link>
        </li>
        <li>
          <Link to="/adultReports">Adult Account Reports</Link>
        </li>
        <li>
          <Link to="/adultList">List/Print Adults</Link>
        </li>
        <li>
          <Link to="/adultRenumber">Renumber Adults</Link>
        </li>
      </ul>
    </div>
  );
};

export default Adults;
