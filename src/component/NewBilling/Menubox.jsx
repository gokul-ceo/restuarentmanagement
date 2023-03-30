import React, { useState } from "react";
import add from "./plus.svg";
import sub from "./minus.svg";
import styles from "./Nbillling.module.css";
function Menubox(props) {
  const [quantity, setquantity] = useState(0);
  const handlequantitychange = (e) => {
    setquantity(e.target.value);
  };
  const addquantity = () => {
    setquantity(quantity + 1);
  };
  const subquantity = () => {
    if (quantity !== 0) {
      setquantity(quantity - 1);
    }
  };
  return (
    <>
      <div className={styles.Menubox}>
        <div className={styles.Menuboxdiv1}>
          <span>Veg Kothu Parrota</span>
        </div>
        <div className={styles.Menuboxdiv2}>
          <div className={styles.quantitydivm}>
            <img onClick={addquantity} src={add} alt="add" />
            <input
              value={quantity}
              onChange={handlequantitychange}
              type="number"
            />
            <img onClick={subquantity} src={sub} alt="sub" />
          </div>
          <button>ADD</button>
        </div>
      </div>
    </>
  );
}

export default Menubox;
