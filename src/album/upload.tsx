import React, { useState } from "react";
import { FloatButton, Modal } from "antd";
import { FileUploader } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useUpload } from "./hooks/useUpload";
import { UploadOutlined } from "@ant-design/icons";

const Upload = () => {
  const {
    handlers: { onImageUpload },
  } = useUpload();

  return (
    <FileUploader
      onSuccess={onImageUpload}
      acceptedFileTypes={["image/*"]}
      accessLevel="protected"
    />
  );
};

export const Uploader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FloatButton
        style={{ right: "40px" }}
        icon={<UploadOutlined />}
        onClick={showModal}
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Upload />
      </Modal>
    </>
  );
};
