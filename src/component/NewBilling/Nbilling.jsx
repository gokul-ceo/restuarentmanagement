import React, { useState } from "react";
import styles from "./Nbillling.module.css";
import search from "./search.svg";
import HomeHeader from "../../homeasserts/HomeHeader";
import Menubox from "./Menubox";
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
        <div className={styles.searchbar}>
          <input type="text" />
          <img src={search} alt="search" />
        </div>
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <Menubox />
        <div style={{ height: "200px" }}></div>
      </div>
      <div className={styles.checkoutdiv}>
        <span>checkout</span>
      </div>
      <MenuCatagorylist />
    </>
  );
}

export default ModernBilling;
