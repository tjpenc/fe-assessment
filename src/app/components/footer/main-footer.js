import styles from './main-footer.module.css'

const MainFooter = () => {
    return (
        <>
          <div className={styles["logo-container"]}>
            <div className={styles["logo"]}>Image</div>
            <div className={styles["address"]}>
                <p>HCA Houston Healthcare</p>
                <p>3737 Buffalo Speedway</p>
                <p>Suite 1400</p>
                <p>Houston, TX 77098</p>
            </div>
          </div>
          <div className={styles["about-container"]}>
            <p>About Us</p>
            <a href="#">About HCA Houston</a>
            <a href="#">Phone Directory</a>
            <a href="#">Maps & Directions</a>
            <a href="#">Media Center</a>
            <a href="#">Contact Us</a>
          </div>
          <div className={styles["socials-container"]}>
            <p>Follow Us</p>
            <div className={styles["socials"]}>
                <p>Logo</p>
                <p>Logo</p>
                <p>Logo</p>
                <p>Logo</p>
            </div>
          </div>
        </>
    )
  };
  
export default MainFooter;
