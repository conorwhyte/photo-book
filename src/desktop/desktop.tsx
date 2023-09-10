import { Folder } from "./folder/folder";
import { makeStyles } from "@griffel/react";
import { useDesktop } from "./hooks/useDesktop";

const useClasses = makeStyles({
  desktop: {
    height: "100%",
  },
});

export const Desktop = () => {
  const styles = useClasses();
  const { items, canvas } = useDesktop();

  return (
    <div id="canvas" ref={canvas} className={styles.desktop}>
      {Object.keys(items).map((id) => (
        <Folder key={id} id={id} {...items[id].position} />
      ))}
    </div>
  );
};
