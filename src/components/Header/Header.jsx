import styles from './header.module.css';
import SearchBar from './SearchBar';

const Header = () => {

   const handleSearch = (e) => {
      e.preventDefault();
   };

   return (
      <header className={styles.header}>
         <div className={styles.overlay}>
            <div className={styles.content}>
               <h1 className={styles.title}>CopyRight-Free Images</h1>
               <form className={styles.searchBar} onSubmit={handleSearch}>
                  <SearchBar/>
               </form>
            </div>
         </div>
      </header>
   );
};

export default Header;
