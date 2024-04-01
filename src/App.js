import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { toMovieListPage, toPeople } from "./routes";
import { Navigation } from "./common/Navigation";
import { MovieListPage } from "./features/movieList";
import PersonList from "./features/personList";

import {
  selectSettingLoadingValue,
  selectSettingPageStateValue,
} from "./Redux_store/settingSlice";
import { useSelector } from "react-redux";
import Pagination from "./common/Pagination";

const App = () => {
  const pageState = useSelector(selectSettingPageStateValue);
  const loadingState = useSelector(selectSettingLoadingValue);

  return (
    <HashRouter basename="/MovieBrowser">
      <Navigation />
      <Switch>
        <Route path={toPeople()}>
          <PersonList />
        </Route>
        <Route path={toMovieListPage()}>
          <MovieListPage />
        </Route>
        <Route path="/">
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
