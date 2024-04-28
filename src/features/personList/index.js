import { useEffect, useState } from "react";
import { PersonTile } from "./components/PersonTile";
import { ContentWrapper, ContentHeader, TilesWrapper } from "./styled";
import { APIAuthorization, apiPeoplePopularURL } from "../../common/API_URL";
import { useDispatch, useSelector } from "react-redux";
import { LoadingSpinner } from "../../common/Loader";
import {
  selectSettingLoadingValue,
  selectSettingPageStateValue,
  selectSettingPeoplepeoplePageNrValue,
  setLoadingState,
  setpeoplePageNr,
  setPageState,
} from "../../Redux_store/settingSlice";
import { toProfile } from "../../routes";
import { NavLink, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingState("loading"));
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};


const PersonList = () => {
  const [peopleData, setPeopleData] = useState(null);
  const [isFirstEffect, setIsFirstEffect] = useState(true);
  const peoplePageNr = useSelector(selectSettingPeoplepeoplePageNrValue);
  const loadingState = useSelector(selectSettingLoadingValue);
  const pageState = useSelector(selectSettingPageStateValue);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("page");
    const path = location.pathname;

    dispatch(setLoadingState("loading"));
    dispatch(setPageState("people"));

    if (page && path.includes("/people")) dispatch(setpeoplePageNr(Number(page)));

    sessionStorage.setItem("pageState", "people");
    sessionStorage.setItem("peoplePageNr", peoplePageNr);

    setIsFirstEffect(false);
  }, [peoplePageNr, dispatch]);

  useEffect(() => {
    const newPath = `?page=${peoplePageNr}`;

    if (location.search !== newPath && !isFirstEffect) history.push(newPath);
  }, [peoplePageNr, location.search, isFirstEffect]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const responsePeople = await fetch(`${apiPeoplePopularURL}${peoplePageNr}`, {
          headers: {
            Authorization: APIAuthorization,
            accept: "application/json",
          },
        });

        if (!responsePeople.ok) {
          throw new Error(responsePeople.statusText());
        }

        const { results } = await responsePeople.json();
        setPeopleData(results);
        dispatch(setLoadingState("success"));
      } catch (error) {
        dispatch(setLoadingState("error"));
        console.error("Error fetching People", error);
      }
    };
    fetchPeople();
  }, [peoplePageNr]);

  return loadingState === "loading" ? (
    <LoadingSpinner />
  ) : (
    pageState === "people" && (
      <ContentWrapper>
        <ContentHeader>Popular People</ContentHeader>
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
    )
  );
};

export default PersonList;
