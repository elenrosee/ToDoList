import { useState } from "react";
import { useDispatch } from "react-redux";
import { SvgCheckMark, SvgTrashBin } from "../../icons";
import { changeItem, removeItem } from "../../redux/items";
import { BtnChecked, DeleteBtn, InputForm, Item } from "./ToDoItem.styled";

export const ToDoItem = ({ item }) => {
  const { name, id, checked } = item;
  const [toDo, setToDo] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setToDo(value);
  };

  const deleteToDo = () => {
    dispatch(removeItem(id));
  };

  const changeToDo = () => {
    const isChecked = checked === true ? false : true;

    const newItem = {
      id,
      checked: isChecked,
      name: toDo || name,
      date: Date.parse(new Date()),
    };

    dispatch(changeItem(newItem));
    setToDo("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id,
      name: toDo,
      date: Date.parse(new Date()),
    };

    dispatch(changeItem(newItem));
    setToDo("");
  };

  return (
    <Item>
      <BtnChecked
        onClick={() => changeToDo()}
        className={checked ? "checked" : ""}
      >
        <SvgCheckMark fill={checked ? "white" : ""} />
      </BtnChecked>
      <InputForm onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          maxLength="25"
          autoComplete="off"
          placeholder={name}
          onChange={handleChange}
        />
      </InputForm>
      <DeleteBtn onClick={() => deleteToDo()} type="submit">
        <SvgTrashBin />
      </DeleteBtn>
    </Item>
  );
};
