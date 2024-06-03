import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const context = createContext(null);
export const useImage = () => useContext(context);

export const ContextProvider = ({ children }) => {
   const [images, setImages] = useState([]);

   // fetch images
   const API_KEY = "HEXgRugcBuvlaoxcAQyixwQdZrjOmQoXwxuhMbv7yiD9tU6VDPGDemnH";
   useEffect(() => {
      const fetchImages = async () => {
         const response = await fetch(`https://api.pexels.com/v1/search?query=nature&per_page=80`, {
            headers: {
               Authorization: API_KEY
            }
         })
            .then((response) => response.json())
            .then((data) => setImages(data.photos));
      }
      fetchImages();
   }, [])

   return (
      <context.Provider value={{images}} >
         {children}
      </context.Provider>
   )
}