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
  setPageState,
} from "../../Redux_store/settingSlice";
import { toProfile } from "../../routes";
import { NavLink } from "react-router-dom";

const PersonList = () => {
  const [peopleData, setPeopleData] = useState(null);
  const pageNr = useSelector(selectSettingPeoplePageNrValue);
  const loadingState = useSelector(selectSettingLoadingValue);
  const pageState = useSelector(selectSettingPageStateValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingState("loading"));
    dispatch(setPageState("people"));
  }, [dispatch]);

  useEffect(() => {
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
  }, [dispatch, pageNr]);

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
