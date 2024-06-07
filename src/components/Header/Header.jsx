import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './header.module.css';
import SearchBar from './SearchBar';

const Header = () => {
   const [query, setQuery] = useState('');

   const handleSearch = (e) => {
      e.preventDefault();
      // Handle search logic here
      console.log(query);
   };

   return (
      <header className={styles.header}>
         <div className={styles.overlay}>
            <div className={styles.content}>
               <h1 className={styles.title}>CopyRight-Free Images</h1>
               <form className={styles.searchBar} onSubmit={handleSearch}>
                  <SearchBar/>
                  {/* <input
                     type="text"
                     placeholder="Search..."
                     value={query}
                     onChange={(e) => setQuery(e.target.value)}
                     className={styles.input}
                  />
                  <button type="submit" className={styles.button}>
                     <FaSearch />
                  </button> */}
               </form>
            </div>
         </div>
      </header>
   );
};

export default Header;
