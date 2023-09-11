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

type Items = Record<string, DesktopItem>;

interface DesktopState {
  items: Items;
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

const getNextPosition = (items: Items): Position => {
  let left = 0;
  let top = 60;

  const viewWidth = document.getElementById("canvas")?.clientWidth || 1000;

  for (const { position } of Object.values(items)) {
    if (position.left > left) {
      left = position.left;
    }

    if (position.left > viewWidth - 110) {
      top = position.top + 150;
      left = -50;
    }
  }

  return {
    top: top,
    left: left + 110,
  };
};

export const desktopSlice = createSlice({
  name: "desktop",
  initialState,
  reducers: {
    addItem: (state) => {
      state.items[`New Folder ${Object.values(state.items).length}`] = {
        type: DesktopItemTypes.Folder,
        position: getNextPosition(state.items),
      };
    },
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

export const { addItem, selectedItemUpdated, itemPositionUpdated } =
  desktopSlice.actions;

export const selectItems = (state: RootState) => state.desktop.items;

export const selectItemWithName = (items: Items, name: string) => items[name];

export const selectSelectedItem = (state: RootState) =>
  state.desktop.selectedItem;

export default desktopSlice.reducer;
