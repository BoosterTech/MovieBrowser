import { useEffect, useState } from "react";
import { PersonTile } from "./components/PersonTile";
import { ContentWrapper, ContentHeader, TilesWrapper } from "./styled";
import {
  API_AUTHORIZATION,
  API_PEOPLE_POPULAR_URL,
  DEFAULT_DEBOUNCE_TIME,
  SEARCH_RESULTS_TITLE,
} from "../../common/Global_Variables";
import { useDispatch, useSelector } from "react-redux";
import { LoadingSpinner } from "../../common/Loader";
import {
  selectSettingLoadingValue,
  selectSettingPageStateValue,
  setLoadingState,
  setPageState,
  setPageNr,
  setSearchMaxPageNr,
  selectSettingPeoplePageNrValue,
  selectSettingSearchPageNrValue,
  selectSettingSearchValue,
} from "../../Redux_store/settingSlice";
import { toProfile } from "../../routes";
import { NavLink, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import searchQueryParamName from "../../common/Navigation/components/Search/searchQueryParamName";
import ErrorPage from "../../common/Error";
import SearchPage from "../../common/SearchPage";
import NoResultPage from "../../common/noResult";
import useDebounce from "../../hooks/useDebounce";

const DEFAULT_PAGE_STATE = "people";
const POPULAR_MOVIES_TITLE = "Popular People";

const PersonList = () => {
  const [peopleData, setPeopleData] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const [isFirstEffect, setIsFirstEffect] = useState(true);
  const dispatch = useDispatch();

  const peoplePageNr = useSelector(selectSettingPeoplePageNrValue);
  const loadingState = useSelector(selectSettingLoadingValue);
  const pageState = useSelector(selectSettingPageStateValue);
  const searchPageNr = useSelector(selectSettingSearchPageNrValue);
  const searchState = useSelector(selectSettingSearchValue);

  const location = useLocation();
  const history = useHistory();
  const myQuery = new URLSearchParams(location.search).get(
    searchQueryParamName
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search).get("page");
    const path = location.pathname;

    dispatch(setLoadingState("loading"));
    dispatch(setPageState("DEFAULT_PAGE_STATE"));

    if (params && path.includes("/people")) dispatch(setPageNr(Number(params)));

    sessionStorage.setItem("pageState", DEFAULT_PAGE_STATE);
    sessionStorage.setItem("peoplePageNr", peoplePageNr);
    setIsFirstEffect(false);
  }, [peoplePageNr, searchPageNr]);

  useEffect(() => {
    dispatch(setPageNr(1));
  }, [myQuery]);

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get("search");
    const newPath = `?page=${searchState ? searchPageNr : peoplePageNr}${
      searchQuery ? `&search=${searchQuery}` : ""
    }`;

    if (location.search !== newPath && !isFirstEffect) {
      history.push(newPath);
    }
  }, [peoplePageNr, myQuery, searchPageNr, isFirstEffect, location.search]);

  useEffect(() => {
    if (searchState === true && (!peopleData || peopleData.length === 0)) {
      dispatch(setLoadingState("noResult"));
    } else {
      dispatch(setPageState(DEFAULT_PAGE_STATE));
    }
  }, [searchState, peopleData, dispatch]);

  const debouncedQuery = useDebounce(myQuery, DEFAULT_DEBOUNCE_TIME);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const responsePeople = await fetch(
          searchState && debouncedQuery !== null
            ? `https://api.themoviedb.org/3/search/person?query=${myQuery}&include_adult=false&language=en-US&page=${searchPageNr}`
            : `${API_PEOPLE_POPULAR_URL}${peoplePageNr}`,
          {
            headers: {
              Authorization: API_AUTHORIZATION,
              accept: "application/json",
            },
          }
        );

        if (!responsePeople.ok) {
          throw new Error(responsePeople.statusText());
        }

        const { results, total_pages, total_results } =
          await responsePeople.json();

        setPeopleData(results);
        setTotalResults(total_results);
        dispatch(setSearchMaxPageNr(total_pages));
        dispatch(setLoadingState("success"));
      } catch (error) {
        dispatch(setLoadingState("error"));
        console.error("Error fetching People", error);
      }
    };
    fetchPeople();
  }, [peoplePageNr, searchPageNr, debouncedQuery]);

  if (loadingState === "error") {
    return <ErrorPage />;
  }

  return loadingState === "loading" ? (
    searchState ? (
      <ContentWrapper> {SearchPage(myQuery)}</ContentWrapper>
    ) : (
      <LoadingSpinner />
    )
  ) : (
    (pageState === DEFAULT_PAGE_STATE || searchState === true) &&
      (searchState === true && (!peopleData || peopleData.length === 0) ? (
        NoResultPage(debouncedQuery)
      ) : (
        <ContentWrapper>
          <ContentHeader>
            {!searchState || myQuery === null
              ? POPULAR_MOVIES_TITLE
              : `${SEARCH_RESULTS_TITLE} "${myQuery}" (${totalResults})`}
          </ContentHeader>
          <TilesWrapper>
            {peopleData &&
              peopleData.map((person) => {
                return (
                  <NavLink
                    key={person.id}
                    to={toProfile({ id: person.id })}
                    style={{ textDecoration: "none" }}
                  >
                    <PersonTile
                      key={person.id}
                      imageSrc={
                        person.profile_path
                          ? `https://image.tmdb.org/t/p/w400${person.profile_path}`
                          : null
                      }
                      name={person.name}
                    />
                  </NavLink>
                );
              })}
          </TilesWrapper>
        </ContentWrapper>
      ))
  );
};

export default PersonList;
