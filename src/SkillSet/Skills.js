import React, { Component } from "react";
import SkillsMenu from "./SkillsMenu.js";
import Profile from "../Profile-AVT/Skill";
export default class About extends Component {
  render() {
    return (
      <>
        <Profile page="skills" />
        <SkillsMenu />
      </>
    );
  }
}
