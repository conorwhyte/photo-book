import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { listItemsInFolder } from "../services/listItemsInFolder";
import { selectItems, selectLoading } from "../albumSlice";

export const useAlbum = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(listItemsInFolder());
  }, [dispatch]);

  return {
    loading,
    items,
  };
};
