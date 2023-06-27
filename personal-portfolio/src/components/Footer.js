import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
    const date = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/abhi.yadav1654/"><InstagramIcon /></a>
        <a href="https://www.facebook.com/profile.php?id=100076553587468"><FacebookIcon /></a>
        <a href="https://linkedin.com/in/abhishekyadav123/"><LinkedInIcon /></a>
      </div>
      <p> @copyright {date}</p>
    </div>
  );
}

export default Footer;