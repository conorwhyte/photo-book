import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { listItemsInFolder } from "../services/listItemsInFolder";
import { selectItems } from "../albumSlice";

export const useAlbum = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);

  useEffect(() => {
    dispatch(listItemsInFolder());
  }, [dispatch]);

  return {
    items,
  };
};
