import { API, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListFoldersQuery } from "../../API";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { listFolders as listFoldersService } from "../../graphql/queries";

export const listFolders = createAsyncThunk("desktop/listFolders", async () => {
  const response = await API.graphql<GraphQLQuery<ListFoldersQuery>>(
    graphqlOperation(listFoldersService),
  );

  return response.data;
});
