import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Delete",
    key: "1",
  },
  {
    label: "Open",
    key: "2",
  },
  {
    label: "Rename",
    key: "3",
  },
];

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const onSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    switch (e.detail) {
      case 1:
        // Select folder
        break;
      case 2:
        // Go to folder
        break;
    }
  };

  return (
    <div onClick={onSelect}>
      <Dropdown menu={{ items }} trigger={["contextMenu"]}>
        {children}
      </Dropdown>
    </div>
  );
};

export default Container;
