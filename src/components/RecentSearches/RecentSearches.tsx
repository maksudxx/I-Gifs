import { FC } from "react";
import styles from "./RecentSearches.module.css";

//!Interface del componente en el cual enviamos el arreglo de busquedas recientes y un evento click en el cual borra
//!el elemento buscado del historial
interface Props {
  searches: string[];
  onLabelClicked: (term: string) => void;
}

export const RecentSearches: FC<Props> = ({ searches, onLabelClicked }) => {
  return (
    <>
      <div className={styles.container}>
        <h3>Ultimas busquedas</h3>
        <div className={styles.recentSearchesContainer}>
          <ul className={styles.recentSearches}>
            {searches?.map((search) => (
              <li
                className={styles.recentSearchCard}
                key={search}
                onClick={() => onLabelClicked(search)}
              >
                {search}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
