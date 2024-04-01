import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { toMovieListPage, toPeople } from "./routes";
import { Navigation } from "./common/Navigation";
import { MovieListPage } from "./features/movieList";
import PersonList from "./features/personList";
import Footer from "./common/Footer";
import {
  selectSettingLoadingValue,
  selectSettingPageStateValue,
} from "./Redux_store/settingSlice";
import { useSelector } from "react-redux";

const App = () => {
  const pageState = useSelector(selectSettingPageStateValue);
  const loadingState = useSelector(selectSettingLoadingValue);

  return (
    <HashRouter>
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
        loadingState !== "loading" && <Footer />}
    </HashRouter>
  );
  p;
};

export default App;
