import React from "react";
import facebook from "../Facebook.png";
import git from "../GitHub.png";
import twitter from "../Twitter.png";
import insta from "../Instagram.png";
import link from "../Linkedin.png";

function Footer() {
  return (
    <div className="footer-container">
      <img src={twitter} alt="" />
      <img src={facebook} alt="" />
      <img src={insta} alt="" />
      <img src={link} alt="" />
      <img src={git} alt="" />
    </div>
  );
}

export default Footer;
