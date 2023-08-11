import { Input, InputGroup , Button } from "reactstrap" ;
import './Input.css';
import  { BsSearch } from 'react-icons/bs';
// import { FaBeer } from "react-icons/fa";

export const InputComp = ({handleChange, handleClick}) => {
    return (
      <>
        <InputGroup>
          <Input onChange={handleChange} />
          <Button onClick={handleClick} ><BsSearch/></Button>
        </InputGroup>
      </>
    );
}