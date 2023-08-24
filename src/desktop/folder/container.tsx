import type { CSSProperties, FC } from "react";
import update from "immutability-helper";
import { useCallback, useState } from "react";
import type { XYCoord } from "react-dnd";
import { useDrop } from "react-dnd";
import { Folder } from "./folder";

const styles: CSSProperties = {
  width: "5000px",
  height: "5000px",
};

export const ItemTypes = {
  BOX: "box",
};

export interface DragItem {
  type: string;
  id: string;
  top: number;
  left: number;
}

export interface ContainerState {
  boxes: { [key: string]: { top: number; left: number; title: string } };
}

export const Container: FC = () => {
  const [boxes, setBoxes] = useState<{
    [key: string]: {
      top: number;
      left: number;
    };
  }>({
    firstFolder: { top: 20, left: 50 },
    secondFolder: { top: 20, left: 170 },
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
      accept: ItemTypes.BOX,
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
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => {
        const { left, top } = boxes[key] as {
          top: number;
          left: number;
        };

        return <Folder key={key} id={key} left={left} top={top} />;
      })}
    </div>
  );
};
