import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import Buildings from "../components/Buildings";
import BuildingModify from "../containers/BuildingModify";
import buildingMealPrices from "../containers/buildingMealPrices";
import Students from "../components/Students";
import Adults from "../components/Adults";
import Reports from "../components/Reports";
import Accounting from "../components/Accounting";

const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Homepage currentUser={currentUser} {...props} />}
        />
        <Route
          exact
          path="/signin"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText="Log in"
                heading="Welcome Back."
                {...props}
              />
            );
          }}
        />
        <Route path="/buildings" component={withAuth(Buildings)} />
        <Route path="/buildingModify" component={withAuth(BuildingModify)} />
        <Route
          path="/buildingMealPrices"
          component={withAuth(buildingMealPrices)}
        />
        <Route path="/students" component={withAuth(Students)} />
        <Route path="/adults" component={withAuth(Adults)} />
        <Route path="/reports" component={withAuth(Reports)} />
        <Route path="/accounting" component={withAuth(Accounting)} />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { authUser, removeError }
  )(Main)
);
