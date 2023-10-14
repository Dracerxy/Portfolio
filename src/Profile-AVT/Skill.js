import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/abtpro.png";
import "../Styles/avatar.css";

const SkillProfile = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarImage} className={avatarClass} alt="avatar" />
    </>
  );
};

SkillProfile.propTypes = {
  page: PropTypes.string.isRequired,
};

export default SkillProfile;
