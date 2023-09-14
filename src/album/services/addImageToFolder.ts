import { API, graphqlOperation } from "aws-amplify";
import { createItem as createItemService } from "../../graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { CreateItemInput, CreateItemMutation } from "../../API";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectFolder } from "../albumSlice";
import { RootState } from "../../store/store";

export const createItem = createAsyncThunk(
  "album/createItem",
  async ({ name, type }: { name: string; type: string }, { getState }) => {
    const state = getState();
    const folderId = selectFolder(state as RootState);

    const item: CreateItemInput = {
      name,
      type,
      folderItemsId: folderId,
    };

    console.log(item);

    const response = await API.graphql<GraphQLQuery<CreateItemMutation>>(
      graphqlOperation(createItemService, {
        input: item,
      }),
    );

    return response.data;
  },
);
