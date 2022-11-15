import { useDispatch } from "react-redux";
import { SvgCheckMark, SvgTrashBin } from "../../icons";
import { changeItem, changeItemsOrder, removeItem } from "../../redux/items";
import { BtnChecked, DeleteBtn, Item, ToDoName } from "./ToDoItem.styled";

export const ToDoItem = ({ item, selectedItem, setSelectedItem }) => {
  const dispatch = useDispatch();
  const deleteToDo = (item) => {
    dispatch(removeItem(item));
  };

  const changeToDo = (item) => {
    const isChecked = item.checked === true ? false : true;

    dispatch(changeItem({ ...item, checked: isChecked }));
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

    dispatch(
      changeItemsOrder({
        selectedItem,
        item,
      })
    );

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
      <DeleteBtn onClick={() => deleteToDo(item)} type="submit">
        <SvgTrashBin />
      </DeleteBtn>
    </Item>
  );
};
