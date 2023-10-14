import React from "react";
import ContactMenu from "./ContactMenu";
import Profile from "../Profile-AVT/Contactpro";
import "../Styles/contact.css";
import "./Social"
import Social from "./Social";

const Contact = () => {
  return (
    <>
     <Profile page="contact" />
     <Social/>
      <ContactMenu />
    </>
  );
};

export default Contact;
