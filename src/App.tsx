import { Shell } from "./shell/shell";
import { Desktop } from "./desktop/desktop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <Shell>
        <DndProvider backend={HTML5Backend}>
          <Desktop />
        </DndProvider>
      </Shell>
    </div>
  );
}

export default App;
