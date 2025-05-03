import styles from './PhotosGalleryItem.module.css';

const PhotosGalleryItem = ({ alt, color, src, openModal }) => {
  return (
    <div
      className={styles.thumb}
      style={{ backgroundColor: color, borderColor: color }}
    >
      <img
        src={src.large}
        alt={alt}
        onClick={() => {
          openModal(src.large, alt);
        }}
      />
    </div>
  );
};
export default PhotosGalleryItem;
