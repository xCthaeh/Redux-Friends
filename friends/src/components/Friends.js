import React from "react";
import { connect } from "react-redux";
import { deleteFriend } from "..actions";


const Friends = props => {
  return (
    <div>
      <div>{props.friend.name}</div>
      <div>{props.friend.age}</div>
      <div>{props.friend.email}</div>
      <div onClick={_ => props.setId(props.friend.id)}>edit</div>
      <div onClick={_ => props.deleteFriend(props.friend.id)}>delete</div>
    </div>
  );
};

export default connect(
  null,
  { deleteFriend }
)(Friends);
