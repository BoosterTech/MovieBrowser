import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { toMovieListPage, toPeople, toProfile } from "./routes";
import { Navigation } from "./common/Navigation";
import { MovieListPage } from "./features/movieList";
import PersonList from "./features/personList";

import Pagination from "./common/Pagination";
import PersonDetails from "./features/personDetails";

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
          <PersonDetails />
        </Route>
        <Route exact path="/">
          <Redirect to={toMovieListPage()} />
          <Pagination />
        </Route>
      </Switch>
    </HashRouter>
  );
  p;
};

export default App;
