import React from "react";

let styles = {
    image: {
        height: '50px',
        justifyContent: 'center',
        marginRight: '50px',
        opacity: '0.75',
        marginBottom: '30px',
        marginTop: '30px'
    },
}


function Footer() {
    return (
        <footer className="d-flex align-items-center justify-content-sm-center" >
            <a href="https://github.com/Alexslzr/" target="_blank">
                <img style={styles.image} src={require("../github-mark.png")} alt="github-logo"></img>
            </a>
            <a href="https://www.linkedin.com/in/alejandro-salazar-lopez/" target="_blank">
                <img style={styles.image}src={require("../LI-In-Bug.png")} alt="linkedin-logo"></img>
            </a>
            <a href="https://www.linkedin.com/in/alejandro-salazar-lopez/" target="_blank">
                <img style={styles.image}src={require("../gmail.png")} alt="linkedin-logo"></img>
            </a>
        </footer>
    )
}

export default Footer;