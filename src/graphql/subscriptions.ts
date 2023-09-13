/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFolder = /* GraphQL */ `
  subscription OnCreateFolder($filter: ModelSubscriptionFolderFilterInput) {
    onCreateFolder(filter: $filter) {
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
export const onUpdateFolder = /* GraphQL */ `
  subscription OnUpdateFolder($filter: ModelSubscriptionFolderFilterInput) {
    onUpdateFolder(filter: $filter) {
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
export const onDeleteFolder = /* GraphQL */ `
  subscription OnDeleteFolder($filter: ModelSubscriptionFolderFilterInput) {
    onDeleteFolder(filter: $filter) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      itemTagsId
      __typename
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      itemTagsId
      __typename
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      itemTagsId
      __typename
    }
  }
`;
