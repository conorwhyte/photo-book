import "react-image-lightbox/style.css";
import { Uploader } from "./upload";
import { ImageExample } from "./image";
import { Spin } from "antd";
// @ts-ignore
import Masonry from "react-responsive-masonry";
import { useAlbum } from "./hooks/useAlbum";

export const Album = () => {
  const { loading, items } = useAlbum();

  return (
    <div>
      <Uploader />

      {loading ? (
        <Spin size="large" />
      ) : (
        <Masonry columnsCount={3} gutter="10px">
          {items.map(({ name }) => (
            <ImageExample key={name} name={name} />
          ))}
        </Masonry>
      )}
    </div>
  );
};
