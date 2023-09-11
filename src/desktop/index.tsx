import { HTML5Backend } from "react-dnd-html5-backend";
import { Desktop } from "./desktop";
import { DndProvider } from "react-dnd";

const DesktopContainer = () => (
  <DndProvider backend={HTML5Backend}>
    <Desktop />
  </DndProvider>
);

export default DesktopContainer;
