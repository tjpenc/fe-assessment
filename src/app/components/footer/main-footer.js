import nextConfig from '../../../../next.config';
import styles from './main-footer.module.css'
import Image from 'next/image';

const MainFooter = () => {
    return (
        <>
          <div className={styles["logo-container"]}>
            <div className={styles["logo"]}>
                <Image
                    src={`${nextConfig.basepath}/images/HCA_Blue.png`}
                    alt="HCA Logo"
                    width={87}
                    height={32}
                />
            </div>
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
                <Image
                    src={`${nextConfig.basepath}/icons/facebook.png`}
                    alt="facebook logo"
                    width={30}
                    height={30}
                    className={styles["socials-logo"]}
                />
                <Image
                    src={`${nextConfig.basepath}/icons/instagram.png`}
                    alt="Instagram logo"
                    width={30}
                    height={30}
                    className={styles["socials-logo"]}
                />
                <Image
                    src={`${nextConfig.basepath}/icons/twitter.png`}
                    alt="Twitter logo"
                    width={30}
                    height={30}
                    className={styles["socials-logo"]}
                />
            </div>
          </div>
        </>
    )
  };
  
export default MainFooter;
