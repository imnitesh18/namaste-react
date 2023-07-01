import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionlComponent from "./Profile";
import Profile from "./ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent - constructor");
  }
  componentDidMount() {
    // console.log("Parent - componentDidMount");
  }
  render() {
    // console.log("parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        {/* <Profile name={"First Child"} xyz="abc" /> */}
        <Profile />
      </div>
    );
  }
}
export default About;
