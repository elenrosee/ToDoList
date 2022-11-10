import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  margin-top: 10px;
`;

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  font-size: 20px;
  width: 490px;
  color: #003d74; ;
`;
