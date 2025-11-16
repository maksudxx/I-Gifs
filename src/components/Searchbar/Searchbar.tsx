import { IoSearch } from "react-icons/io5";
import styles from "./Searchbar.module.css";
import { FC, KeyboardEvent, useEffect, useState } from "react";

interface Props {
  onQuery: (query: string) => void;
}
export const Searchbar: FC<Props> = ({ onQuery }) => {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };

  useEffect(() => {
    //Debounce
    const timeOut = setTimeout(() => {
      handleSearch();
    }, 700);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };
  return (
    <>
      <div className={styles.searchbarContainer}>
        <input
          type="text"
          placeholder="Buscar gifs..."
          className={styles.inputSearch}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className={styles.btnSearch} onClick={handleSearch}>
          <IoSearch className={styles.searchIcon} />
        </button>
      </div>
    </>
  );
};
