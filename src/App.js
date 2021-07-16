import React from 'react';
import NavigationBar from "./components/NavigationBar";
import Movies from "./components/Movies";
import MovieOverview from "./components/MovieOverview";
import  {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const movies = useSelector( state => (state.movies.movies));
  return (
    <div>
      <Router>
        <NavigationBar/>
        <Route exact path='/the_popular_movie_review/'>
          <Movies/>
        </Route>
        <Route path='/the_popular_movie_review/detail/:id'>
          { (movies === null ? <Redirect to="/the_popular_movie_review/" /> : <MovieOverview/>) }
        </Route>
      </Router>
    </div>
  );
}

export default App;
