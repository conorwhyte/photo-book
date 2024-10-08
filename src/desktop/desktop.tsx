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
    <div style={{ height: "100vh" }}>
      <div id="canvas" ref={canvas} className={styles.desktop}>
        {Object.keys(items).map((name) => (
          <Folder key={name} name={name} {...items[name].position} />
        ))}
      </div>
    </div>
  );
};
