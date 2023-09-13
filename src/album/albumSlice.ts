import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { listItemsInFolder } from "./services/listItemsInFolder";

type Item = { name: string; type: string };

interface AlbumState {
  folder: string;
  items: Array<Item>;
}

const initialState: AlbumState = {
  folder: "",
  items: [],
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    folderUpdated: (state, action: PayloadAction<string>) => {
      state.folder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listItemsInFolder.fulfilled, (state, action) => {
      const responseItems = action.payload?.listItems;

      const folderItems = responseItems?.items.map((item) => ({
        name: item?.name || "",
        type: item?.type || "",
      }));

      state.items = folderItems || [];
    });
  },
});

export const selectFolder = (state: RootState) => state.album.folder;

export const selectItems = (state: RootState) => state.album.items;

export const { folderUpdated } = albumSlice.actions;

export default albumSlice.reducer;
