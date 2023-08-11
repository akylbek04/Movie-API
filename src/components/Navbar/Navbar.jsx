import { Navbar, NavbarBrand } from "reactstrap"; 
import './Navbar.css';
import { InputComp } from "../Input/Input";

export const NavbarComp = ({ handleChange, handleClick }) => {
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
          <InputComp handleChange={handleChange} handleClick={handleClick} />
        </Navbar>
      </>
    );
}