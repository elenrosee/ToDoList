import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchItems, getItems } from "../redux/items";
import { ToDoForm } from "./ToDoForm";

export const Items = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const items = useSelector(getItems);

  return (
    <div>
      <ToDoForm />
      <ul>
        {items.map((i) => {
          return (
            <li key={i.id}>
              <h3>{i.name}</h3>
              <p>{i.number}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
