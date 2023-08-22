import { makeStyles, shorthands } from "@griffel/react";
import FolderIcon from "./folder.svg";

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

export const Folder = () => {
  const classes = useClasses();

  return (
    <div className={classes.container}>
      <img src={FolderIcon} alt="folder" />
      <span> Folder </span>
    </div>
  );
};
