import React from "react";
import styles from "./BulletForGraph.css";

const BulletForGraphs = (props) => {
    return (
      <>
        {props.coinInfo !== null && (
          <ul className={styles.ul}>
            <li className={styles.red_bullet}>1 {props.symbol}= $ {props.price}</li>

          <div className={styles.bullet_list}>
            <li  style={{ marginRight:"4em"  }} className={styles.green_bullet}>Lower: {props.highestPriceValue}</li>
            <li className={styles.orange_bullet}>Higher: {props.lowestPriceValue}</li>
          </div>
          </ul>

      )}
     </>
    )
  }

export default BulletForGraphs;
