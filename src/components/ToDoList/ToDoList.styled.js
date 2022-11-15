import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;

  @media (min-width: 1100px) {
    display: flex;
  }
`;

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  font-size: 20px;
  color: #003d74; ;
`;

export const ItemBoard = styled.div`
  border: solid 2px #003d74;
  border-radius: 20px;
  overflow: hidden;

  margin-bottom: 10px;

  width: 514px;
  min-height: 280px;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media (min-width: 1100px) {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const BoardTitle = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 0 20px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #003d74;
`;
