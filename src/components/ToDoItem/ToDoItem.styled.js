import styled from "styled-components";

export const Item = styled.li`
  width: 490px;
  height: 50px;
  list-style: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;

  padding: 20px;

  border-radius: 15px;
  background-color: #f0f8ff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  cursor: grab;
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 25px;
    height: 25px;
  }
`;

export const BtnChecked = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;

  border-radius: 8px;
  border: 1.5px solid gray;
  background-color: transparent;

  &.checked {
    border-color: #29abe2;
    background-color: #29abe2;
  }

  & svg {
    width: 14px;
    height: 14px;
  }
`;

export const ToDoName = styled.h4`
  border: none;
  outline: none;
  width: 350px;
  color: rgba(36, 36, 36, 1);

  &.checked {
    color: rgba(36, 36, 36, 0.5);
    position: relative;
    text-decoration: line-through 2px;
  }
`;
