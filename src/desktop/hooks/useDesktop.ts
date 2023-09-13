import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  itemPositionUpdated,
  selectItemWithName,
  selectItems,
} from "../desktopSlice";
import type { XYCoord } from "react-dnd";
import { useDrop } from "react-dnd";
import { Position } from "../folder/hooks/useFolder";
import { listFolders } from "../services/listFolder";
import { updateFolder } from "../services/createFolder";

export interface DragItem extends Position {
  type: string;
  id: string;
}

export const useDesktop = () => {
  const items = useAppSelector(selectItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listFolders());
  }, [dispatch]);

  const moveItem = useCallback(
    (name: string, left: number, top: number) => {
      const item = selectItemWithName(items, name);

      dispatch(updateFolder({ id: item.id, name, position: { left, top } }));
      dispatch(itemPositionUpdated({ name, position: { left, top } }));
    },
    [dispatch, items],
  );

  const [, canvas] = useDrop(
    () => ({
      accept: "box",
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);

        moveItem(item.id, left, top);
      },
    }),
    [moveItem],
  );

  return {
    items,
    canvas,
  };
};
