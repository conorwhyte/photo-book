import React from "react";
import { makeStyles, shorthands } from "@griffel/react";
import FolderIcon from "./folder.svg";
import { useDrag } from "react-dnd";

export type DraggableBox = {
  left: number;
  top: number;
};

export interface FolderProps extends DraggableBox {
  id: string;
}

const useClasses = makeStyles({
  selected: {
    backgroundColor: "#e6f5ff",
  },
  container: {
    height: "117px",
    width: "96px",
    display: "flex",
    position: "absolute",
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

export const Folder: React.FC<FolderProps> = ({ id, left, top }) => {
  const classes = useClasses();

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "box",
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  );

  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <div ref={drag} className={classes.container} style={{ top, left }}>
      <img src={FolderIcon} alt="folder" />
      <span> Folder </span>
    </div>
  );
};
