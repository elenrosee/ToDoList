import { useState } from "react";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { SvgPlus } from "../../icons";
import { addItem } from "../../redux/items";
import { AddToDoForm, Btn, Title, Wrapper } from "./ToDoForm.styled";

export const ToDoForm = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const newItem = {
    id: uuidv4(),
    name,
    checked: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(newItem));
    setName("");
  };

  return (
    <Wrapper>
      <Title>To Do List</Title>
      <AddToDoForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          maxLength="25"
          autoComplete="off"
          placeholder="Add new task to do"
          required
        />
        <Btn type="submit">
          <SvgPlus />
        </Btn>
      </AddToDoForm>
    </Wrapper>
  );
};
