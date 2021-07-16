import React from 'react';
import NavigationBar from "./components/NavigationBar";
import Movies from "./components/Movies";
import MovieOverview from "./components/MovieOverview";
import  {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <NavigationBar/>
        <Route exact path='/'>
          <Movies/>
        </Route>
        <Route path='/detail/:id'>
          <MovieOverview/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
