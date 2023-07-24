import React from "react";
import styles from "./BulletForGraph.css";

const BulletForGraphs = (props) => {
    return (
      <>
        <div>
        {props.coinInfo != null && (
          <ul style={{position: "relative"}}>
            <li style={{marginBottom:"-10.5em", marginTop:"-4em", marginLeft:"6em", fontWeight:"bold" }} className={styles.red_bullet}>1 {props.symbol}= $ {props.price}</li>

          <div style={{display:"flex", flexDirection:"row", marginTop:"-6em",marginBottom:"-2em", marginLeft:"6em" }} className={styles.bullet_list}>
            <li  style={{ marginRight:"4em"  }} className={styles.green_bullet}>Lower: {props.highestPriceValue}</li>
            <li className={styles.orange_bullet}>Higher: {props.lowestPriceValue}</li>
          </div>
          </ul>
    )}
        </div>
     </>
    )
  }

export default BulletForGraphs;
