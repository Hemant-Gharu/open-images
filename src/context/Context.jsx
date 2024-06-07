import { createContext, useContext, useEffect, useState } from "react";

const context = createContext(null);
export const useImage = () => useContext(context);

export const ContextProvider = ({ children }) => {
   const [images, setImages] = useState([]);
   const [search, setSearch] = useState("nature");

   console.log("images ", images);

   // fetch images
   const API_KEY = "HEXgRugcBuvlaoxcAQyixwQdZrjOmQoXwxuhMbv7yiD9tU6VDPGDemnH";
   useEffect(() => {
      const fetchImages = async () => {

         if (search.trim() === "") {
            setImages([]); // Clear images if search is empty
            return;
         }

         try {
            const response = await fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=2`, {
               headers: {
                  Authorization: API_KEY
               }
            })
            const data = await response.json();
            setImages(data.photos || []);
         } catch (error) {
            console.error("Error fetching images:", error);
            // setImages([]); 
         }
      };
      fetchImages();
   }, [search])

   return (
      <context.Provider value={{ images, setSearch }} >
         {children}
      </context.Provider>
   )
}