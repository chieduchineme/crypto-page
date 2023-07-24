import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { useMediaQuery } from "react-responsive";
// import logo from "../../../assets/RankMath_logo.svg";
import "./Header.css";
import "../../../index.css";
import LeftArrowIcon from "../../../assets/LeftArrowIcon";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ThreeDotsHeader = (props) => {
  // const isMobile = useMediaQuery({ maxWidth: 876 }); // Set the maximum width for mobile devices

  const iconStyle = {
    border: "none",
    padding: 0,
    background: "transparent",
  };

  return (
    <div className="centerItems headerBackground">
      <DropdownButton id="dropdown-basic-button" variant="outline-light" title={<LeftArrowIcon size={24} style={iconStyle} />}>
          <Dropdown.Item >Market</Dropdown.Item>
          <Dropdown.Item >Trade</Dropdown.Item>
          <Dropdown.Item >Transfer</Dropdown.Item>
      </DropdownButton>
      <div className='nameStyles'>
        {props.coinName} Wallet
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="outline-dark" className="dropdown-toggle" style={iconStyle}>
          <BsThreeDotsVertical size={24} style={iconStyle} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.setCurrency("USD")}>
            USD ($)
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.setCurrency("EUR")}>
            EUR (€)
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.setCurrency("GBP")}>
            GBP (£)
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.setCurrency("JPY")}>
            YEN (¥)
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.setCurrency("BRL")}>
            BRL (R$)
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.setCurrency("CNY")}>
            CNY (¥)
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ThreeDotsHeader;
