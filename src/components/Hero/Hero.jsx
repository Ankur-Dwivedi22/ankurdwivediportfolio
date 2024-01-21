import React from "react";
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css";


export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Ankur Dwivedi
            </h1>
            <p className={styles.description}>
                I' m a full stack developer using React and NodeJS. Reach out if you'd like to hire me.
            </p>
            <a href="../../../assets/hero/AnkurDwivedi_CV.pdf"  download="AnkurDwivedi_CV" className={styles.contactBtn}>My Resume</a>

        </div>

            <img src={getImageUrl("hero/profile-pic2.png")} alt="hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>;
};