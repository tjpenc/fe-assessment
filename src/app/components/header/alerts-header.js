import styles from "./alerts-header.module.css";

const AlertsHeader = () => {
    return (
        <>
          <div className={styles["wait-times-container"]}>
            View All Er Wait Times
          </div>
          <div className={styles["alerts-container"]}>
            <button className={`${styles["btn-general"]} ${styles["appointment-button"]}`}>
                Make an Appointment
            </button>
            <button className={`${styles["btn-general"]} ${styles["alerts-button"]}`}>
                Alerts
            </button>
          </div>
        </>
    )
  };
  
export default AlertsHeader;
