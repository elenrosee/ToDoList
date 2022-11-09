import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, getItems } from "../redux/items";

export const Items = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  console.log(useSelector(getItems));

  return (
    <div>
      <ul>
        <li>first</li>
        <li>second</li>
      </ul>
    </div>
  );
};
