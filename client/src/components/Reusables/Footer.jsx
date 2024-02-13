import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>Copyright © {new Date().getFullYear()}</div>
  );
};

export default Footer;
