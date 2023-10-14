import { Image } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ src, tags }) => {
  return (
    <Image src={src} alt={tags} />
  )
}
