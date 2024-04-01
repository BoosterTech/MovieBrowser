import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { toMovieListPage, toPeople, toProfile } from "./routes";
import { Navigation } from "./common/Navigation";
import { MovieListPage } from "./features/movieList";
import PersonList from "./features/personList";

import {
  selectSettingLoadingValue,
  selectSettingPageStateValue,
} from "./Redux_store/settingSlice";
import { useSelector } from "react-redux";
import Pagination from "./common/Pagination";
import PersonDetails from "./features/personDetails";

const App = () => {
  const pageState = useSelector(selectSettingPageStateValue);
  const loadingState = useSelector(selectSettingLoadingValue);

  return (
    <HashRouter exact basename="/MovieBrowser">
      <Navigation />
      <Switch>
        <Route exact path={toMovieListPage()}>
          <MovieListPage />
        </Route>
        <Route exact path={toProfile()}>
          <PersonDetails />
        </Route>
        <Route exact path={toPeople()}>
          <PersonList />
        </Route>
        <Route exact path="/">
          <Redirect to={toMovieListPage()} />
        </Route>
      </Switch>
      {(pageState === "movies" || pageState === "people") &&
        loadingState === "success" && <Pagination />}
    </HashRouter>
  );
  p;
};

export default App;
