import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchFriends } from "./actions";
import FriendsList from "./components/FriendsList";
import CreateFriendForm from "./components/CreateFriendForm";
import UpdateFriendForm from "./components/UpdateFriendForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      id: null,
      update: false
    };
  }
  componentDidMount() {
    this.props.fetchFriends();
  }
  addFriend = friend => {
    axios.post("http://localhost:5000/api/friends", friend).then(res => {
      this.setState({ friends: res.data });
    });
  };
  setId = id => {
    this.setState({
      id,
      update: true
    });
  };
  updateFriend = friend => {
    axios
      .put(`http://localhost:5000/api/friends/${this.state.id}`, friend)
      .then(res => {
        this.setState({ friends: res.data, update: false });
      });
  };
  deleteFriend = id => {
    axios.delete(`http://localhost:5000/api/friends/${id}`).then(res => {
      this.setState({ friends: res.data });
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Lambda Friends List</h1>
        {!this.props.editingFriend ? (
          <>
          <h2>Add a Friend</h2>
          <CreateFriendForm addFriend={this.addFriend} />
        </>
          ) : (
          <>
            <h2>Edit</h2>
            <UpdateFriendForm updateFriend={this.updateFriend} />
          </>
        )}
        {!this.props.fetchingFriends ? (
          <FriendsList
            deleteFriend={this.deleteFriend}
            setId={this.setId}
            id={this.state.id}
          />
        ) : (
          <div>LOADING...</div>
        )}
      </div>
    );
  }
}

const mstp = state => {
  return {
    fetchingFriends: state.friendsReducer.fetchingFriends,
    editingFriend: state.friendsReducer.editingFriend
  };
};

export default connect(
  mstp,
  { fetchFriends }
)(App);
