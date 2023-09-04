import type { FC } from "react";
import update from "immutability-helper";
import { useCallback, useState } from "react";
import type { XYCoord } from "react-dnd";
import { useDrop } from "react-dnd";
import { Folder, type DraggableBox } from "./folder/folder";
import { makeStyles } from "@griffel/react";

export interface DragItem extends DraggableBox {
  type: string;
  id: string;
}

const useClasses = makeStyles({
  desktop: {
    height: "100%",
  },
});

export const Desktop: FC = () => {
  const styles = useClasses();

  const [boxes, setBoxes] = useState<{
    [key: string]: DraggableBox;
  }>({
    firstFolder: { top: 60, left: 50 },
    secondFolder: { top: 60, left: 180 },
  });

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      );
    },
    [boxes, setBoxes],
  );

  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);

        moveBox(item.id, left, top);
      },
    }),
    [moveBox],
  );

  return (
    <div ref={drop} className={styles.desktop}>
      {Object.keys(boxes).map((key) => (
        <Folder key={key} id={key} {...boxes[key]} />
      ))}
    </div>
  );
};
