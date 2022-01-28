import React, { Component } from "react";
import Avatar from "./Avatar";

export class UserInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="user-info">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">{this.props.user.name}</div>
      </div>
    );
  }
}

export default UserInfo;
