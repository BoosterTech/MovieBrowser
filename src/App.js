import {
  HashRouter,
  Route,
  Redirect,
  Switch,
  useParams,
} from "react-router-dom";
import { toMovieDetails, toMovieListPage, toPeople, toProfile, toSearch } from "./routes";
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
import SearchPage from "./common/SearchPage";
import NoResultPage from "./common/noResult";
import ErrorPage from "./common/Error";

const App = () => {
  return (
    <HashRouter basename="/MovieBrowser">
      <Navigation />
      <Switch>
        <Route exact path="people/:id">
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
        <Route exact path="/">
          <Redirect to={toMovieListPage()} />
          <Pagination />
        </Route>
        <Route exact path={toMovieDetails()}>
          <MovieDetails />
        </Route>
      </Switch>
    </HashRouter>
  );
  p;
};

export default App;
