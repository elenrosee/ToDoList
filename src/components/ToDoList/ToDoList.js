import { useState } from "react";
import { useSelector } from "react-redux";
import { getItems } from "../../redux/items";
import { ToDoItem } from "../ToDoItem";
import { ItemsList, Title, Wrapper, ItemBoard } from "./ToDoList.styled";

export const ToDoList = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = useSelector(getItems);

  const checkedSortedItems = items
    ?.filter((i) => i.checked === true)
    .sort((a, b) => a.order > b.order);

  const notCheckedSortedItems = items
    ?.filter((i) => i.checked === false)
    .sort((a, b) => a.order > b.order);

  return (
    <Wrapper>
      {items.length === 0 && <Title>You have not add any tasks yet! </Title>}

      {items.length !== 0 && (
        <>
          {notCheckedSortedItems.length > 0 && (
            <ItemBoard>
              <h3>Have To Do</h3>
              <ItemsList>
                {notCheckedSortedItems.map((item) => (
                  <ToDoItem
                    key={item.id}
                    item={item}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                  />
                ))}
              </ItemsList>
            </ItemBoard>
          )}

          {checkedSortedItems.length > 0 && (
            <ItemBoard>
              <h3>Already Done</h3>
              <ItemsList>
                {checkedSortedItems.map((item) => (
                  <ToDoItem
                    key={item.id}
                    item={item}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                  />
                ))}
              </ItemsList>
            </ItemBoard>
          )}
        </>
      )}
    </Wrapper>
  );
};
