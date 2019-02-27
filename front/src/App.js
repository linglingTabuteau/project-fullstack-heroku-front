import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';
import Footer from './Footer';
import SearchBar from './containers/SearchBar';
import AddFilm from './components/AddFilm';
import SearchResults from './components/SearchResults';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';

const App = () => (
  <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/searchbar" component={SearchBar} />
      <Route path="/addfilm" component={AddFilm} />
      <Route path="/result" component={SearchResults} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
    <Footer />
  </div>
);

export default App;
