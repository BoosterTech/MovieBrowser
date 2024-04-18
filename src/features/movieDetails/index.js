import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSettingLoadingValue, setLoadingState } from "../../Redux_store/settingSlice";
import { NavLink } from "react-router-dom";
import { toProfile } from "../../routes";
import { LoadingSpinner } from "../../common/Loader";
import { CastCrewWrapper, Header } from "../personDetails/styled";
import { TilesContainer } from "../movieList/styled";
import { PersonTile } from "./components/PersonTile";
import { TopTileBox } from "./components/TopTileBox";
import { MovieDetailsWrapper } from "./components/MovieDetailsWrapper";
import { TopTileContainer, Content } from "./styled";


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
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTViNWY3ODkzMWIxY2M0YTE5MmRiMDg0NmM5MzI5NyIsInN1YiI6IjY2MTQ2NjU3OWJjZDBmMDE3ZDJiNjI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d-RS_0g3CctB9MmDIx_LxUs3tx-cVs-PqpxeTbxyYGs",
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
  }, [id, dispatch]);

  return loadingState === "loading" ? (
    <LoadingSpinner />
  ) : (
    movieData && (
      <>
        <TopTileContainer>
          {movieData.backdrop_path ?
            <TopTileBox
              title={movieData.original_title}
              rate={movieData.vote_average || 0}
              vote={movieData.vote_count || 0}
              imageSrc={"https://image.tmdb.org/t/p/original" + movieData.backdrop_path}
            />
            : null}
        </TopTileContainer>
        <MovieDetailsWrapper
          imageSrc={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
              : null
          }
          title={movieData.original_title}
          yearShort={movieData.release_date.substring(0, 4)}
          production={movieData.production_countries.map(country => country.name).join(', ')}
          yearFull={movieData.release_date}
          categories={movieData.genres.map(genre => genre.name)}
          rate={movieData.vote_average || 0}
          vote={movieData.vote_count || 0}
          description={movieData.overview}
        />
        <Content>
          <CastCrewWrapper>
            <Header>Cast</Header>
            <TilesContainer persontile="true">
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
                            ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}`
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
          <CastCrewWrapper second={`${true}`}>
            <Header>Crew</Header>
            <TilesContainer persontile="true">
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
        </Content>
      </>
    )
  );
};

export default MovieDetails;
