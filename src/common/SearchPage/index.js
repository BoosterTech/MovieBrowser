import { ContentHeader } from "../../features/movieList/styled";
import { LoadingSpinner } from "../Loader";

const SearchPage = (searchQuery) => {
  return (
    <>
      <ContentHeader>Search Results for “{searchQuery}”</ContentHeader>
      <LoadingSpinner />
    </>
  );
};

export default SearchPage;
