import styles from "./CoinInfo.module.css";

const CoinInfo = (props) => {
  return (
    <div className={styles["coin-info"]}>
      <img
        src={props.imgUrl}
        alt={`${props.name} crypto logo`}
        className={styles.logo}
      />
      <h2 >  {props.name}   </h2>
      <h3 className={styles.name}>{props.symbol.toUpperCase()}</h3>
    </div>
  );
};

export default CoinInfo;
