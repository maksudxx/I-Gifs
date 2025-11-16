import { BsFillGridFill } from "react-icons/bs";
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logo}>
        <span>
          I<span className={styles.heart}>♥</span>GIFS
        </span>
        <BsFillGridFill />
      </div>
      <div></div>
      <p>© Facundo Maksud - Derechos reservados </p>
    </footer>
  );
};
