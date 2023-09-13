/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFolder = /* GraphQL */ `
  query GetFolder($id: ID!) {
    getFolder(id: $id) {
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
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listFolders = /* GraphQL */ `
  query ListFolders(
    $filter: ModelFolderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
        owner
        __typename
      }
      tags {
        items {
          id
          name
          createdAt
          updatedAt
          itemTagsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      folderItemsId
      owner
      __typename
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        folder {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        tags {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        folderItemsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      createdAt
      updatedAt
      itemTagsId
      owner
      __typename
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        itemTagsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
