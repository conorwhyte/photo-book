import { StorageImage } from "@aws-amplify/ui-react-storage";
import React from "react";

interface ImageProps {
  name: string;
}

export const ImageExample: React.FC<ImageProps> = ({ name }) => (
  <StorageImage key={name} alt={name} imgKey={name} accessLevel="protected" />
);
