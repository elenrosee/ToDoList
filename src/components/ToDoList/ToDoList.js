import { useSelector } from "react-redux";
import { getItems } from "../../redux/items";
import { ToDoItem } from "../ToDoItem";
import { ItemsList, Title, Wrapper } from "./ToDoList.styled";

export const ToDoList = () => {
  const items = useSelector(getItems);

  return (
    <Wrapper>
      {items.length === 0 && <Title>You have not add any tasks yet! </Title>}

      {items.length !== 0 && (
        <>
          <ItemsList>
            {items.filter((i) => i.checked === false).length === 0 && (
              <li>
                <Title>Congratulations! You completed all the tasks!</Title>
              </li>
            )}
            {items
              .filter((i) => i.checked === false)
              .sort((a, b) => a.date < b.date)
              .map((item) => (
                <ToDoItem key={item.id} item={item} />
              ))}
          </ItemsList>
          <ItemsList>
            {items.filter((i) => i.checked === true).length === 0 && (
              <Title>You have not completed any tasks yet!</Title>
            )}
            {items
              .filter((i) => i.checked === true)
              .sort((a, b) => a.date < b.date)
              .map((item) => (
                <ToDoItem key={item.id} item={item} />
              ))}
          </ItemsList>
        </>
      )}
    </Wrapper>
  );
};
