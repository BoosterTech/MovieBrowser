import { useEffect, useState } from "react";
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
  const pageState = useSelector(selectSettingPageStateValue);
  const replaceQueryParameter = useReplaceQueryParameter();
  const dispatch = useDispatch();
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    if (
      placeholder === "Search for movies..." ||
      placeholder === "Search for people..." ||
      placeholder === ""
    ) {
      dispatch(setSearchState(false));
    }
  }, [placeholder, dispatch]);

  const onInputChange = ({ target }) => {
    dispatch(setSearchState(true));
    setPlaceholder(target.value);

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
        onChange={onInputChange}
        value={query || ""}
      />
    </SearchWrapper>
  );
};

export default Search;
