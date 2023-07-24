import styles from "./CoinCard.module.css";
import CoinInfo from "./CoinInfo/CoinInfo";
import CoinPrice from "./CoinPrice/CoinPrice";
import SearchForCoin from "./SearchForCoin/SearchForCoin";
import React, {useState} from "react";
import "../../../index.css";

const CoinCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
      <div className={`${styles.card} ${isExpanded ? styles.expandedCard : ""}`}>
        <CoinInfo
          name={props.name}
          imgUrl={props.imgUrl}
          symbol={props.symbol}
        />

        <CoinPrice
          currency={props.currency}
          symbol={props.symbol}
          price={props.price}
          priceIsUp={props.priceChange >= 0}
          priceChange={props.priceChange}
          asset = {props.asset}
        />
        <SearchForCoin 
          handleSearchChange={props.handleSearchChange} isExpanded={isExpanded} expandCard={expandCard}
        />
      </div>
  );
};

export default React.memo(CoinCard);
