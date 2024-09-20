import nextConfig from "../../../../next.config";
import styles from "./alerts-header.module.css";
import Image from "next/image";

const AlertsHeader = () => {
    return (
        <>
          <div className={styles["wait-times-container"]}>
            <Image
                src={`${nextConfig.basepath}/icons/clock.png`}
                alt="alert icon"
                width={15}
                height={15}
            />
            <span>View All ER Wait Times</span>
            <Image
                src={`${nextConfig.basepath}/icons/dropdown.png`}
                alt="alert icon"
                width={10}
                height={10}
            />
          </div>
          <div className={styles["alerts-container"]}>
            <button className={`${styles["btn-general"]} ${styles["appointment-button"]}`}>
                <Image
                    src={`${nextConfig.basepath}/icons/calendar.png`}
                    alt="alert icon"
                    width={10}
                    height={10}
                    className={styles["image-invert"]}
                />
                <span>Make An Appointment</span>
            </button>
            <button className={`${styles["btn-general"]} ${styles["alerts-button"]}`}>
                <Image
                    src={`${nextConfig.basepath}/icons/alert.png`}
                    alt="alert icon"
                    width={20}
                    height={20}
                />
                <span>Alerts</span>
                <span className={styles["alerts-counter"]}>2</span>
            </button>
          </div>
        </>
    )
  };
  
export default AlertsHeader;
