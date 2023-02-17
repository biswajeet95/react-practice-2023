import ImageShow from "./ImageShow";
import './ImagePro.css';
const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />
  });

  return <div className="image-list">{renderedImages}</div>;

}

export default ImageList;
