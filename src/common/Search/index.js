import { useState } from "react";
import {
  selectSettingPageStateValue,
  setSearchState,
} from "../../Redux_store/settingSlice";
import { Input, SearchWrapper } from "../Navigation/styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const pageState = useSelector(selectSettingPageStateValue);
  const [placeholder, setPlaceholder] = useState(
    pageState === "movies" ? "Search for movies..." : "Search for people..."
  );
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    dispatch(setSearchState(true));
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  const updatePlaceholder = () => {
    dispatch(setSearchState(false));
    setPlaceholder(placeholder);
  };

  return (
    <SearchWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={onInputChange}
        onBlur={updatePlaceholder}
        value={query || ""}
      />
    </SearchWrapper>
  );
};

export default Search;
