import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { toMovieListPage, toPeople } from "./routes";
import { Navigation } from "./common/Navigation";
import { MovieListPage } from "./features/movieList";
import PersonList from "./features/personList";
import Footer from "./common/Footer";

const App = () => (
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
    <Footer />
  </HashRouter>
);

export default App;
