import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import linkedin from "../assets/in.png";
import git from "../assets/git.png";
import instagram from "../assets/instagram.png";
import envelope from "../assets/envelope.png";
import "../Styles/contact_links.css";

export default function Social() {
 

  return (
    <div>
        <h1 class="ct-heading">Contact</h1>
        <nav className="ct">
            <a href="https://www.linkedin.com/in/sri-ganesan-m-b5b6631a0/" target="_blank"><img src={linkedin}/></a>
            <a href="https://github.com/Dracerxy" target="_blank"><img src={git}/></a>
            <a href="https://instagram.com/__sri__ganesan__m?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr" target="_blank"><img src={instagram}/></a>
            
        </nav>
        <h1 class="ct-split">________________OR_________________</h1>
    </div>
  );
}
