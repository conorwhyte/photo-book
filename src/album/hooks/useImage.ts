import { MenuProps } from "antd";
import { useAppDispatch } from "../../store/hooks";
import { deleteItem } from "../services/deleteImage";
import { incrementImageLoadPercent, updateItemSrc } from "../albumSlice";

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
    handlers: {
      onImageLoad: () => {
        const src = document.getElementById(name)?.getAttribute("src") || "";
        dispatch(updateItemSrc({ name, src }));

        dispatch(
          // Random Number
          incrementImageLoadPercent(
            Math.floor(Math.random() * (10 - 2 + 1) + 2),
          ),
        );
      },
    },
  };
};
