import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import People from "./features/personList";
import { toMovieListPage, toPeople } from "./routes";
import { Navigation } from "./common/Navigation";
import { MovieListPage } from "./features/movieList";

export default () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toPeople()}>
        <People />
      </Route>
      <Route path={toMovieListPage()}>
        <MovieListPage />
      </Route>
      <Route path="/">
        <Redirect to={toMovieListPage()} />
      </Route>
    </Switch>
  </HashRouter>
);
