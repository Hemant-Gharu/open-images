import { useState } from 'react';
import { useImage } from '../../context/Context';
import styles from './filterButtons.module.css';
import { Button } from 'react-bootstrap';

const FilterButtons = () => {
   const { setSearch } = useImage();
   const [activeFilter, setActiveFilter] = useState(null);

   return (
      <div className={styles.buttonContainer}>

         <button
            value="All"
            className={`${styles.button} ${activeFilter === "All" ? styles.active : ''}`}
            onClick={(e)=> {setActiveFilter(e.target.value); setSearch("nature");}}
         >
            Nature
         </button>
         <button
            value="Active"
            className={`${styles.button} ${activeFilter === "Active" ? styles.active : ''}`}
            onClick={(e)=> {setActiveFilter(e.target.value); setSearch("animals")}}
         >
            Animals
         </button>
         <button
            value="science"
            className={` ${styles.button} ${activeFilter === "science" ? styles.active : ''}`}
            onClick={(e)=> {setActiveFilter(e.target.value); setSearch("science")}}>
            Science
         </button>
         <button
            value="space"
            className={` ${styles.button} ${activeFilter === "space" ? styles.active : ''}`}
            onClick={(e)=> {setActiveFilter(e.target.value); setSearch("space")}}>
            Space
         </button>
      </div>
   )
}

export default FilterButtons;