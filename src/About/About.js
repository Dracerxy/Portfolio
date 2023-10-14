import React, { Component } from "react";
import Profile from "../Profile-AVT/Profile";
import AboutMenu from "./AboutMenu.js";

export default class About extends Component {
  render() {
    return (
      <>
        <Profile page="about" />
        <AboutMenu />
      </>
    );
  }
}
