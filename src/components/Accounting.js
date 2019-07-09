import React from "react";
import { Link } from "react-router-dom";

const Accounting = ({ currentUser }) => {
  return (
    <div className="home-hero">
      <h1>Welcome to the Reports page</h1>
      <ul>
        <li>
          <Link to="/accountingPrepayment">Enter Prepayment/Refund</Link>
        </li>
        <li>
          <Link to="/accountingTransactions">Modify/View Transactions</Link>
        </li>
        <li>
          <Link to="/accountingCashCounter">Modify/View Cash Counter</Link>
        </li>
        <li>
          <Link to="/accountingAdjustments">Adjustments</Link>
        </li>
        <li>
          <Link to="/accountingPrepaidSummary">Prepaid Account Summary</Link>
        </li>
      </ul>
    </div>
  );
};

export default Accounting;
