import { StorageImage } from "@aws-amplify/ui-react-storage";
import { Dropdown } from "antd";
import React from "react";
import { useImage } from "./hooks/useImage";

interface ImageProps {
  name: string;
}

export const ImageExample: React.FC<ImageProps> = ({ name }) => {
  const { menuItems } = useImage({ name });

  return (
    <Dropdown menu={{ items: menuItems }} trigger={["contextMenu"]}>
      <StorageImage
        key={name}
        alt={name}
        imgKey={name}
        accessLevel="protected"
      />
    </Dropdown>
  );
};
