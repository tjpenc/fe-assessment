import MainFooter from "./main-footer";
import SubFooter from "./sub-footer";
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <>
            <div className={`${styles["main-footer"]} ${styles["flex-center"]}`}>
                <MainFooter />
            </div>
            <div className={`${styles["sub-footer"]} ${styles["flex-center"]}`}>
                <SubFooter />
            </div>
        </>
    );
  };
  
export default Footer;
