import styles from "./navbar.module.css"
import logo from "../../assets/logo.png"

const Navbar = () => {
   return (
      <div className={styles.navbar}>
         <img src={logo} className={styles.logo} />
      </div>
   )
}

export default Navbar;