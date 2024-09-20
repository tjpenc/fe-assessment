import styles from "./search-header.module.css";
import Image from "next/image";
import nextConfig from "../../../../next.config";

const SearchHeader = () => {
    return (
        <>
          <div className={styles["search-container"]}>
            <p className={styles["find-care"]}>Find Care</p>
            <div className={styles["search-bar"]}>
                <input type="text" className={styles["search-input"]} placeholder="What are you looking for?" />
                <button className={styles["search-icon"]}>
                    <Image
                        src={`${nextConfig.basepath}/icons/search1.png`}
                        alt="Search icon"
                        width={10}
                        height={10}
                    />
                </button>
            </div>
          </div>
          <div className={styles["help-container"]}>
            Need Help? We&apos;re Here.
          </div>
        </>
    )
  };
  
export default SearchHeader;
