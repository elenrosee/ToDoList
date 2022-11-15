import { useDispatch, useSelector } from "react-redux";
import { SvgCheckMark, SvgTrashBin } from "../../icons";
import { changeItem, getItems, removeItem } from "../../redux/items";
import { BtnChecked, DeleteBtn, Item, ToDoName } from "./ToDoItem.styled";

export const ToDoItem = ({ item, selectedItem, setSelectedItem }) => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);

  const deleteToDo = (id) => {
    dispatch(removeItem(id));
  };

  const changeToDo = ({ checked, id }) => {
    const isChecked = checked === true ? false : true;

    const minItemsOrder = Math.min.apply(
      null,
      items.map((i) => i.order)
    );

    const newItem = {
      id,
      checked: isChecked,
      order: minItemsOrder - 1,
    };

    dispatch(changeItem(newItem));
  };

  const dragStartHandler = (e, item) => {
    setSelectedItem(item);
  };

  const dragEndHandler = (e) => {
    e.currentTarget.style.backgroundColor = "#f0f8ff";
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "transparent";
  };

  const dropHandler = (e, item) => {
    e.preventDefault();

    items.forEach((i) => {
      if (i.id === selectedItem.id) {
        dispatch(
          changeItem({
            id: selectedItem.id,
            order: item.order,
            checked: item.checked,
          })
        );
      } else if (i.id === item.id) {
        dispatch(changeItem({ id: item.id, order: item.order + 1 }));
      } else if (i.checked === item.checked && i.order > item.order) {
        dispatch(changeItem({ id: i.id, order: i.order + 1 }));
      } else {
        return;
      }
    });

    e.currentTarget.style.backgroundColor = "#f0f8ff";
  };

  return (
    <Item
      key={item.id}
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, item)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, item)}
    >
      <BtnChecked
        onClick={() => changeToDo(item)}
        className={item.checked ? "checked" : ""}
      >
        <SvgCheckMark fill={item.checked ? "white" : ""} />
      </BtnChecked>
      <ToDoName className={item.checked ? "checked" : ""}>{item.name}</ToDoName>
      <DeleteBtn onClick={() => deleteToDo(item.id)} type="submit">
        <SvgTrashBin />
      </DeleteBtn>
    </Item>
  );
};
