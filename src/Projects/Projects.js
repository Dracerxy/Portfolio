import React, { Component } from "react";
import ProjectsMenu from "./ProjectsMenu";
import Profile from "../Profile-AVT/Project";
export default class Projects extends Component {
  render() {
    return (
      <>
        <Profile page="project"/>
        <ProjectsMenu />
      </>
    );
  }
}
