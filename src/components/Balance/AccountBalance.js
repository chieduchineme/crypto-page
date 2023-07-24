const Assets = (props) => {
    const accountBalance = `$${props.asset} USD`;

        // write code for formating and redux-toolkit for currency exchange
    return (
        <p style={{color:"#929395"}}>{accountBalance}</p>
    )
}

export default Assets;