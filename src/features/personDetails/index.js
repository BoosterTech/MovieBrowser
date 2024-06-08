import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSettingLoadingValue,
  selectSettingPeoplePageNrValue,
  selectSettingSearchValue,
  setLoadingState,
} from "../../Redux_store/settingSlice";
import {
  BirthInfo,
  BirthInfoContainer,
  CastCrewWrapper,
  DescriptionWrapper,
  Header,
  Paragraph,
  TopTileWrapper,
  ForDesktop,
} from "./styled";
import {
  ForMobile,
  TopTileWrapperMedia,
  PersonImageDataContainer,
  HeaderMobile,
  DataContainer,
  BirthInfoMobile,
  ParagraphMobile,
  ParagraphContainer,
} from "./styledMobile";
import MovieTile from "../movieList/components/MovieTile";
import { TilesContainer } from "../movieList/styled";
import { LoadingSpinner } from "../../common/Loader";
import { movieGenres_ids } from "../../common/fetchMoviesGenres";
import { NavLink, useHistory, useLocation, useParams } from "react-router-dom";
import ImageProfile from "./DefaultImage";
import { toMovieDetails } from "../../routes";
import searchQueryParamName from "../../common/Navigation/components/Search/searchQueryParamName";
import ErrorPage from "../../common/Error";
import { API_AUTHORIZATION } from "../../common/Global_Variables";

