import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import { useState } from "react";
import { Uploader } from "./upload";
import { ImageExample } from "./image";
import { Spin } from "antd";
import { useAlbum } from "./hooks/useAlbum";
// @ts-ignore
import Masonry from "react-responsive-masonry";
import { Loader } from "@aws-amplify/ui-react";

export const Album = () => {
  const { loading, items, imageLoadPercent } = useAlbum();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [openGallery, setOpenGallery] = useState(false);

  return (
    <div>
      <Uploader />
      {imageLoadPercent < 100 && (
        <Loader
          variation="linear"
          percentage={imageLoadPercent}
          isDeterminate
        />
      )}

      {loading ? (
        <Spin size="large" />
      ) : (
        <Masonry columnsCount={3} gutter="10px">
          {items.map(({ name }) => (
            <ImageExample
              key={name}
              name={name}
              onClick={() => setOpenGallery(true)}
            />
          ))}
        </Masonry>
      )}

      {openGallery && (
        <Lightbox
          mainSrc={items[photoIndex].src || ""}
          nextSrc={items[(photoIndex + 1) % items.length].src}
          prevSrc={items[(photoIndex + items.length - 1) % items.length].src}
          onCloseRequest={() => setOpenGallery(false)}
          onMovePrevRequest={() => {
            setPhotoIndex((photoIndex + items.length - 1) % items.length);
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % items.length);
          }}
        />
      )}
    </div>
  );
};
