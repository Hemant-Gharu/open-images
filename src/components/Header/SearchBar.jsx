import { FaSearch } from 'react-icons/fa';
import styles from './searchbar.module.css';
import { useImage } from '../../context/Context';

const SearchBar = () => {
   const {setSearch} = useImage();     

   return (
      <div className={styles.searchBar} >
         <input
            type="text"
            placeholder="Search..."
            onChange={(e)=> setSearch(e.target.value)}
            className={styles.input}
         />
         <button type="submit" className={styles.button}>
            <FaSearch />
         </button>
      </div>
   );
};

export default SearchBar;
