import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function DropdownComponent({ direction, handleFilter }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-0">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Filter by</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => handleFilter("movies")}>
            movies
          </DropdownItem>
          <DropdownItem onClick={() => handleFilter("series")}>series</DropdownItem>
          <DropdownItem onClick={() => handleFilter("new")}>
            new
          </DropdownItem>
          <DropdownItem onClick={() => handleFilter("order")}>
            title
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default DropdownComponent;
