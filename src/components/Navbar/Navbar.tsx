import { IoLanguageSharp, IoLogIn } from "react-icons/io5";
import styles from "./Navbar.module.css";
import { BsFillGridFill } from "react-icons/bs";

export const Navbar = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.logo}>
          <span>
            I<span className={styles.heart}>♥</span>GIFS
          </span>
          <BsFillGridFill />
        </div>
        <div className={styles.buttonsContainer}>
          <p
            className={`${styles.btn} ${styles.btnLogin}`}
            onClick={() => alert("PROXIMAMENTE :)")}
          >
            <span className={styles.iconBtn}>
              <IoLogIn className={styles.icono} />
            </span>
            Iniciar sesión
          </p>
          <p
            className={`${styles.btn} ${styles.btnLanguage}`}
            onClick={() => alert("PROXIMAMENTE :)")}
          >
            {" "}
            <span className={styles.iconBtn}>
              <IoLanguageSharp className={styles.icono} />
            </span>
            ES
          </p>
        </div>
      </header>
    </>
  );
};
