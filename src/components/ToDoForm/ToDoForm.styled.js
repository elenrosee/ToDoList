import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  height: 60px;
  width: 100%;

  width: 514px;

  border-radius: 15px;
  background-color: #003d74;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media (min-width: 1100px) {
    width: 1038px;
  }
`;

export const AddToDoForm = styled.form`
  display: flex;
  position: relative;

  & input {
    background-color: #f0f8ff;
    padding: 5px 40px 5px 10px;

    border-radius: 8px;
    border: none;
    outline: none;
    height: 30px;
    width: 300px;

    &::placeholder {
      color: black;
    }
  }
`;

export const Btn = styled.button`
  background-color: #29abe2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  width: 26px;
  height: 26px;

  position: absolute;
  right: 2px;
  top: 2px;

  border-radius: 8px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const Title = styled.h1`
  color: #f0f8ff;
`;
