import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import { Gallery, GalleryItem } from "./ImageGallery.styled";

export const ImageGallery = ({images}) => {
    return (
    <Gallery>
      {images.map(({id, src, largeSrc, tags}) =>
        <GalleryItem key={id}>
          <ImageGalleryItem src={src} tags={tags} largeSrc={largeSrc} />
        </GalleryItem>
      )}
    </Gallery>
  )
}
