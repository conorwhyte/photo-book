import React from "react";
import { Avatar, Button, Input, List } from "antd";
import FolderIcon from "../folder/assets/folder.svg";
import { useList } from "./useList";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const ListFiles: React.FC = () => {
  const {
    listData,
    folderName,
    handlers: { isEditing, onFolderNameChange, onFolderNameSubmit },
  } = useList();

  return (
    <List
      itemLayout="horizontal"
      dataSource={listData}
      renderItem={(item, index) => (
        <List.Item
          actions={[
            <Button
              onClick={item.handlers.onEditClick}
              shape="circle"
              icon={<EditOutlined />}
            />,
            <Button
              onClick={item.handlers.onDeleteClick}
              shape="circle"
              icon={<DeleteOutlined />}
            />,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={FolderIcon} />}
            title={
              isEditing(item.id) ? (
                <Input
                  value={folderName}
                  onBlur={onFolderNameSubmit}
                  onPressEnter={onFolderNameSubmit}
                  onChange={onFolderNameChange}
                />
              ) : (
                <Link to={item.title}>{item.title}</Link>
              )
            }
          />
        </List.Item>
      )}
    />
  );
};
