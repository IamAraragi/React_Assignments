import React, { Component } from "react";
import UserInfo from "./UserInfo";
import Comment from "./Comment";

export class Profile extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.author);
    return (
      <div className="profile">
        <UserInfo user={this.props.author} />
        <Comment text={this.props.text} date={this.props.date} />
      </div>
    );
  }
}

export default Profile;
