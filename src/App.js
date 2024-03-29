import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import MovieList from "./core/MovieList";
import People from "./features/personList";
import { toMovieListPage, toPeople } from "./routes";
import { Header } from "./common/Header";

export default () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route path={toPeople()}>
        <People />
      </Route>
      <Route path={toMovieListPage()}>
        <MovieList />
      </Route>
      <Route path="/">
        <Redirect to={toMovieListPage()} />
      </Route>
    </Switch>
  </HashRouter>
);
