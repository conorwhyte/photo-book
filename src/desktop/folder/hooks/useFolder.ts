import {
  selectItemWithName,
  selectItems,
  selectSelectedItem,
  selectedItemUpdated,
} from "../../desktopSlice";
import { useCallback, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useDrag } from "react-dnd";
import { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { updateFolder } from "../../services/createFolder";
import { folderUpdated } from "../../../album/albumSlice";
import { deleteFolder } from "../../services/deleteFolder";

export type Position = {
  top: number;
  left: number;
};

export interface DragItem extends Position {
  type: string;
  id: string;
}

interface UseFolderParams {
  name: string;
}

export const useFolder = ({ name }: UseFolderParams) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);
  const selectedItem = useAppSelector(selectSelectedItem);
  const item = selectItemWithName(items, name);
  const navigate = useNavigate();

  const [folderName, setFolderName] = useState<string>(name);
  const [editMode, setEditMode] = useState<boolean>(false);

  const menuItems: MenuProps["items"] = [
    {
      label: "Delete",
      key: "1",
      onClick: () => dispatch(deleteFolder({ id: item.id })),
    },
    {
      label: "Open",
      key: "2",
    },
    {
      label: "Rename",
      key: "3",
      onClick: () => setEditMode(true),
    },
  ];

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "box",
      item: { id: name, ...item.position },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [item, name],
  );

  return {
    context: {
      editMode,
      folderName,
      isSelected: useMemo(() => selectedItem === name, [name, selectedItem]),
      isDragging,
      menuItems,
      ...item,
    },
    handlers: {
      drag,
      onSelect: useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
          switch (e.detail) {
            case 1:
              // Select folder
              dispatch(selectedItemUpdated(name));
              break;
            case 2:
              // Go to folder
              console.log(item.id, name);
              dispatch(folderUpdated(item.id));
              navigate(`${name}`);
              break;
          }
        },
        [dispatch, item.id, name, navigate],
      ),
      onBlur: useCallback(() => {
        dispatch(selectedItemUpdated(""));
      }, [dispatch]),
      onFolderNameChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setFolderName(e.target.value);
      },
      onFolderNameSubmit: () => {
        dispatch(
          updateFolder({
            name: folderName,
            id: item.id,
            position: item.position,
          }),
        );
        setEditMode(false);
      },
    },
  };
};
