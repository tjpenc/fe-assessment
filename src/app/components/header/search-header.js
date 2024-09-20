import styles from './search-header.module.css';

const SearchHeader = () => {
    return (
        <>
          <div className={styles["search-container"]}>
            <p className={styles["find-care"]}>Find Care</p>
            <input className={styles["search-bar"]} placeholder='What are you looking for?' />
          </div>
          <div className={styles["help-container"]}>
            Need Help? We're Here.
          </div>
        </>
    )
  };
  
export default SearchHeader;