const ProfileDetails = () => {
  const [profileData, setProfileData] = useState(null);
  const [genres, setGenres] = useState({});

  const loadingState = useSelector(selectSettingLoadingValue);
  const searchState = useSelector(selectSettingSearchValue);
  const personPageNr = useSelector(selectSettingPeoplePageNrValue);
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const myQuery = new URLSearchParams(location.search).get(
    searchQueryParamName
  );

  useEffect(() => {
    movieGenres_ids.then((genres) => setGenres(genres));
  }, []);

  useEffect(() => {
    if (searchState && myQuery !== null) {
      history.push(`/people?page=${personPageNr}&search=${myQuery}`);
    }
  }, [searchState, myQuery]);

  useEffect(() => {
    dispatch(setLoadingState("loading"));
  }, [dispatch]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const responseProfile = await fetch(
          `https://api.themoviedb.org/3/person/${id}?append_to_response=movie_credits&language=en-US`,
          {
            method: "GET",
            headers: {
              Authorization: API_AUTHORIZATION,
              Accept: "application/json",
            },
          }
        );

        if (!responseProfile.ok) {
          throw new Error(responseProfile.statusText);
        }

        const result = await responseProfile.json();
        dispatch(setLoadingState("success"));
        setProfileData(result);
      } catch (error) {
        dispatch(setLoadingState("error"));
        console.error("Error fetching profile details:", error);
      }
    };
    fetchProfile();
  }, [dispatch, id]);

  if (loadingState === "error") {
    return <ErrorPage />;
  }

  return loadingState === "loading" ? (
    <LoadingSpinner />
  ) : (
    profileData && (
      <>
        <ForMobile>
          <TopTileWrapperMedia>
            <PersonImageDataContainer>
              <ImageProfile
                imageSrc={
                  profileData.profile_path
                    ? `https://image.tmdb.org/t/p/w500${profileData.profile_path}`
                    : null
                }
              />{" "}
              <DataContainer>
                <HeaderMobile>{profileData.name}</HeaderMobile>
                <BirthInfoMobile>
                  {profileData.birthday && (
                    <ParagraphMobile $grey={true.toString()}>
                      Date of birth:
                    </ParagraphMobile>
                  )}
                  <ParagraphMobile> {profileData.birthday}</ParagraphMobile>
                </BirthInfoMobile>
                <BirthInfoMobile>
                  {profileData.place_of_birth && (
                    <ParagraphMobile $grey={true.toString()}>
                      Place of birth:
                    </ParagraphMobile>
                  )}
                  <ParagraphMobile>
                    {profileData.place_of_birth}
                  </ParagraphMobile>
                </BirthInfoMobile>
              </DataContainer>
            </PersonImageDataContainer>
            <ParagraphContainer $biography={`${true}`}>
              {profileData.biography}
            </ParagraphContainer>
          </TopTileWrapperMedia>
        </ForMobile>

        <ForDesktop>
          <TopTileWrapper>
            <ImageProfile
              imageSrc={
                profileData.profile_path
                  ? `https://image.tmdb.org/t/p/w500${profileData.profile_path}`
                  : null
              }
            />{" "}
            <DescriptionWrapper>
              <Header>{profileData.name}</Header>
              <BirthInfoContainer>
                <BirthInfo>
                  {profileData.birthday && (
                    <Paragraph $grey={true.toString()}>
                      Date of birth:
                    </Paragraph>
                  )}
                  <Paragraph> {profileData.birthday}</Paragraph>
                </BirthInfo>
                <BirthInfo>
                  {profileData.place_of_birth && (
                    <Paragraph $grey={true.toString()}>
                      Place of birth:
                    </Paragraph>
                  )}
                  <Paragraph>{profileData.place_of_birth}</Paragraph>
                </BirthInfo>
              </BirthInfoContainer>
              <Paragraph $biography={`${true}`}>
                {profileData.biography}
              </Paragraph>
            </DescriptionWrapper>
          </TopTileWrapper>
        </ForDesktop>

        {profileData.movie_credits.cast.length > 0 && (
          <CastCrewWrapper>
            <Header>
              Movies - cast ({profileData.movie_credits.cast.length})
            </Header>
            <TilesContainer>
              {profileData.movie_credits.cast &&
                profileData.movie_credits.cast.map((castMember) => {
                  const movieGenres = castMember.genre_ids
                    ? castMember.genre_ids.map((id) => genres[id])
                    : [];
                  return (
                    <NavLink
                      to={toMovieDetails({ id: castMember.id })} // Assuming toMovieDetails expects an ID parameter`}
                      key={`${castMember.name}${castMember.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <MovieTile
                        key={`${castMember.name}${castMember.id}`}
                        imageSrc={
                          castMember.poster_path
                            ? `https://image.tmdb.org/t/p/w500${castMember.poster_path}`
                            : null
                        }
                        title={castMember.original_title}
                        character={castMember.character}
                        year={
                          castMember.release_date
                            ? `${
                                castMember.character
                              } (${castMember.release_date.substring(0, 4)})`
                            : castMember.character
                        }
                        category={movieGenres}
                        rate={castMember.vote_average}
                        vote={castMember.vote_count}
                      />
                    </NavLink>
                  );
                })}
            </TilesContainer>
          </CastCrewWrapper>
        )}

        {profileData.movie_credits.crew.length > 0 && (
          <CastCrewWrapper $second={`${true}`}>
            <Header>
              Movies - crew ({profileData.movie_credits.crew.length})
            </Header>
            <TilesContainer>
              {profileData.movie_credits.crew &&
                profileData.movie_credits.crew.map((crewMember) => {
                  const movieGenres = crewMember.genre_ids
                    ? crewMember.genre_ids.map((id) => genres[id])
                    : [];
                  return (
                    <NavLink
                      to={toMovieDetails({ id: crewMember.id })} // Assuming toMovieDetails expects an ID parameter`}
                      key={`${crewMember.name}${crewMember.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <MovieTile
                        noHover={true}
                        key={`${crewMember.id}${crewMember.job}`}
                        imageSrc={
                          crewMember.poster_path
                            ? `https://image.tmdb.org/t/p/w500${crewMember.poster_path}`
                            : null
                        }
                        title={
                          crewMember.original_title
                            ? crewMember.original_title
                            : crewMember.original_name
                        }
                        year={
                          crewMember.release_date
                            ? `${
                                crewMember.job
                              } (${crewMember.release_date.substring(0, 4)})`
                            : crewMember.job
                        }
                        category={movieGenres}
                        rate={crewMember.vote_average}
                        vote={crewMember.vote_count}
                      />
                    </NavLink>
                  );
                })}
            </TilesContainer>
          </CastCrewWrapper>
        )}
      </>
    )
  );
};

export default ProfileDetails;
