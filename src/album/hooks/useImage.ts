import { MenuProps } from "antd";
import { useAppDispatch } from "../../store/hooks";
import { deleteItem } from "../services/deleteImage";

export const useImage = ({ name }: { name: string }) => {
  const dispatch = useAppDispatch();

  const menuItems: MenuProps["items"] = [
    {
      label: "Delete",
      key: "3",
      onClick: () => dispatch(deleteItem({ name })),
    },
  ];

  return {
    menuItems,
  };
};
