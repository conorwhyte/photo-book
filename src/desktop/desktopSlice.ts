import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { Position } from "./folder/hooks/useFolder";
import { listFolders } from "./services/listFolder";

export enum DesktopItemTypes {
  Folder,
}

export type DesktopItem = {
  id: string;
  type: DesktopItemTypes;
  position: Position;
};

export type Items = Record<string, DesktopItem>;

interface DesktopState {
  items: Items;
  selectedItem?: string;
}

const initialState: DesktopState = {
  items: {},
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

export const { selectedItemUpdated, itemPositionUpdated } =
  desktopSlice.actions;

export const selectItems = (state: RootState) => state.desktop.items;

export const selectItemWithName = (items: Items, name: string) => items[name];

export const selectSelectedItem = (state: RootState) =>
  state.desktop.selectedItem;

export default desktopSlice.reducer;
