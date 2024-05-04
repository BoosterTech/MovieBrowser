import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import {
  toError,
  toMovieDetails,
  toMovieListPage,
  toNoResult,
  toPeople,
  toProfile,
  toSearch,
} from "./routes";
import { Navigation } from "./common/Navigation";
import MovieListPage from "./features/movieList";
import PersonList from "./features/personList";
import Pagination from "./common/Pagination";
import ProfileDetails from "./features/personDetails";
import MovieDetails from "./features/movieDetails";
import SearchPage from "./common/SearchPage";
import NoResultPage from "./common/noResult";
import ErrorPage from "./common/Error";
import RefreshOnConnectionRestore from "./common/RefreshOnConnectionRestore";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route exact path={toProfile()}>
          <ProfileDetails />
        </Route>
        <Route exact path={toMovieListPage()}>
          <MovieListPage />
          <Pagination />
        </Route>
        <Route exact path={toPeople()}>
          <PersonList />
          <Pagination />
        </Route>
        <Route exact path={toMovieDetails()}>
          <MovieDetails />
        </Route>
        <Route exact path={toSearch()}>
          <SearchPage />
          <Pagination />
        </Route>
        <Route exact path={toNoResult()}>
          <NoResultPage />
        </Route>
        <Route exact path={toError()}>
          <ErrorPage />
        </Route>
        <Route exact path="/">
          <Redirect to={toMovieListPage()} />
          <Pagination />
        </Route>
      </Switch>
      <RefreshOnConnectionRestore />
    </HashRouter>
  );
};

export default App;
