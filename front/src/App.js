import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';
import Footer from './Footer';
import SearchBar from './containers/SearchBar';
import AddFilm from './components/AddFilm';
import SearchResults from './components/SearchResults';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import MyProfile from './containers/MyProfile';
import requireAuth from './hoc/requireAuth';
import requireNotAuth from './hoc/requireNotAuth';

const App = () => (
  <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/searchbar" component={SearchBar} />
      <Route path="/addfilm" component={AddFilm} />
      <Route path="/result" component={SearchResults} />
      <Route exact path="/myprofile" component={requireAuth(MyProfile)} />
      {/* <Redirect exact from="/profile" to="/myprofile" /> */}
      <Route exact path="/signin" component={requireNotAuth(SignIn)} />
      <Route exact path="/signup" component={requireNotAuth(SignUp)} />
    </Switch>
    <Footer />
  </div>
);

export default App;
