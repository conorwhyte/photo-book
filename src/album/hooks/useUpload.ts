import { useAppDispatch } from "../../store/hooks";
import { createItem } from "../services/addImageToFolder";

export const useUpload = () => {
  const dispatch = useAppDispatch();

  return {
    handlers: {
      onImageUpload: ({ key }: { key: string }) => {
        dispatch(
          createItem({
            name: key,
            type: "image",
          }),
        );
      },
    },
  };
};
