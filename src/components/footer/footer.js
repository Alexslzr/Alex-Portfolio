import React from "react";
import "./footer.css"

function Footer({ currentPage}) {
    return (
        <footer className={currentPage !== 'Portfolio' ? "d-flex align-items-center justify-content-sm-center fixed-bottom" : "d-flex align-items-center justify-content-sm-center"}>
            <a href="https://github.com/Alexslzr/" target="_blank">
                <img  src={require("../../Images/github-mark.png")} alt="github-logo"></img>
            </a>
            <a href="https://www.linkedin.com/in/alejandro-salazar-lopez/" target="_blank">
                <img src={require("../../Images/LI-In-Bug.png")} alt="linkedin-logo"></img>
            </a>
            <a href="mailto:alejandroslzr17@gmail.com" target="_blank">
                <img src={require("../../Images/gmail.png")} alt="linkedin-logo"></img>
            </a>
        </footer>
    )
}

export default Footer;