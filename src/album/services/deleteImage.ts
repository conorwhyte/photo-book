import { API, Storage, graphqlOperation } from "aws-amplify";
import { deleteItem as deleteItemService } from "../../graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { DeleteItemInput, DeleteItemMutation } from "../../API";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectItemByName } from "../albumSlice";
import { RootState } from "../../store/store";

export const deleteItem = createAsyncThunk(
  "album/deleteImage",
  async ({ name }: { name: string }, { getState }) => {
    const state = getState();
    const { id } = selectItemByName(state as RootState, name)[0];

    const item: DeleteItemInput = {
      id,
    };

    const response = await API.graphql<GraphQLQuery<DeleteItemMutation>>(
      graphqlOperation(deleteItemService, {
        input: item,
      }),
    );

    await Storage.remove(name, { level: "protected" });

    return response.data;
  },
);
