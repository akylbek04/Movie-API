import { Navbar, NavbarBrand } from "reactstrap";
import "./Navbar.css";
import { InputComp } from "../Input/Input";
import DropdownComponent from "../Dropdown/Dropdown";
import { AiOutlineFolderOpen, AiOutlineFolder } from "react-icons/ai";

export const NavbarComp = ({
  handleChange,
  handleClick,
  handleFilter,
  searchQuery,
  handleFavRender,
  favRendered,
}) => {
  return (
    <>
      <Navbar color="dark" dark>
        <NavbarBrand href="/">
          <img
            className="me-3 img"
            alt="logo"
            src="https://illustoon.com/photo/5005.png"
            style={{
              height: 40,
              width: 40,
            }}
          />
          Movie API
        </NavbarBrand>
        <InputComp
          handleChange={handleChange}
          handleClick={handleClick}
          searchQuery={searchQuery}
        />
        {favRendered ? (
          <AiOutlineFolderOpen onClick={handleFavRender} className="fav-icon" />
        ) : (
          <AiOutlineFolder onClick={handleFavRender} className="fav-icon" />
        )}
        <DropdownComponent handleFilter={handleFilter} />
      </Navbar>
    </>
  );
};
