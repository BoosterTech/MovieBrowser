import { LoadingSpinner } from "../Loader";
import { MessageHeader } from "./styled";

const SearchPage = (searchQuery) => {
  return (
    <>
      <MessageHeader>Search Results for “{searchQuery}”</MessageHeader>
      <LoadingSpinner />
    </>
  );
};

export default SearchPage;
