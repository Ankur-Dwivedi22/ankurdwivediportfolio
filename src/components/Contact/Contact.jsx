import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to contact me</p>  
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:dwivediankur245@gmail.com">Email me</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
                <a href="https://www.linkedin.com/in/ankur-dwivedi-a82463258/">ankur-dwivedi</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://github.com/Ankur-Dwivedi22">Ankur-Dwivedi22</a>
            </li>
        </ul>
    </footer>
};