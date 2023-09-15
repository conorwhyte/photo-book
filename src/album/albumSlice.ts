import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { listItemsInFolder } from "./services/listItemsInFolder";

type Item = { name: string; type: string; id: string; src?: string };

interface AlbumState {
  folder: string;
  loading: boolean;
  imageLoadPercent: number;
  items: Array<Item>;
}

const initialState: AlbumState = {
  folder: "",
  loading: false,
  imageLoadPercent: 0,
  items: [],
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    folderUpdated: (state, action: PayloadAction<string>) => {
      state.folder = action.payload;
    },
    incrementImageLoadPercent: (state, action: PayloadAction<number>) => {
      state.imageLoadPercent += action.payload;
    },
    updateItemSrc: (
      state,
      action: PayloadAction<{ name: string; src: string }>,
    ) => {
      const { name, src } = action.payload;
      state.items = state.items.map((item) =>
        item.name === name ? { ...item, src } : item,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listItemsInFolder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(listItemsInFolder.fulfilled, (state, action) => {
      const responseItems = action.payload?.listItems;

      const folderItems = responseItems?.items.map((item) => ({
        name: item?.name || "",
        type: item?.type || "",
        id: item?.id || "",
      }));

      state.loading = false;
      state.items = folderItems || [];
    });
  },
});

export const selectFolder = (state: RootState) => state.album.folder;

export const selectItems = (state: RootState) => state.album.items;

export const selectLoading = (state: RootState) => state.album.loading;

export const selectImageLoadPercent = (state: RootState) =>
  state.album.imageLoadPercent;

export const selectItemByName = (state: RootState, name: string) =>
  state.album.items.filter((item) => item.name === name);

export const { incrementImageLoadPercent, folderUpdated, updateItemSrc } =
  albumSlice.actions;

export default albumSlice.reducer;
