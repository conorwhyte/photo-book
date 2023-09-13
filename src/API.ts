/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFolderInput = {
  id?: string | null,
  name: string,
  position?: PositionInput | null,
};

export type PositionInput = {
  top: number,
  left: number,
};

export type ModelFolderConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelFolderConditionInput | null > | null,
  or?: Array< ModelFolderConditionInput | null > | null,
  not?: ModelFolderConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Folder = {
  __typename: "Folder",
  id: string,
  name: string,
  position?: Position | null,
  items?: ModelItemConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Position = {
  __typename: "Position",
  top: number,
  left: number,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  name: string,
  type: string,
  folder?: Folder | null,
  tags?: ModelTagConnection | null,
  createdAt: string,
  updatedAt: string,
  folderItemsId?: string | null,
  owner?: string | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  itemTagsId?: string | null,
  owner?: string | null,
};

export type UpdateFolderInput = {
  id: string,
  name?: string | null,
  position?: PositionInput | null,
};

export type DeleteFolderInput = {
  id: string,
};

export type CreateItemInput = {
  id?: string | null,
  name: string,
  type: string,
  folderItemsId?: string | null,
};

export type ModelItemConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
  folderItemsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateItemInput = {
  id: string,
  name?: string | null,
  type?: string | null,
  folderItemsId?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  name: string,
  itemTagsId?: string | null,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
  itemTagsId?: ModelIDInput | null,
};

export type UpdateTagInput = {
  id: string,
  name?: string | null,
  itemTagsId?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type ModelFolderFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelFolderFilterInput | null > | null,
  or?: Array< ModelFolderFilterInput | null > | null,
  not?: ModelFolderFilterInput | null,
};

export type ModelFolderConnection = {
  __typename: "ModelFolderConnection",
  items:  Array<Folder | null >,
  nextToken?: string | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
  folderItemsId?: ModelIDInput | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
  itemTagsId?: ModelIDInput | null,
};

export type ModelSubscriptionFolderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFolderFilterInput | null > | null,
  or?: Array< ModelSubscriptionFolderFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
};

export type ModelSubscriptionTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
};

export type CreateFolderMutationVariables = {
  input: CreateFolderInput,
  condition?: ModelFolderConditionInput | null,
};

export type CreateFolderMutation = {
  createFolder?:  {
    __typename: "Folder",
    id: string,
    name: string,
    position?:  {
      __typename: "Position",
      top: number,
      left: number,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        name: string,
        type: string,
        createdAt: string,
        updatedAt: string,
        folderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFolderMutationVariables = {
  input: UpdateFolderInput,
  condition?: ModelFolderConditionInput | null,
};

export type UpdateFolderMutation = {
  updateFolder?:  {
    __typename: "Folder",
    id: string,
    name: string,
    position?:  {
      __typename: "Position",
      top: number,
      left: number,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        name: string,
        type: string,
        createdAt: string,
        updatedAt: string,
        folderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFolderMutationVariables = {
  input: DeleteFolderInput,
  condition?: ModelFolderConditionInput | null,
};

export type DeleteFolderMutation = {
  deleteFolder?:  {
    __typename: "Folder",
    id: string,
    name: string,
    position?:  {
      __typename: "Position",
      top: number,
      left: number,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        name: string,
        type: string,
        createdAt: string,
        updatedAt: string,
        folderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    type: string,
    folder?:  {
      __typename: "Folder",
      id: string,
      name: string,
      position?:  {
        __typename: "Position",
        top: number,
        left: number,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        itemTagsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    folderItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    type: string,
    folder?:  {
      __typename: "Folder",
      id: string,
      name: string,
      position?:  {
        __typename: "Position",
        top: number,
        left: number,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        itemTagsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    folderItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    type: string,
    folder?:  {
      __typename: "Folder",
      id: string,
      name: string,
      position?:  {
        __typename: "Position",
        top: number,
        left: number,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        itemTagsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    folderItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    itemTagsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    itemTagsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    itemTagsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetFolderQueryVariables = {
  id: string,
};

export type GetFolderQuery = {
  getFolder?:  {
    __typename: "Folder",
    id: string,
    name: string,
    position?:  {
      __typename: "Position",
      top: number,
      left: number,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        name: string,
        type: string,
        createdAt: string,
        updatedAt: string,
        folderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFoldersQueryVariables = {
  filter?: ModelFolderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoldersQuery = {
  listFolders?:  {
    __typename: "ModelFolderConnection",
    items:  Array< {
      __typename: "Folder",
      id: string,
      name: string,
      position?:  {
        __typename: "Position",
        top: number,
        left: number,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    type: string,
    folder?:  {
      __typename: "Folder",
      id: string,
      name: string,
      position?:  {
        __typename: "Position",
        top: number,
        left: number,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        itemTagsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    folderItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      name: string,
      type: string,
      folder?:  {
        __typename: "Folder",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      folderItemsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    itemTagsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      itemTagsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFolderSubscriptionVariables = {
  filter?: ModelSubscriptionFolderFilterInput | null,
  owner?: string | null,
};

export type OnCreateFolderSubscription = {
  onCreateFolder?:  {
    __typename: "Folder",
    id: string,
    name: string,
    position?:  {
      __typename: "Position",
      top: number,
      left: number,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        name: string,
        type: string,
        createdAt: string,
        updatedAt: string,
        folderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFolderSubscriptionVariables = {
  filter?: ModelSubscriptionFolderFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFolderSubscription = {
  onUpdateFolder?:  {
    __typename: "Folder",
    id: string,
    name: string,
    position?:  {
      __typename: "Position",
      top: number,
      left: number,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        name: string,
        type: string,
        createdAt: string,
        updatedAt: string,
        folderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFolderSubscriptionVariables = {
  filter?: ModelSubscriptionFolderFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFolderSubscription = {
  onDeleteFolder?:  {
    __typename: "Folder",
    id: string,
    name: string,
    position?:  {
      __typename: "Position",
      top: number,
      left: number,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        name: string,
        type: string,
        createdAt: string,
        updatedAt: string,
        folderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    type: string,
    folder?:  {
      __typename: "Folder",
      id: string,
      name: string,
      position?:  {
        __typename: "Position",
        top: number,
        left: number,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        itemTagsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    folderItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    type: string,
    folder?:  {
      __typename: "Folder",
      id: string,
      name: string,
      position?:  {
        __typename: "Position",
        top: number,
        left: number,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        itemTagsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    folderItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    type: string,
    folder?:  {
      __typename: "Folder",
      id: string,
      name: string,
      position?:  {
        __typename: "Position",
        top: number,
        left: number,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        itemTagsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    folderItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
  owner?: string | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    itemTagsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    itemTagsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    itemTagsId?: string | null,
    owner?: string | null,
  } | null,
};
