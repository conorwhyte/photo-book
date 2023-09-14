import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { Folder } from "./folder/folder";
import { makeStyles } from "@griffel/react";
import { useDesktop } from "./hooks/useDesktop";
import { isMobile } from "../utils/mobile";

const useClasses = makeStyles({
  desktop: {
    height: "100%",
  },
});

export const Desktop = () => {
  const styles = useClasses();
  const { items, canvas } = useDesktop();

  const backend = isMobile() ? TouchBackend : HTML5Backend;

  return (
    <div style={{ height: "100vh" }}>
      <DndProvider backend={backend}>
        <div id="canvas" ref={canvas} className={styles.desktop}>
          {Object.keys(items).map((name) => (
            <Folder key={name} name={name} {...items[name].position} />
          ))}
        </div>
      </DndProvider>
    </div>
  );
};
