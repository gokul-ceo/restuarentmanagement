import React, { useState } from "react";
import styles from "./Nbillling.module.css";
import HomeHeader from "../../homeasserts/HomeHeader";
function ModernBilling() {
  function MenuCatagorylist() {
    return (
      <>
        <div className={styles.Nbmaindiv}>
          <ul>
            <li>General</li>
            <li>Dosa</li>
            <li>Lunch</li>
            <li>Indian Breads</li>
            <li>Veg Curries</li>
            <li>Starters</li>
            <li>Soup</li>
            <li>Rice Items</li>
            <li>Chat Items</li>
            <li>sweets</li>
          </ul>
        </div>
      </>
    );
  }
  return (
    <>
      <HomeHeader />
      <div className={styles.menudisplaydivmain}>
        <div className={styles.Menubox}>
          <div className={styles.Menuboxdiv1}>
            <span>Dosa</span>
          </div>
          <div className={styles.Menuboxdiv2}>
            <button>ADD</button>
          </div>
        </div>
      </div>
      <MenuCatagorylist />
    </>
  );
}

export default ModernBilling;
