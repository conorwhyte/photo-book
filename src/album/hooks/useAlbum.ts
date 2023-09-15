import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { listItemsInFolder } from "../services/listItemsInFolder";
import {
  selectImageLoadPercent,
  selectItems,
  selectLoading,
} from "../albumSlice";

export const useAlbum = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);
  const loading = useAppSelector(selectLoading);
  const imageLoadPercent = useAppSelector(selectImageLoadPercent);

  useEffect(() => {
    dispatch(listItemsInFolder());
  }, [dispatch]);

  return {
    loading,
    imageLoadPercent,
    items,
  };
};
