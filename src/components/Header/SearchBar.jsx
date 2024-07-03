import { FaSearch } from 'react-icons/fa';
import styles from './searchbar.module.css';
import { useImage } from '../../context/Context';

const SearchBar = () => {
   const { setSearch } = useImage();

   return (
      <div className={styles.searchBar} >
         <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className={styles.input}
         />
         <button type="submit" className={styles.button}>
            <FaSearch />
         </button>
      </div>
   );
};

export default SearchBar;

























// import { FaSearch } from 'react-icons/fa';
// import styles from './searchbar.module.css';
// import { useImage } from '../../context/Context';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete';

// const SearchBar = () => {
//    const { setSearch, suggestions } = useImage();

//    const handleOnSearch = (string, results) => {
//       console.log('Search string:', string);
//       console.log('Search results:', results);
//    };

//    const handleOnHover = (result) => {
//       console.log('Hovered over:', result);
//    };

//    const handleOnSelect = (item) => {
//       console.log('Selected item:', item);
//       // Trigger a new search when an item is selected
//       setSearch(item.name);
//    };

//    const handleOnFocus = () => {
//       console.log('Focused');
//    };

//    return (
//       <div className={styles.searchBar}>
//          <ReactSearchAutocomplete
//             items={suggestions}
//             onSearch={handleOnSearch}
//             onHover={handleOnHover}
//             onSelect={handleOnSelect}
//             onFocus={handleOnFocus}
//             autoFocus
//             placeholder="Search..."
//             onChange={(e) => setSearch(e.target.value)}
//             className={styles.input}
//          />
//          {/* <button type="submit" className={styles.button}>
//             <FaSearch />
//          </button> */}
//       </div>
//    );
// };

// export default SearchBar;
