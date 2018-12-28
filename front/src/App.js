import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import CarouselPhoto from './components/CarouselPhoto';
import CardFilm from './components/CardFilm';
import Video from './components/Video';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CarouselPhoto />
        <CardFilm />
        <Video />
      </div>
    );
  }
}

export default App;
