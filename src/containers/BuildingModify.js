import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBuildings, removeBuilding } from "../store/actions/buildings";
import BuildingItem from "../components/BuildingItem";

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }
  render() {
    const { buildings, removeBuilding, currentUser } = this.props;
    let buildingList = buildings.map(msg => (
      <BuildingItem
        key={msg._id}
        date={msg.createAt}
        text={msg.text}
        username={msg.user.username}
        removeBuilding={removeBuilding.bind(this, msg.user._id, msg._id)}
        isCorrectUser={currentUser === msg.user._id}
      />
    ));
    return (
      <div className="row col-sm-8">
        <div className="offset-1 col-sm-10">
          <ul className="list-group" id="buildings">
            {buildingList}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    buildings: state.buildings,
    currentUser: state.currentUser.user.id
  };
}

export default connect(
  mapStateToProps,
  { fetchBuildings, removeBuilding }
)(MessageList);
