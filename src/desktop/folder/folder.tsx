import React from "react";
import { makeStyles, shorthands } from "@griffel/react";
import FolderIcon from "./assets/folder.svg";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useFolder } from "./hooks/useFolder";

const items: MenuProps["items"] = [
  {
    label: "Delete",
    key: "1",
  },
  {
    label: "Open",
    key: "2",
  },
  {
    label: "Rename",
    key: "3",
  },
];

export interface FolderProps {
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

export const Folder: React.FC<{ id: string }> = ({ id }) => {
  const classes = useClasses();

  const {
    context: {
      isDragging,
      isSelected,
      position: { top, left },
    },
    handlers: { drag, onSelect },
  } = useFolder({ name: id });

  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <Dropdown menu={{ items }} trigger={["contextMenu"]}>
      <div
        ref={drag}
        className={classes.container}
        style={{ top, left, backgroundColor: isSelected ? "#e6f5ff" : "#fff" }}
        onClick={onSelect}
      >
        <img src={FolderIcon} alt="folder" />
        <span> Folder </span>
      </div>
    </Dropdown>
  );
};
