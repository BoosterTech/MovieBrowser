import { selectSettingPageStateValue } from "../../Redux_store/settingSlice";
import { Input, SearchWrapper } from "../Navigation/styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import { useSelector } from "react-redux";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const pageState = useSelector(selectSettingPageStateValue);

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <SearchWrapper>
      <Input
        type="text"
        placeholder={
          pageState === "movies"
            ? "Search for movies..."
            : "Search for people..."
        }
        value={query || ""}
        onChange={onInputChange}
      />
    </SearchWrapper>
  );
};

export default Search;
