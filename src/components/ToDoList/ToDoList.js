import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeItem, getItems } from "../../redux/items";
import { ToDoItem } from "../ToDoItem";
import {
  ItemsList,
  Title,
  Wrapper,
  ItemBoard,
  BoardTitle,
} from "./ToDoList.styled";

export const ToDoList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const items = useSelector(getItems);

  const sorted = (arr) => {
    return arr.sort((a, b) => {
      if (a.order < b.order) {
        return 1;
      } else if (a.order > b.order) {
        return -1;
      } else return 0;
    });
  };

  const checkedItems = items?.filter((i) => i.checked === true);

  const notCheckedItems = items?.filter((i) => i.checked === false);

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const boardDropHandler = (e, checked) => {
    e.preventDefault();

    if (e.target.nodeName === "DIV") {
      dispatch(changeItem({ ...selectedItem, checked }));
    }
  };

  return (
    <Wrapper>
      {items.length === 0 && <Title>You have not add any tasks yet! </Title>}

      {items.length !== 0 && (
        <>
          <ItemBoard
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => boardDropHandler(e, false)}
          >
            <BoardTitle>Have To Do</BoardTitle>
            {notCheckedItems.length > 0 && (
              <ItemsList>
                {sorted(notCheckedItems).map((item) => (
                  <ToDoItem
                    key={item.id}
                    item={item}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                  />
                ))}
              </ItemsList>
            )}
          </ItemBoard>
          <ItemBoard
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => boardDropHandler(e, true)}
          >
            <BoardTitle>Already Done</BoardTitle>
            {checkedItems.length > 0 && (
              <ItemsList>
                {sorted(checkedItems).map((item) => (
                  <ToDoItem
                    key={item.id}
                    item={item}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                  />
                ))}
              </ItemsList>
            )}
          </ItemBoard>
        </>
      )}
    </Wrapper>
  );
};
