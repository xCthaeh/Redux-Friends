import React from "react";
import { connect } from "react-redux";
import { deleteFriend, editingFriend } from "../actions";

const Friends = props => {
  return (
    <div className="item">
      <div className="item_text">
        {props.friend.name}, {props.friend.age}
      </div>
      <div className="item_text">{props.friend.email}</div>
      <div
        className="item_button edit"
        onClick={_ => props.editingFriend(props.friend.id)}
      >
        Edit
      </div>
      <div
        className="item_button delete"
        onClick={_ => props.deleteFriend(props.friend.id)}
      >
        Delete
      </div>
    </div>
  );
};

export default connect(
  null,
  { deleteFriend, editingFriend }
)(Friends);
