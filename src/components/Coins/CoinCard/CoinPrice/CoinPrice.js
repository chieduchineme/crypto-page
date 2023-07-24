import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import Assets from "../../../Balance/AccountBalance";
import styles from "./CoinPrice.module.css";
import { Chip } from "@mui/material";

const CoinPrice = (props) => {
  const asset = 90000.0;
  const priceIsUp = props.priceChange >= 0;
  const assetAsCoin = asset/props.price;
  return (
    <div className={styles.price}>
      <h3>
        {assetAsCoin.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 4,
        })}
        {props.symbol.toUpperCase()}{" "}
      </h3>
      <div style={{display:"flex", flexDirection:"row"}}>
        <Assets asset={asset}/>
        <Chip
        label={
          <p style={{marginTop:"1em"}}>
            {priceIsUp ? <BsFillCaretUpFill color="white" /> : <BsFillCaretDownFill color="white" />}
            <span style={{ color: priceIsUp ? "#2cb362" : "white" }}>
              {props.priceChange && props.priceChange.toFixed(2)}%
            </span>{" "}
          </p>
        }
        style={{
          backgroundColor: priceIsUp ? "#e1f7e0" : "rgb(118 13 22)",
          marginLeft: "12em",
          color: "white",
          fontWeight: "bold",
          borderRadius: "20px",
          paddingRight: "5px",
          marginBottom: "2px"
        }}
      />
      </div>

      

    </div>
  );
};

export default CoinPrice;
