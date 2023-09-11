import { Shell } from "./shell/shell";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { Router } from "./Routes";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Shell>
          <DndProvider backend={HTML5Backend}>
            <Router />
          </DndProvider>
        </Shell>
      </Provider>
    </div>
  );
}

export default App;
