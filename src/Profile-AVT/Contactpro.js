import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/contactpro.png";
import "../Styles/avatar.css";

const ContactProfile = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarImage} className={avatarClass} alt="avatar" />
    </>
  );
};

ContactProfile.propTypes = {
  page: PropTypes.string.isRequired,
};

export default ContactProfile;
