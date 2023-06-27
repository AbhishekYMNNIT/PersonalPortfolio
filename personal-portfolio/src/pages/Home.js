import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Abhishek Yadav</h2>
        <div className="prompt">
          <p>A newbie with a passion for learning and creating.</p>
          <a href="https://linkedin.com/in/abhishekyadav123/"><LinkedInIcon /></a>
          <a href="https://abhishekydv9528@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/AbhishekYMNNIT"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;