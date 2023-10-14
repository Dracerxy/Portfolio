import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/propic.png";
import "../Styles/avatar.css";

const Profile = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarImage} className={avatarClass} style={{height:"140%"}} alt="avatar" />
    </>
  );
};

Profile.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Profile;
