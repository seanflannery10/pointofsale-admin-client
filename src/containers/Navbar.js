import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/pos-logo.png";

class Navbar extends Component {
  logout = event => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="POS Home" />
            </Link>
            <ul className="nav navbar-nav navbar-left">
              <li>
                <Link to="/buildings">Buildings</Link>
              </li>
              <li>
                <Link to="/students">Students</Link>
              </li>
              <li>
                <Link to="/adults">Adults</Link>
              </li>
              <li>
                <Link to="/reports">Reports</Link>
              </li>
              <li>
                <Link to="/accounting">Accounting</Link>
              </li>
            </ul>
          </div>
          {this.props.currentUser.isAuthenticated ? (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/" onClick={this.logout}>
                  Log out
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/signin">Log in</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
