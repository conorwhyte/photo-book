import { API, graphqlOperation } from "aws-amplify";
import { deleteFolder as deleteFolderService } from "../../graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { DeleteFolderInput, DeleteFolderMutation } from "../../API";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteFolder = createAsyncThunk(
  "album/deleteFolder",
  async ({ id }: { id: string }) => {
    const item: DeleteFolderInput = {
      id,
    };

    const response = await API.graphql<GraphQLQuery<DeleteFolderMutation>>(
      graphqlOperation(deleteFolderService, {
        input: item,
      }),
    );

    return response.data;
  },
);
