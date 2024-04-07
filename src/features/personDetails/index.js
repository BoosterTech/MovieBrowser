import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSettingLoadingValue,
  setLoadingState,
} from "../../Redux_store/settingSlice";
import {
  BirthInfo,
  BirthInfoContainer,
  CastCrewWrapper,
  DescriptionWrapper,
  Header,
  Image,
  Paragraph,
  TopTileWrapper,
} from "./styled";
import { MovieTile } from "../movieList/components/MovieTile";
// import profileDefaultImage from "./profileDefaultImage.png";
import { TilesContainer } from "../movieList/styled";

import { APIAuthorization, apiProfileDetails } from "../../common/API_URL";
import { LoadingSpinner } from "../../common/Loader";
import { moviesGenres_ids } from "../../common/moviesGenre_ids";
import { useParams } from "react-router";

const ProfileDetails = () => {
  const {id} = useParams();

  const [profileData, setProfileData] = useState(null);
  const loadingState = useSelector(selectSettingLoadingValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingState("loading"));
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const responseProfile = await fetch(
          `https://api.themoviedb.org/3/person/2414436?append_to_response=movie_credits&language=en-US`,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjg1YTcwYTM1M2YxNGUwMjY1YThmMGE1NmY3YjJkNCIsInN1YiI6IjY2MDI5ZjIxYjg0Y2RkMDE2NGY2MDQ3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vM8wmLoyv136156nOKa-7DpXsQ1qy67HjrvEvoByGdA",
              Accept: "application/json",
            },
          }
        );

        if (!responseProfile.ok) {
          throw new Error(responseProfile.statusText());
        }
        const { result } = await responseProfile.json();
        setProfileData(result);
        dispatch(setLoadingState("success"));
      } catch (error) {
        dispatch(setLoadingState("error"));
        console.error("Error fetching profile details:", error);
      }
    };
    fetchProfile();
  }, [dispatch,id]);

  return loadingState === "loading" ? (
    <LoadingSpinner />
  ) : (
    profileData && (
      <>
        <TopTileWrapper>
          <Image
            src={
              profileData.profile_path
                ? `https://image.tmdb.org/t/p/w500${profileData.profile_path}`
                : null
            }
            alt="ProfileImage"
          />
          <DescriptionWrapper>
            <Header>{profileData.name}</Header>
            <BirthInfoContainer>
              <BirthInfo>
                <Paragraph grey={true.toString()}>Date of birth</Paragraph>
                <Paragraph> {profileData.birthday}</Paragraph>
              </BirthInfo>
              <BirthInfo>
                <Paragraph grey={true.toString()}>Place of birth:</Paragraph>
                <Paragraph>{profileData.place_of_birth}</Paragraph>
              </BirthInfo>
            </BirthInfoContainer>
            <Paragraph biography={`${true}`}>{profileData.biography}</Paragraph>
          </DescriptionWrapper>
        </TopTileWrapper>

        {profileData.movie_credits.cast.length && (
          <CastCrewWrapper>
            <Header>
              Movies - cast ({profileData.movie_credits.cast.length})
            </Header>
            <TilesContainer>
              {profileData.movie_credits.cast &&
                profileData.movie_credits.cast.map((castMember) => {
                  const movieGenres = castMember.genre_ids
                    ? castMember.genre_ids.map((id) => moviesGenres_ids[id])
                    : [];
                  return (
                    <MovieTile
                      key={castMember.id}
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
                  );
                })}
            </TilesContainer>
          </CastCrewWrapper>
        )}

        {profileData.movie_credits.crew.length && (
          <CastCrewWrapper second={`${true}`}>
            <Header>
              Movies - crew ({profileData.movie_credits.crew.length})
            </Header>
            <TilesContainer>
              {profileData.movie_credits.crew &&
                profileData.movie_credits.crew.map((castMember) => {
                  const movieGenres = castMember.genre_ids
                    ? castMember.genre_ids.map((id) => moviesGenres_ids[id])
                    : [];
                  return (
                    <MovieTile
                      key={castMember.id}
                      imageSrc={
                        castMember.poster_path
                          ? `https://image.tmdb.org/t/p/w500${castMember.poster_path}`
                          : null
                      }
                      title={
                        castMember.original_title
                          ? castMember.original_title
                          : castMember.original_name
                      }
                      year={
                        castMember.release_date
                          ? `${
                              castMember.job
                            } (${castMember.release_date.substring(0, 4)})`
                          : castMember.job
                      }
                      category={movieGenres}
                      rate={castMember.vote_average}
                      vote={castMember.vote_count}
                    />
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
