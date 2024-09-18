import AlertsHeader from "./alerts-header";
import NavBar from "./nav-bar";
import SearchHeader from "./search-header";
import styles from "./header.module.css";

const Header = () => {
    return (
        <>
            <div className={`${styles["nav-bar"]} ${styles["flex-center"]}`}>
                <NavBar />
            </div>
            <div className={`${styles["alerts-header"]} ${styles["flex-center"]}`}>
                <AlertsHeader />
            </div>
            <div className={`${styles["search-header"]} ${styles["flex-center"]}`}>
                <SearchHeader />
            </div>
        </>
    );
  };
  
export default Header;
