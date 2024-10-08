import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { DesktopItem, selectItems } from "../desktopSlice";
import { listFolders } from "../services/listFolder";
import { deleteFolder } from "../services/deleteFolder";
import { updateFolder } from "../services/createFolder";
import { useNavigate } from "react-router-dom";
import { folderUpdated } from "../../album/albumSlice";

export const useList = () => {
  const items = useAppSelector(selectItems);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [folderName, setFolderName] = useState<string>("");
  const [editMode, setEditMode] = useState(false);
  const [editingFolder, setEditingFolder] = useState<DesktopItem>();

  useEffect(() => {
    dispatch(listFolders());
  }, [dispatch]);

  const listData = Object.values(items).map((item) => ({
    id: item.id,
    title: item.name,
    handlers: {
      onDeleteClick: () => dispatch(deleteFolder({ id: item.id })),
      onEditClick: () => {
        setEditMode(true);
        setFolderName(item.name);
        setEditingFolder(item);
      },
      onNavigate: () => {
        dispatch(folderUpdated(item.id));
        navigate(`${item.name}`);
      },
    },
  }));

  return {
    listData,
    folderName,
    handlers: {
      isEditing: (id: string) => editMode && editingFolder?.id === id,
      onFolderNameChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setFolderName(e.target.value);
      },
      onFolderNameSubmit: () => {
        const position = {
          top: editingFolder?.position.top || 0,
          left: editingFolder?.position.left || 0,
        };

        dispatch(
          updateFolder({
            id: editingFolder?.id || "",
            position,
            name: folderName,
          }),
        );
        setEditMode(false);
      },
    },
  };
};
