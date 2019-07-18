import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const BuildingItem = ({
  date,
  text,
  username,
  removeMessage,
  isCorrectUser
}) => (
  <div>
    <li className="list-group-item">
      <div className="message-area">
        <Link to="/">@{username} &nbsp;</Link>
        <span className="text-muted">
          <Moment className="text-muted" format="Do MMM YYYY">
            {date}
          </Moment>
        </span>
        <p>{text}</p>
        {isCorrectUser && (
          <button className="btn btn-danger" onClick={removeMessage}>
            Delete
          </button>
        )}
      </div>
    </li>
  </div>
);

export default BuildingItem;
