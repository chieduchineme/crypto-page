import React from "react";
import styles from "./BulletForGraph.css";

const BulletForGraphs = (props) => {
    return (
      <>
        {props.coinInfo !== null && (
          <ul>
            <li style={{marginBottom:"-6em", marginLeft:"6em", fontWeight:"bold" }} className={styles.red_bullet}>1 {props.symbol}= $ {props.price}</li>

          <div style={{display:"flex", flexDirection:"row", marginTop:"-2em",marginBottom:"-10em", marginLeft:"6em" }} className={styles.bullet_list}>
            <li  style={{ marginRight:"4em"  }} className={styles.green_bullet}>Lower: {props.highestPriceValue}</li>
            <li className={styles.orange_bullet}>Higher: {props.lowestPriceValue}</li>
          </div>
          </ul>

      )}
     </>
    )
  }

export default BulletForGraphs;