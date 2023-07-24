import React from "react";
import "../../index.css";
import styles from "./buySell.module.css";

const BuySellButton = (props) => {
    return (
        <>
            <button className={styles.card}>
            <div style={{margin:"auto", display: "flex", flexDirection:"column", marginTop:"1em"}}>
                <img src={props.imgUrl} className={styles.imageSize}
                alt={props.name}  />
                <p>{props.action} {props.symbol}</p>
            </div>
            </button>
        </>
    )

}


const BuySell = (props) => {
    console.log("sdf")
    return (
        <>
        <div className="centerItems">
            {props.coinInfo != null && (
            <div className={styles.inRow}>
                <BuySellButton 
                    imgUrl = {props.imgUrl} 
                    action="Buy" symbol={props.symbol} name={props.name}                
                />
                <BuySellButton className={styles.rightCard}
                    imgUrl = {props.imgUrl} 
                    action="Sell" symbol={props.symbol} name={props.name}   
                />
            </div>
        )}
        </div>
        </>
    )

}

export default BuySell;
