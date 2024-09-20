import nextConfig from "../../../../next.config";
import styles from "./nav-bar.module.css";
import Image from "next/image";

const NavBar = () => {
    return (
        <>
          <div className={styles["logo-container"]}>
            <Image
              src={`${nextConfig.basepath}/images/HCA_Horizontal_White.png`}
              alt="HCA Logo"
              width={180}
              height={15}
            />
          </div>
          <div className={styles["links-container"]}>
            <a href='#'>
              <Image
                src={`${nextConfig.basepath}/icons/home.png`}
                alt="Home icon"
                width={20}
                height={20}
                className={styles["image-invert"]}
              />
            </a>
            <a href='#'>My Health Resources</a>
            <a href='#'>Specialties</a>
            <a href='#'>Locations</a>
            <a href='#'>Patients & Visitors</a>
            <a href='#'>Careers</a>
            <a href='#'>About Us</a>
            <a href='#'>Find A Doctor</a>
            <a href='#'>Manage Your Account</a>
            <a href='#'>MyHealthONE</a>
            <a href='#'>...</a>
            <div className={styles["search-bar"]}>
                <button className={styles["search-icon"]}>
                  <Image
                    src={`${nextConfig.basepath}/icons/search2.png`}
                    alt="Search icon"
                    width={10}
                    height={10}
                  />
                </button>
                <input placeholder="Search"/>
              </div>
          </div>
        </>
    )
  };
  
export default NavBar;
