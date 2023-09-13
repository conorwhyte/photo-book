import { StorageImage } from "@aws-amplify/ui-react-storage";

export const ImageExample = () => {
  return (
    <StorageImage alt="cat" imgKey="beacon-logo.png" accessLevel="public" />
  );
};
