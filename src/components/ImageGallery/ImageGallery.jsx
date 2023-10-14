import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images}) => {
  return (
    <ul>
      {images.map(image =>
        <li key={image.id}>
          <ImageGalleryItem src={image.src} tags={image.tags} />
        </li>
      )}
    </ul>
  )
}
