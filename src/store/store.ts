import { configureStore } from "@reduxjs/toolkit";
import desktopReducer from "../desktop/desktopSlice";
import albumReducer from "../album/albumSlice";

export const store = configureStore({
  reducer: {
    desktop: desktopReducer,
    album: albumReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
