import { FC } from "react";
import { Gif } from "../../interfaces/Gif.interface";
import styles from "./GridGifs.module.css";
interface Props {
  listGifs: Gif[];
}
export const GridGifs: FC<Props> = ({ listGifs }) => {
  return (
    <>
      <ul className={styles.gridContainer}>
        {listGifs?.map(({ id, url, title, height, width, size }) => (
          <li key={id} className={styles.card}>
            <img src={url} alt={title} />
            <h3>{title}</h3>
            <p>
              Resolución: {width} x {height}
            </p>
            <p>Tamaño: {Math.round(size / 1024)}kb.</p>
          </li>
        ))}
      </ul>
    </>
  );
};
