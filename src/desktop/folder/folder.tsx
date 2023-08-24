import React from "react";
import { makeStyles, shorthands } from "@griffel/react";
import FolderIcon from "./folder.svg";
import { ItemTypes } from "./container";
import { useDrag } from "react-dnd";

const useClasses = makeStyles({
  container: {
    height: "117px",
    width: "96px",
    display: "flex",
    cursor: "pointer",
    color: "#535b62",
    marginBottom: "22px",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    ...shorthands.padding("8px"),
    ...shorthands.transition("background", "230ms", "ease-in"),
    ...shorthands.borderRadius("8px"),
    ":hover": { backgroundColor: "#e6f5ff" },
  },
});

const style: React.CSSProperties = {
  position: "absolute",
  cursor: "move",
};

export interface BoxProps {
  id: string;
  left: number;
  top: number;
}

export const Folder: React.FC<BoxProps> = ({ id, left, top }) => {
  const classes = useClasses();

  const [_, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  );

  return (
    <div ref={drag} style={{ ...style, left, top }}>
      <div className={classes.container}>
        <img src={FolderIcon} alt="folder" />
        <span> Folder </span>
      </div>
    </div>
  );
};
