import Image from "next/image";
import styles from "./page.module.css";
import Container from "./components/container";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
}
