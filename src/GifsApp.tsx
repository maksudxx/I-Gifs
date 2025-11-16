import { Footer } from "./components/Footer/Footer";
import { GridGifs } from "./components/GridGifs/GridGifs";
import { Navbar } from "./components/Navbar/Navbar";
import { RecentSearches } from "./components/RecentSearches/RecentSearches";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { useFetch } from "./hooks/useGifs";

export const GifsApp = () => {
  const {
    handleClickRemoveRecentSearch,
    handleSearch,
    listGifs,
    recentSearch,
  } = useFetch();

  return (
    <>
      {/*header */}
      <Navbar />
      <main>
        {/*search */}
        <Searchbar onQuery={(query: string) => handleSearch(query)} />
        {/*busquedas previas */}
        <RecentSearches
          searches={recentSearch}
          onLabelClicked={handleClickRemoveRecentSearch}
        />
        {/*Gifs */}
        <GridGifs listGifs={listGifs} />
      </main>

      <Footer />
    </>
  );
};
