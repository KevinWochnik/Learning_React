import { useState } from "react";
import { ListFormWrapper } from "./ListForm.styles";
import { DefaultButton } from "../../Buttons/DefaultButton/DefaultButton.styles";

const ListForm = ({ id, type }) => {
  const [inputValue, setInputValue] = useState(1);

  const inputHandler = (e) => {
    const value = e.target.value;
    console.log(value);
    setInputValue(value);
  };

  return (
    <ListFormWrapper>
      <label htmlFor={id}>Amount</label>
      <input
        type="number"
        name={id}
        value={inputValue}
        onChange={inputHandler}
        min={1}
        max={5}
      />
      <DefaultButton type={type}>+ Add</DefaultButton>
    </ListFormWrapper>
  );
};
export default ListForm;
