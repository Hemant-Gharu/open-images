import { useState } from 'react';
import { useImage } from '../../context/Context';
import styles from './filterButtons.module.css';

const FilterButtons = () => {
   const { setSearch } = useImage();
   const [activeFilter, setActiveFilter] = useState(null);

   const handleFilterClick = (searchTerm) => {
      setActiveFilter(searchTerm);
      setSearch(searchTerm);
   }

   return (
      <div className={styles.buttonContainer}>
         <button
            className={`${styles.button} ${activeFilter === "nature" ? styles.active : ''}`}
            onClick={() => handleFilterClick("nature")}>
            Nature
         </button>
         <button
            className={`${styles.button} ${activeFilter === "business" ? styles.active : ''}`}
            onClick={() => handleFilterClick("business")}>
            Business
         </button>
         <button
            className={` ${styles.button} ${activeFilter === "food" ? styles.active : ''}`}
            onClick={() => handleFilterClick("food")}>
            Food
         </button>
         <button
            className={` ${styles.button} ${activeFilter === "technology" ? styles.active : ''}`}
            onClick={() => handleFilterClick("technology")}>
            Technology
         </button>
         <button
            className={` ${styles.button} ${activeFilter === "travel" ? styles.active : ''}`}
            onClick={() => handleFilterClick("travel")}>
            Travel
         </button>
         <button
            className={` ${styles.button} ${activeFilter === "fitness" ? styles.active : ''}`}
            onClick={() => handleFilterClick("fitness")}>
            Fitness
         </button>
         <button
            className={` ${styles.button} ${activeFilter === "lifestyle" ? styles.active : ''}`}
            onClick={() => handleFilterClick("lifestyle")}>
            Lifestyle
         </button>
         <button
            className={` ${styles.button} ${activeFilter === "fashion" ? styles.active : ''}`}
            onClick={() => handleFilterClick("fashion")}>
            Fashion
         </button>
         <button
            className={` ${styles.button} ${activeFilter === "wedding" ? styles.active : ''}`}
            onClick={() => handleFilterClick("wedding")}>
            Wedding
         </button>
         <button
            className={` ${styles.button} ${activeFilter === "family" ? styles.active : ''}`}
            onClick={() => handleFilterClick("family")}>
            Family
         </button>
      </div>
   )
}

export default FilterButtons;