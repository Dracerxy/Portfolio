import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/projectpro.png";
import "../Styles/avatar.css";

const ProjectProfile = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarImage} className={avatarClass} alt="avatar" />
    </>
  );
};

ProjectProfile.propTypes = {
  page: PropTypes.string.isRequired,
};

export default ProjectProfile;
