import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSettingLoadingValue, setLoadingState } from "../../Redux_store/settingSlice";
import { NavLink } from "react-router-dom";
import { toProfile } from "../../routes";
import { APIAuthorization } from "../../common/API_URL";
import { LoadingSpinner } from "../../common/Loader";

import { CastCrewWrapper, Header } from "../personDetails/styled";
import { TilesContainer } from "../movieList/styled";
import { MovieDetailsWrapper, TopTileContainer } from "./styled"; // chwilowo
import { PersonTile } from "../personList/components/PersonTile";


const MovieDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const loadingState = useSelector(selectSettingLoadingValue)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingState("loading"));
  }, [dispatch]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const responseMovie = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US`,
          {
            method: "GET",
            headers: {
              Authorization: APIAuthorization,
              Accept: "application/json",
            },
          }
        );

        if (!responseMovie.ok) {
          throw new Error(responseMovie.statusText);
        }

        const result = await responseMovie.json();
        dispatch(setLoadingState("success"));
        setMovieData(result);
      } catch (error) {
        dispatch(setLoadingState("error"));
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovie();
  }, [dispatch, id]);

  return loadingState === "loading" ? (
    <LoadingSpinner />
  ) : (
    movieData && (
      <>
        <TopTileContainer
          imageSrc={
            movieData.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`
              : null
          }
          title={movieData.original_title}
          rate={movieData.vote_average}
          vote={movieData.vote_count}
        />
        <MovieDetailsWrapper
          imageSrc={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
              : null
          }
          title={movieData.original_title}
          yearShort={movieData.release_date.substring(0, 4)}
          production={movieData.production_countries.name}
          yearFull={movieData.release_date}
          category={movieData.genres.name}
          rate={movieData.vote_average}
          vote={movieData.vote_count}
          description={movieData.overview}
        />
        <CastCrewWrapper>
          <Header>Cast</Header>
          <TilesContainer persontile="true">
            {movieData.credits.cast &&
              movieData.credits.cast.map((castMember) => {
                return (
                  <PersonTile
                    imageSrc={
                      castMember.profile_path
                        ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}`
                        : null
                    }
                    key={`${castMember.name}`}
                    title={castMember.original_title}
                  />
                );
              })}
            <NavLink to={toProfile()} style={{ textDecoration: "none" }}>
              <PersonTile />
            </NavLink>
          </TilesContainer>
        </CastCrewWrapper>
        <CastCrewWrapper second={`${true}`}>
          <Header>Crew</Header>
          <TilesContainer persontile="true">
          {movieData.credits.crew &&
              movieData.credits.crew.map((crewMember) => {
                return (
                  <PersonTile
                    imageSrc={
                      crewMember.profile_path
                        ? `https://image.tmdb.org/t/p/w500${crewMember.profile_path}`
                        : null
                    }
                    key={`${crewMember.name}`}
                    title={crewMember.original_title}
                  />
                );
              })}
            <NavLink to={toProfile()} style={{ textDecoration: "none" }}>
              <PersonTile />
            </NavLink>
          </TilesContainer>
        </CastCrewWrapper>
      </>
    )
  );
};

export default MovieDetails;
