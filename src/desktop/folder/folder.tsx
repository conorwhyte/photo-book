import React from "react";
import { makeStyles, shorthands } from "@griffel/react";
import FolderIcon from "./assets/folder.svg";
import { Dropdown, Input } from "antd";
import { useFolder } from "./hooks/useFolder";
import { mobileCheck } from "../../utils/mobile";

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

export const Folder: React.FC<{ name: string }> = ({ name }) => {
  const classes = useClasses();

  const {
    context: {
      editMode,
      folderName,
      isDragging,
      isSelected,
      menuItems,
      position: { top, left },
    },
    handlers: {
      drag,
      onBlur,
      onSelect,
      onFolderNameChange,
      onFolderNameSubmit,
    },
  } = useFolder({ name });

  if (isDragging) {
    return <div ref={drag} />;
  }

  const ContainerDropdown = mobileCheck() ? React.Fragment : Dropdown;

  return (
    <ContainerDropdown menu={{ items: menuItems }} trigger={["contextMenu"]}>
      <div
        ref={drag}
        // tabIndex={0}
        className={classes.container}
        style={{ top, left, backgroundColor: isSelected ? "#e6f5ff" : "#fff" }}
        onClick={onSelect}
        onBlur={onBlur}
      >
        <img src={FolderIcon} alt="folder" />
        {editMode ? (
          <Input
            value={folderName}
            onBlur={onFolderNameSubmit}
            onPressEnter={onFolderNameSubmit}
            onChange={onFolderNameChange}
          />
        ) : (
          <span> {folderName} </span>
        )}
      </div>
    </ContainerDropdown>
  );
};
