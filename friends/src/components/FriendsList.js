import React from "react";
import Friends from "./Friends";

const FriendsList = props => {
  return (
    <div>
      {props.friends.map((friend, i) => {
        return <Friends key={`friends-${i}`} friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
