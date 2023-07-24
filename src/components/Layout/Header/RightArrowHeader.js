import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import LeftArrowIcon from "../../../assets/LeftArrowIcon";
import {Dropdown, DropdownButton} from 'react-bootstrap';

function RightArrowHeader() {
  return (
    <>
    <div style={{display:"none", flexDirection:"row", }}>
      <DropdownButton id="dropdown-basic-button" title={<LeftArrowIcon size={24} />}>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
      <DropdownButton id="dropdown-basic-button" title={<LeftArrowIcon size={24} />}>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </div>
    </>
  );
}

export default RightArrowHeader;
