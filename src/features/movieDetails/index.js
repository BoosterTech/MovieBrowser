import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoadingState } from "../../Redux_store/settingSlice";
import { CastCrewWrapper, Header } from "../personDetails/styled";
import { TilesContainer } from "../movieList/styled";
import { MovieDetailsWrapper, TopTileContainer } from "./styled";
import { PersonTile } from "../personList/components/PersonTile";
import { NavLink } from "react-router-dom";
import { toProfile } from "../../routes";

const MovieDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingState("loading"));
  }, []);

  return (
    <>
      <TopTileContainer />
      <MovieDetailsWrapper />

      <CastCrewWrapper>
        <Header>Cast</Header>
        <TilesContainer persontile>
          <NavLink to={toProfile()} style={{ textDecoration: "none" }}>
            <PersonTile />
          </NavLink>
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
        </TilesContainer>
      </CastCrewWrapper>
      <CastCrewWrapper second={`${true}`}>
        <Header>Crew</Header>
        <TilesContainer persontile={`${true}`}>
          <NavLink to={toProfile()} style={{ textDecoration: "none" }}>
            <PersonTile />
          </NavLink>
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
        </TilesContainer>
      </CastCrewWrapper>
    </>
  );
};

export default MovieDetails;
