import { API, graphqlOperation } from "aws-amplify";
import { createFolder as createFolderService } from "../graphql/mutations";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { CreateFolderInput, CreateFolderMutation } from "../API";
import { Position } from "./folder/hooks/useFolder";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Items, selectItems } from "./desktopSlice";
import { RootState } from "../store/store";

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

export const createFolder = createAsyncThunk(
  "desktop/createFolder",
  async (arg, { getState }) => {
    const state = getState();
    const items = selectItems(state as RootState);

    const folder: CreateFolderInput = {
      name: `New Folder ${Object.values(items).length}`,
      position: getNextPosition(items),
    };

    const query = {
      ...graphqlOperation(createFolderService, {
        input: folder,
      }),
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    };

    const response =
      await API.graphql<GraphQLQuery<CreateFolderMutation>>(query);

    return response.data;
  },
);
