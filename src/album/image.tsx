import { StorageImage } from "@aws-amplify/ui-react-storage";
import { Dropdown } from "antd";
import React from "react";
import { useImage } from "./hooks/useImage";

interface ImageProps {
  name: string;
  onClick: () => void;
}

export const ImageExample: React.FC<ImageProps> = ({ name, onClick }) => {
  const {
    menuItems,
    handlers: { onImageLoad },
  } = useImage({ name });

  return (
    <Dropdown menu={{ items: menuItems }} trigger={["contextMenu"]}>
      <StorageImage
        key={name}
        id={name}
        alt={name}
        loading="lazy"
        imgKey={name}
        onClick={onClick}
        onLoad={onImageLoad}
        accessLevel="protected"
      />
    </Dropdown>
  );
};
