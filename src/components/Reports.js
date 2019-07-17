import React from "react";
import { Link } from "react-router-dom";

const Reports = ({ currentUser }) => {
  return (
    <div className="container">
      <h1>Welcome to the Reports page</h1>
      <ul>
        <li>
          <Link to="/reportServingLine">Serving Line Reports</Link>
        </li>
        <li>
          <Link to="/reportSales">Meal/Item Sales Reports</Link>
        </li>
        <li>
          <Link to="/reportAccounting">Accounting Reports</Link>
        </li>
        <li>
          <Link to="/reportClaims">Claims Reports</Link>
        </li>
        <li>
          <Link to="/reportOther">Other Reports</Link>
        </li>
        <li>
          <Link to="/reportState">State Specific Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default Reports;
