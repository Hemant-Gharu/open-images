import { createContext, useContext, useEffect, useState } from "react";
import { toast, Bounce } from 'react-toastify';

const context = createContext(null);
export const useImage = () => useContext(context);

export const ContextProvider = ({ children }) => {
   const [images, setImages] = useState([]);
   const [search, setSearch] = useState("travel");
   const [page, setPage] = useState(1);
   const [hasMore, setHasMore] = useState(true);
   const [loading, setLoading] = useState({});

   const API_KEY = "HEXgRugcBuvlaoxcAQyixwQdZrjOmQoXwxuhMbv7yiD9tU6VDPGDemnH";

   useEffect(()=>{
      setImages([]);
      setPage(1);
   },[search]);

   // fetch images
   useEffect(() => {
      const fetchImages = async () => {
         if (search.trim() === "") {
            setImages([]); // Clear images if search is empty
            return;
         }
         try {
            const response = await fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=5&page=${page}`, {
               headers: { Authorization: API_KEY }
            });
            const data = await response.json();
            if (data.photos && data.photos.length > 0) {
               setImages((prevImages) => page === 1 ? data.photos : [...prevImages, ...data.photos]);
            } else {
               setHasMore(false);
            }
         } catch (error) {
            console.error("Error fetching images:", error);
            setHasMore(false);
         }
      };

      fetchImages();
   }, [search, page]);

   //load more image on scroll
   const fetchMoreImages = () => {
      setPage((prevPage) => prevPage + 1);
   };

   // Download Image
   const handleDownloadImage = async (url, imageName) => {
      try {
         setLoading((prevLoading) => ({ ...prevLoading, [imageName]: true }));
         const response = await fetch(url);
         const blob = await response.blob();
         const blobUrl = window.URL.createObjectURL(blob);
         const link = document.createElement("a");
         link.href = blobUrl;
         link.download = imageName;
         document.body.appendChild(link);
         link.click();
         link.remove();
         window.URL.revokeObjectURL(blobUrl);
         handleToastify();
      } catch (error) {
         console.error('Error downloading the image:', error);
         toast.error("Error downloading the image.");
      } finally {
         setLoading((prevLoading) => ({ ...prevLoading, [imageName]: false }));
      }
   };

   //Toastify
   const handleToastify = () => {
      toast.success('Image Successfully Download!', {
         position: "top-right",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
         transition: Bounce,
      });
   };

   return (
      <context.Provider
         value={{
            images,
            setSearch,
            fetchMoreImages,
            hasMore,
            handleDownloadImage,
            loading
         }}>
         {children}
      </context.Provider>
   );
};
