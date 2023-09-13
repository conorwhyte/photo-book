/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFolder = /* GraphQL */ `
  mutation CreateFolder(
    $input: CreateFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    createFolder(input: $input, condition: $condition) {
      id
      name
      position {
        top
        left
        __typename
      }
      items {
        items {
          id
          name
          type
          createdAt
          updatedAt
          folderItemsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateFolder = /* GraphQL */ `
  mutation UpdateFolder(
    $input: UpdateFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    updateFolder(input: $input, condition: $condition) {
      id
      name
      position {
        top
        left
        __typename
      }
      items {
        items {
          id
          name
          type
          createdAt
          updatedAt
          folderItemsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteFolder = /* GraphQL */ `
  mutation DeleteFolder(
    $input: DeleteFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    deleteFolder(input: $input, condition: $condition) {
      id
      name
      position {
        top
        left
        __typename
      }
      items {
        items {
          id
          name
          type
          createdAt
          updatedAt
          folderItemsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      name
      type
      folder {
        id
        name
        position {
          top
          left
          __typename
        }
        items {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      tags {
        items {
          id
          name
          createdAt
          updatedAt
          itemTagsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      folderItemsId
      __typename
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      name
      type
      folder {
        id
        name
        position {
          top
          left
          __typename
        }
        items {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      tags {
        items {
          id
          name
          createdAt
          updatedAt
          itemTagsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      folderItemsId
      __typename
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      name
      type
      folder {
        id
        name
        position {
          top
          left
          __typename
        }
        items {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      tags {
        items {
          id
          name
          createdAt
          updatedAt
          itemTagsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      folderItemsId
      __typename
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      itemTagsId
      __typename
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      itemTagsId
      __typename
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      itemTagsId
      __typename
    }
  }
`;
