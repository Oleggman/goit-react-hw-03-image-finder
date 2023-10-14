import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Gallery, GalleryItem } from "./ImageGallery.styled";

export const ImageGallery = ({images}) => {
  return (
    <Gallery>
      {images.map(image =>
        <GalleryItem key={image.id}>
          <ImageGalleryItem src={image.src} tags={image.tags} />
        </GalleryItem>
      )}
    </Gallery>
  )
}
