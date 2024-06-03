import { useImage } from '../../context/Context';
import styles from "./imagescards.module.css";
import Button from 'react-bootstrap/Button';

const ImagesCards = () => {
   const { images } = useImage();
   return (
      <div className={styles.imageGrid}>
         {images.map(image => (
            <div key={image.id} className={styles.imageItem}>
               <img
                  src={image.src.medium}
                  alt={image.alt}
                  style={{ aspectRatio: `${image.width} / ${image.height}` }}
               />
               <Button className={styles.download} variant="success">Download</Button>
            </div>
         ))}
      </div>)
}

export default ImagesCards;