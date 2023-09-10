import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { itemPositionUpdated, selectItems } from "../desktopSlice";
import type { XYCoord } from "react-dnd";
import { useDrop } from "react-dnd";
import { Position } from "../folder/hooks/useFolder";

export interface DragItem extends Position {
  type: string;
  id: string;
}

export const useDesktop = () => {
  const items = useAppSelector(selectItems);
  const dispatch = useAppDispatch();

  const moveItem = useCallback(
    (id: string, left: number, top: number) => {
      dispatch(itemPositionUpdated({ name: id, position: { left, top } }));
    },
    [dispatch],
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
