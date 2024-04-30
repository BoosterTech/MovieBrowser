import { useEffect, useState } from "react";
import {
  selectSettingMoviePageNrValue,
  selectSettingPageStateValue,
  selectSettingPeoplePageNrValue,
  setPageNr,
  setSearchState,
} from "../../../../Redux_store/settingSlice";
import { Input, SearchWrapper } from "../../styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const pageState = useSelector(selectSettingPageStateValue);
  const moviePageNr = useSelector(selectSettingMoviePageNrValue);
  const peoplePageNr = useSelector(selectSettingPeoplePageNrValue);
  const replaceQueryParameter = useReplaceQueryParameter();

  const history = useHistory();
  const dispatch = useDispatch();
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    if (
      placeholder === "Search for movies..." ||
      placeholder === "Search for people..." ||
      placeholder === ""
    ) {
      dispatch(setPageNr(1));
      dispatch(setSearchState(false));

      const newPath =
        pageState === "movies"
          ? `?page=${moviePageNr}`
          : `?page=${peoplePageNr}`;
      if (history.location.search !== newPath) history.push(newPath);
    }
  }, [placeholder, dispatch]);

  const onInputChange = ({ target }) => {
    dispatch(setSearchState(true));
    dispatch(setPageNr(1));

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
