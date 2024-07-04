import InfiniteScroll from 'react-infinite-scroll-component';
import { useImage } from '../../context/Context';
import styles from "./imagescards.module.css";
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InfinitySpin } from 'react-loader-spinner';

const ImagesCards = () => {
   const { images, fetchMoreImages, hasMore, handleDownloadImage, loading } = useImage();

   return (
      <>
         <ToastContainer />
         <InfiniteScroll
            dataLength={images.length} //This is important field to render the next data
            next={fetchMoreImages}
            hasMore={hasMore}
            loader={<InfinitySpin
               visible={true}
               width="200"
               color="#4fa94d"
               ariaLabel="infinity-spin-loading"
            />}
            endMessage={<p>No More Images</p>}
            className={styles.infinitescroll}>
            <div className={styles.imageGrid}>
               {images.map(image => (
                  <div key={uuidv4()} className={styles.imageItem}>
                     {image.src && image.src.medium ? (
                        <img
                           src={image.src.medium}
                           alt={image.alt}
                        />
                     ) : (
                        <p>Image not available</p>
                     )}
                     <Button
                        className={styles.download}
                        variant="success"
                        onClick={() => { handleDownloadImage(image.src.original, `image-${image.id}`) }}
                        disabled={loading[`image-${image.id}`]}
                     >{loading[`image-${image.id}`] ? "Downloading..." : "Dowanload"}</Button>
                  </div>
               ))}
            </div>
         </InfiniteScroll>
      </>
   );
}
export default ImagesCards;