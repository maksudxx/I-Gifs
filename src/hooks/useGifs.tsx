import { Gif } from "../interfaces/Gif.interface";
import { getGifByQuery } from "../actions/get-gifs-by-query.actions";
import { useEffect, useRef, useState } from "react";

export const useFetch = () => {
  const [recentSearch, setRecentSearch] = useState<string[]>([]);
  const [listGifs, setListGifs] = useState<Gif[]>([]);

  //! Ejemplo de useRef
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleClickRemoveRecentSearch = (search: string) => {
    const result = recentSearch.filter((r) => search !== r);
    setRecentSearch(result);
  };

  const handleSearch = async (search: string) => {
    // formateamos para que no pengas espacios y la validacion cuando ingresen espacios  vacios no haga nada
    const query = search.toLowerCase().trim();
    if (recentSearch.includes(query)) return;
    if (query.length === 0) return;
    setRecentSearch([query, ...recentSearch].splice(0, 10));

    //!pregunta si la busqueda ya esta en caché
    if (gifsCache.current[query]) {
      setListGifs(gifsCache.current[query]);
      return;
    }
    const data = await getGifByQuery(query);
    setListGifs(data);

    //!guardamos la nueva busqueda en caché
    gifsCache.current[query] = data;
  };

  useEffect(() => {
    const fetchGifs = async () => {
      const data = await getGifByQuery("programation"); //le agregue un valor por defecto para que el inicio no se vea vacio
      setListGifs(data);
    };

    fetchGifs();
  }, []);
  return {
    recentSearch,
    listGifs,
    handleClickRemoveRecentSearch,
    handleSearch,
  };
};
