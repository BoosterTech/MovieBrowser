import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import {
  toError,
  toMovieDetails,
  toMovieListPage,
  toNoResult,
  toPeople,
  toProfile,
} from "./routes";
import { Navigation } from "./common/Navigation";
import { MovieListPage } from "./features/movieList";
import PersonList from "./features/personList";
import Pagination from "./common/Pagination";
import ProfileDetails from "./features/personDetails";
import MovieDetails from "./features/movieDetails";
import NoResultPage from "./common/noResult";

const App = () => {
  return (
    <HashRouter exact basename="/MovieBrowser">
      <Navigation />
      <Switch>
        <Route exact path={toMovieListPage()}>
          <MovieListPage />
          <Pagination />
        </Route>
        <Route exact path={toPeople()}>
          <PersonList />
          <Pagination />
        </Route>
        <Route exact path={toProfile()}>
          <ProfileDetails />
        </Route>
        <Route exact path={toMovieDetails()}>
          <MovieDetails />
        </Route>
        <Route exact path={toNoResult()}>
          <NoResultPage />
        </Route>
        <Route exact path={toError()}></Route>
        <Route path="/">
          <Redirect to={toMovieListPage()} />
          <Pagination />
        </Route>
      </Switch>
    </HashRouter>
  );
  p;
};

export default App;
