"use client"
// src/components/navbar/Navbar.js
import React from "react";
import Button from "../button/button";
import styles from "./navbar.module.css"; // Correct import for CSS Modules

export default function Navbar() {
  const navbarItems = ["Home", "About", "New Post"];
  const displayNavbarItems = navbarItems.map((item, index) => (
    <li className={styles.item} key={index}>  {/* Accessing class via styles */}
      <a href={`#${item.toLowerCase().replace(" ", "-")}`} className={styles.link}>
        {item}
      </a>
    </li>
  ));

  return (
    <nav className={styles.navbar}>  {/* Accessing class via styles */}
      <div className={styles.navbarLogo}>
        <a href="#" className={styles.logo}>LOGO</a>
      </div>
      <div className={styles.items}>
        <ul>
          {displayNavbarItems}
        </ul>
      </div>
      <div className={styles.registerNowButton}>
        <Button label="Click on Me" />
      </div>
    </nav>
  );
}
