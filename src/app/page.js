import Image from "next/image";
import styles from "./page.module.css";
import Container from "./components/container";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className={styles["body"]}>
      <div className={`${styles["section"]} ${styles["header"]}`}>
        <Header />
      </div>
      <div className={`${styles["section"]} ${styles["container"]}`}>
        <Container />
      </div>
      <div className={`${styles["section"]} ${styles["footer"]}`}>
        <Footer />
      </div>
    </div>
  );
}
