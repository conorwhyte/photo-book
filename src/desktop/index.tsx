import { HTML5Backend } from "react-dnd-html5-backend";
import { Desktop } from "./desktop";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { isMobile } from "../utils/mobile";
import { useAppSelector } from "../store/hooks";
import { Display, selectDisplay } from "./desktopSlice";
import { ListFiles } from "./listView/list";

const backend = isMobile() ? TouchBackend : HTML5Backend;

const DesktopContainer = () => {
  const display = useAppSelector(selectDisplay);

  if (display === Display.List) {
    return <ListFiles />;
  }

  return (
    <DndProvider backend={backend}>
      <Desktop />
    </DndProvider>
  );
};

export default DesktopContainer;
