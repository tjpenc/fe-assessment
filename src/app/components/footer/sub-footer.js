import styles from './sub-footer.module.css';

const SubFooter = () => {
    return (
        <>
          <div className={styles["copywright-container"]}>Copywright 1999-2021 <a href="#">&copy;HCA Inc:</a> All rights reserved</div>
          <div className={styles["links-container"]}>
            <div>
                <a href="#">Notice of Privacy Practice</a> |
                <a href="#"> Terms & Conditions</a> |
                <a href="#"> Notice at Collection</a> |
                <a href="#"> Privacy Policy</a> |
                <a href="#"> Do Not Sell My Personal Information</a>
            </div>
            <div>
                <a href="#">Social Media Policy</a> |
                <a href="#"> Acceptable Use Policy</a> |
                <a href="#"> HCA Nondiscrimination Notice</a> |
                <a href="#"> Accessability</a> |
                <a href="#"> Responsible Disclosure</a>
            </div>
          </div>
        </>
    )
  };
  
export default SubFooter;
