import React, { Component } from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    // console.log("child - constructor" + this.props.name);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      // console.log("Namste react op");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("ComponentDidupdate");
  }
  componentWillUnmount() {
    // console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    const { count } = this.state;
    console.log("child - render" + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}
export default Profile;
