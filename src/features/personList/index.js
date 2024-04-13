import { useEffect, useState } from "react";
import { PersonTile } from "./components/PersonTile";
import { ContentWrapper, ContentHeader, TilesWrapper } from "./styled";
import { APIAuthorization, apiPeoplePopularURL } from "../../common/API_URL";
import { useDispatch, useSelector } from "react-redux";
import { LoadingSpinner } from "../../common/Loader";
import {
  selectSettingLoadingValue,
  selectSettingPageStateValue,
  selectSettingPeoplePageNrValue,
  setLoadingState,
  setPageNr,
  setPageState,
} from "../../Redux_store/settingSlice";
import { toProfile } from "../../routes";
import { NavLink, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PersonList = () => {
  const [peopleData, setPeopleData] = useState(null);
  const pageNr = useSelector(selectSettingPeoplePageNrValue);
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

    if (page && path === "/people") {
      dispatch(setPageNr(Number(page)));
    } else if (path === "/people") {
      dispatch(setPageNr(1));
    }
  }, [pageNr, dispatch]);

  useEffect(() => {
    const newPath = `?page=${pageNr}`;
    if (location.search !== newPath) history.push(newPath);
  }, [location, history, pageNr]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("page");
    const path = location.pathname;

    dispatch(setLoadingState("loading"));
    dispatch(setPageState("people"));

    if (page && path === "/people") {
      dispatch(setPageNr(Number(page)));
    } else if (path === "/people") {
      dispatch(setPageNr(1));
    }


    const fetchPeople = async () => {
      try {
        const responsePeople = await fetch(`${apiPeoplePopularURL}${pageNr}`, {
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
  }, [pageNr]);

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
