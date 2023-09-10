import {
  DesktopItem,
  selectItemWithName,
  selectItems,
  selectSelectedItem,
  selectedItemUpdated,
} from "../../desktopSlice";
import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useDrag } from "react-dnd";

export type Position = {
  top: number;
  left: number;
};

export interface DragItem extends Position {
  type: string;
  id: string;
}

interface UseFolderParams {
  name: string;
}

export const useFolder = ({ name }: UseFolderParams) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);
  const selectedItem = useAppSelector(selectSelectedItem);
  const item = selectItemWithName(items, name);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "box",
      item: { id: name, ...item.position },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [item, name],
  );

  return {
    context: {
      isSelected: useMemo(() => selectedItem === name, [name, selectedItem]),
      isDragging,
      ...item,
    },
    handlers: {
      drag,
      onSelect: useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        switch (e.detail) {
          case 1:
            // Select folder
            dispatch(selectedItemUpdated(name));
            break;
          case 2:
            // Go to folder
            break;
        }
      }, []),
    },
  };
};
