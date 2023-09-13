/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFolder = /* GraphQL */ `
  subscription OnCreateFolder(
    $filter: ModelSubscriptionFolderFilterInput
    $owner: String
  ) {
    onCreateFolder(filter: $filter, owner: $owner) {
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
export const onUpdateFolder = /* GraphQL */ `
  subscription OnUpdateFolder(
    $filter: ModelSubscriptionFolderFilterInput
    $owner: String
  ) {
    onUpdateFolder(filter: $filter, owner: $owner) {
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
export const onDeleteFolder = /* GraphQL */ `
  subscription OnDeleteFolder(
    $filter: ModelSubscriptionFolderFilterInput
    $owner: String
  ) {
    onDeleteFolder(filter: $filter, owner: $owner) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem(
    $filter: ModelSubscriptionItemFilterInput
    $owner: String
  ) {
    onCreateItem(filter: $filter, owner: $owner) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem(
    $filter: ModelSubscriptionItemFilterInput
    $owner: String
  ) {
    onUpdateItem(filter: $filter, owner: $owner) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem(
    $filter: ModelSubscriptionItemFilterInput
    $owner: String
  ) {
    onDeleteItem(filter: $filter, owner: $owner) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag(
    $filter: ModelSubscriptionTagFilterInput
    $owner: String
  ) {
    onCreateTag(filter: $filter, owner: $owner) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag(
    $filter: ModelSubscriptionTagFilterInput
    $owner: String
  ) {
    onUpdateTag(filter: $filter, owner: $owner) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag(
    $filter: ModelSubscriptionTagFilterInput
    $owner: String
  ) {
    onDeleteTag(filter: $filter, owner: $owner) {
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
