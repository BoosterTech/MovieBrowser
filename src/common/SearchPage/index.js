import { LoadingSpinner } from "../Loader";
import { MessageHeader } from "./styled";

const SearchPage = () => {
  return (
    <>
      <MessageHeader>Search results for “SearchQuery”</MessageHeader>
      <LoadingSpinner />
    </>
  );
};

export default SearchPage;
