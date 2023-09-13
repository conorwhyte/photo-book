import { API, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListItemsQuery, ListItemsQueryVariables } from "../../API";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { listItems } from "../../graphql/queries";
import { selectFolder } from "../albumSlice";
import { RootState } from "../../store/store";

export const listItemsInFolder = createAsyncThunk(
  "album/listItemsInFolder",
  async (_, { getState }) => {
    const state = getState();
    const folderId = selectFolder(state as RootState);

    const input: ListItemsQueryVariables = {
      filter: {
        folderItemsId: { eq: folderId },
      },
    };
    const response = await API.graphql<GraphQLQuery<ListItemsQuery>>(
      graphqlOperation(listItems, input),
    );

    return response.data;
  },
);
