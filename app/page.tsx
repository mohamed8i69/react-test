import Image from "next/image";
import { Header } from "@/components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Header logo="https://via.placeholder.com/180x180" tagline={["Home","projects","Blog", "About", "Contact"]} />
    </main>
  );
}
