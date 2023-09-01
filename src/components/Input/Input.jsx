import { Input, InputGroup, Button } from "reactstrap";
import "./Input.css";
import { BsSearch } from "react-icons/bs";
import { DebounceInput } from "react-debounce-input";

export const InputComp = ({ handleChange, handleClick, searchQuery }) => {
  return (
    <>
      <InputGroup>
        <DebounceInput
          className="debounce-input"
          minLength={2}
          debounceTimeout={1000}
          onChange={handleChange}
          value={searchQuery}
        />
        <Button onClick={handleClick}>
          <BsSearch />
        </Button>
      </InputGroup>
    </>
  );
};
