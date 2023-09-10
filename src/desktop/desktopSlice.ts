import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { Position } from "./folder/hooks/useFolder";

export enum DesktopItemTypes {
  Folder,
}

export type DesktopItem = {
  type: DesktopItemTypes;
  position: Position;
};

interface DesktopState {
  items: Record<string, DesktopItem>;
  selectedItem?: string;
}

const initialState: DesktopState = {
  items: {
    "Folder 1": {
      type: DesktopItemTypes.Folder,
      position: { top: 60, left: 50 },
    },
  },
  selectedItem: "",
};

export const desktopSlice = createSlice({
  name: "desktop",
  initialState,
  reducers: {
    itemPositionUpdated: (
      state,
      action: PayloadAction<{ name: string; position: Position }>,
    ) => {
      const { name, position } = action.payload;

      state.items[name] = {
        ...state.items[name],
        position,
      };
    },
    selectedItemUpdated: (state, action: PayloadAction<string>) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { selectedItemUpdated, itemPositionUpdated } =
  desktopSlice.actions;

export const selectItems = (state: RootState) => state.desktop.items;

export const selectItemWithName = (
  items: Record<string, DesktopItem>,
  name: string,
) => items[name];

export const selectSelectedItem = (state: RootState) =>
  state.desktop.selectedItem;

export default desktopSlice.reducer;
