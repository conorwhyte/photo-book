import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { Position } from "./folder/hooks/useFolder";
import { listFolders } from "./services/listFolder";
import { isMobile } from "../utils/mobile";

export enum DesktopItemTypes {
  Folder,
}

export enum Display {
  Desktop,
  List,
}

export type DesktopItem = {
  id: string;
  type: DesktopItemTypes;
  position: Position;
  name: string;
};

export type Items = Record<string, DesktopItem>;

interface DesktopState {
  items: Items;
  selectedItem?: string;
  display: Display;
}

const initialState: DesktopState = {
  items: {},
  selectedItem: "",
  display: isMobile() ? Display.List : Display.Desktop,
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
    changeDisplay: (state) => {
      state.display =
        state.display === Display.Desktop ? Display.List : Display.Desktop;
    },
    selectedItemUpdated: (state, action: PayloadAction<string>) => {
      state.selectedItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listFolders.fulfilled, (state, action) => {
      const folders = action.payload?.listFolders;

      const items = folders?.items.reduce((acc, item) => {
        return {
          ...acc,
          [item?.name || ""]: {
            ...item,
            type: DesktopItemTypes.Folder,
          },
        };
      }, {});

      state.items = items || {};
    });
  },
});

export const { selectedItemUpdated, itemPositionUpdated, changeDisplay } =
  desktopSlice.actions;

export const selectDisplay = (state: RootState) => state.desktop.display;

export const selectItems = (state: RootState) => state.desktop.items;

export const selectItemWithName = (items: Items, name: string) => items[name];

export const selectSelectedItem = (state: RootState) =>
  state.desktop.selectedItem;

export default desktopSlice.reducer;
