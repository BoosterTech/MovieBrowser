import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import {
  selectSettingLoadingValue,
  selectSettingMoviePageNrValue,
  selectSettingSearchValue,
  setLoadingState,
} from "../../Redux_store/settingSlice";
import { NavLink } from "react-router-dom";
import { toProfile } from "../../routes";
import { LoadingSpinner } from "../../common/Loader";
import { CastCrewWrapper, Header } from "../personDetails/styled";
import { TilesContainer } from "./styled";
import { PersonTile } from "./components/PersonTile";
import { TopTileBox } from "./components/TopTileBox";
import { MovieDetailsWrapper } from "./components/MovieDetailsWrapper";
import { IMAGE_BASE_URL, backdropURL } from "../../common/globalVariables";

import searchQueryParamName from "../../common/Navigation/components/Search/searchQueryParamName";
import ErrorPage from "../../common/Error";

const searchTrailer = (data) => {
  const trailerKeys = data
    .filter((video) => video.type === "Trailer")
    .map((video) => video.key);

  return trailerKeys;
};

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  const loadingState = useSelector(selectSettingLoadingValue);
  const searchState = useSelector(selectSettingSearchValue);
  const moviePageNr = useSelector(selectSettingMoviePageNrValue);
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const myQuery = new URLSearchParams(location.search).get(
    searchQueryParamName
  );

  useEffect(() => {
    if (searchState && myQuery !== null) {
      history.push(`/movies?page=${moviePageNr}&search=${myQuery}`);
    }
  }, [searchState, myQuery]);

  useEffect(() => {
    dispatch(setLoadingState("loading"));
  }, [dispatch]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const responseMovie = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits%2Cvideos&language=en-US`,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTViNWY3ODkzMWIxY2M0YTE5MmRiMDg0NmM5MzI5NyIsInN1YiI6IjY2MTQ2NjU3OWJjZDBmMDE3ZDJiNjI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d-RS_0g3CctB9MmDIx_LxUs3tx-cVs-PqpxeTbxyYGs",
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
        setTrailerKey(searchTrailer(result.videos.results));
      } catch (error) {
        dispatch(setLoadingState("error"));
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovie();
  }, [id, dispatch]);

  if (loadingState === "error") {
    return <ErrorPage />;
  }

  return loadingState === "loading" ? (
    <LoadingSpinner />
  ) : (
    movieData && (
      <>
        {movieData.backdrop_path ? (
          <TopTileBox
            title={movieData.original_title}
            rate={movieData.vote_average || 0}
            vote={movieData.vote_count || 0}
            imageSrc={`${backdropURL}${movieData.backdrop_path}`}
            trailerKey={trailerKey}
          />
        ) : null}
        <MovieDetailsWrapper
          imageSrc={
            movieData.poster_path
              ? `${IMAGE_BASE_URL}${movieData.poster_path}`
              : null
          }
          title={movieData.original_title}
          yearShort={movieData.release_date.substring(0, 4)}
          production={movieData.production_countries
            .map((country) => country.name)
            .join(", ")}
          shortProduction={movieData.production_countries
            .map((country) => country.iso_3166_1)
            .join(" ")}
          yearFull={
            movieData.release_date
              ? `${movieData.release_date.split("-")[2]}.${
                  movieData.release_date.split("-")[1]
                }.${movieData.release_date.split("-")[0]}`
              : ""
          }
          categories={movieData.genres.map((genre) => genre.name)}
          rate={movieData.vote_average || 0}
          vote={movieData.vote_count || 0}
          description={movieData.overview}
        />
        {movieData.credits.cast.length > 0 && (
          <CastCrewWrapper>
            <Header>Cast ({movieData.credits.cast.length})</Header>
            <TilesContainer $persontile="true">
              {movieData.credits.cast &&
                movieData.credits.cast.map((castMember, index) => {
                  return (
                    <NavLink
                      key={`${castMember.id}-${index}`}
                      to={toProfile({ id: castMember.id })}
                      style={{ textDecoration: "none" }}
                    >
                      <PersonTile
                        imageSrc={
                          castMember.profile_path
                            ? `${IMAGE_BASE_URL}${castMember.profile_path}`
                            : null
                        }
                        character={castMember.character}
                        name={castMember.name}
                      />
                    </NavLink>
                  );
                })}
            </TilesContainer>
          </CastCrewWrapper>
        )}
        {movieData.credits.crew.length > 0 && (
          <CastCrewWrapper $second={`${true}`}>
            <Header>Crew ({movieData.credits.crew.length})</Header>
            <TilesContainer $persontile="true">
              {movieData.credits.crew &&
                movieData.credits.crew.map((crewMember, index) => {
                  return (
                    <NavLink
                      key={`${crewMember.id}-${index}`}
                      to={toProfile({ id: crewMember.id })}
                      style={{ textDecoration: "none" }}
                    >
                      <PersonTile
                        imageSrc={
                          crewMember.profile_path
                            ? `https://image.tmdb.org/t/p/w500${crewMember.profile_path}`
                            : null
                        }
                        character={crewMember.job}
                        name={crewMember.name}
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

export default MovieDetails;
