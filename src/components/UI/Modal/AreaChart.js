import React, { useState, useEffect, useMemo } from "react";
import styles from "./Modal.module.css";
import Chart from "./Chart/Chart";
import { Chip } from "@mui/material";

const Cards = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

const ChartComponent = (props) => {
  // Rest of the component remains the same...
  const fullDateHistory = useMemo(
  () => (props.coinHistory?.prices ? props.coinHistory.prices.map((date) => new Date(date[0]).toLocaleDateString()) : []),
  [props.coinHistory?.prices]
);

const fullPriceHistory = useMemo(() => (props.coinHistory?.prices ? props.coinHistory.prices.map((date) => date[1]) : []), [
  props.coinHistory?.prices,
]);

  const [time, setTime] = useState(7);
  const [dateHistory, setDateHistory] = useState(fullDateHistory.slice(365 - time));
  const [priceHistory, setPriceHistory] = useState(fullPriceHistory.slice(365 - time));

  useEffect(() => {
    setDateHistory(fullDateHistory.slice(365 - time));
    setPriceHistory(fullPriceHistory.slice(365 - time));
  }, [time, fullDateHistory, fullPriceHistory]);

  return (
    <div>
    {props.coinInfo != null && (
      <>
        <div style={{ marginTop: "-2em", marginLeft: "6.5em" }}>
          <Chip
            label="Day"
            variant={time === 1 ? "filled" : "outlined"}
            onClick={() => setTime(1)}
            sx={{ marginRight: "3em", border: "none" }} />
          <Chip
            label="Week"
            variant={time === 7 ? "filled" : "outlined"}
            onClick={() => setTime(7)}
            sx={{ marginRight: "3em", border: "none" }} />
          <Chip
            label="Month"
            variant={time === 30 ? "filled" : "outlined"}
            onClick={() => setTime(30)}
            sx={{ marginRight: "3em", border: "none" }} />
          <Chip
            label="Year"
            variant={time === 365 ? "filled" : "outlined"}
            onClick={() => setTime(365)}
            sx={{ marginRight: "0em", border: "none" }} />
        </div>
        <Cards>
          <Chart xLabels={dateHistory} yLabels={priceHistory} name={props.coinInfo?.name} />
        </Cards>
      </>
    )}
    </div>
  );
};

export default ChartComponent;