import { Shell } from "./shell/shell";
import { Desktop } from "./desktop/desktop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Shell>
        <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
            <Desktop />
          </DndProvider>
        </Provider>
      </Shell>
    </div>
  );
}

export default App;
