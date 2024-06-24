import InfiniteScroll from 'react-infinite-scroll-component';
import { useImage } from '../../context/Context';
import styles from "./imagescards.module.css";
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImagesCards = () => {
   const { images, fetchMoreImages, hasMore, handleDownloadImage } = useImage();

   console.log("images => ", images);


   return (
      <>
      <ToastContainer/>
      <InfiniteScroll
         dataLength={images.length} //This is important field to render the next data
         next={fetchMoreImages}
         hasMore={hasMore}
         loader={<h4>Loading...</h4>}
         endMessage={<p>No More Images</p>}>
         <div className={styles.imageGrid}>
            {images.map(image => (
               <div key={uuidv4()} className={styles.imageItem}>
                  {image.src && image.src.medium ? (
                     <img
                        src={image.src.medium}
                        alt={image.alt}
                     // style={{ aspectRatio: `${image.width} / ${image.height}` }}
                     />
                  ) : (
                     <p>Image not available</p>
                  )}
                  <Button
                     className={styles.download}
                     variant="success"
                     onClick={() => {handleDownloadImage(image.src.original, `image-${image.id}`)}}
                  >Download</Button>
               </div>
            ))}
         </div>
      </InfiniteScroll>
      </>
   );
}
export default ImagesCards;