import { useState } from 'react';
import { useImage } from '../../context/Context';
import styles from './filterButtons.module.css';

const FilterButtons = () => {
   const { setSearch } = useImage();
   const [activeFilter, setActiveFilter] = useState(null);

   return (
      <div className={styles.buttonContainer}>
         <button
            value="All"
            className={`${styles.button} ${activeFilter === "All" ? styles.active : ''}`}
            onClick={(e) => { setActiveFilter(e.target.value); setSearch("nature"); }}
         >
            Nature
         </button>
         <button
            value="Active"
            className={`${styles.button} ${activeFilter === "Active" ? styles.active : ''}`}
            onClick={(e) => { setActiveFilter(e.target.value); setSearch("business") }}
         >
            Business
         </button>
         <button
            value="food"
            className={` ${styles.button} ${activeFilter === "food" ? styles.active : ''}`}
            onClick={(e) => { setActiveFilter(e.target.value); setSearch("food") }}>
            Food
         </button>
         <button
            value="technology"
            className={` ${styles.button} ${activeFilter === "technology" ? styles.active : ''}`}
            onClick={(e) => { setActiveFilter(e.target.value); setSearch("technology") }}>
            Technology
         </button>
         <button
            value="travel"
            className={` ${styles.button} ${activeFilter === "travel" ? styles.active : ''}`}
            onClick={(e) => { setActiveFilter(e.target.value); setSearch("travel") }}>
            Travel
         </button>
         <button
            value="fitness"
            className={` ${styles.button} ${activeFilter === "fitness" ? styles.active : ''}`}
            onClick={(e) => { setActiveFilter(e.target.value); setSearch("fitness") }}>
            Fitness
         </button>
         <button
            value="lifestyle"
            className={` ${styles.button} ${activeFilter === "lifestyle" ? styles.active : ''}`}
            onClick={(e) => { setActiveFilter(e.target.value); setSearch("lifestyle") }}>
            Lifestyle
         </button>
         <button
            value="fashion"
            className={` ${styles.button} ${activeFilter === "fashion" ? styles.active : ''}`}
            onClick={(e) => { setActiveFilter(e.target.value); setSearch("fashion") }}>
            Fashion
         </button>
         <button
            value="wedding"
            className={` ${styles.button} ${activeFilter === "wedding" ? styles.active : ''}`}
            onClick={(e) => { setActiveFilter(e.target.value); setSearch("wedding") }}>
            Wedding
         </button>
         <button
            value="family"
            className={` ${styles.button} ${activeFilter === "family" ? styles.active : ''}`}
            onClick={(e) => { setActiveFilter(e.target.value); setSearch("family") }}>
            Family
         </button>
      </div>
   )
}

export default FilterButtons;