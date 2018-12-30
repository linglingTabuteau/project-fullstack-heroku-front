import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import CarouselPhoto from './components/CarouselPhoto';
import CardFilm from './components/CardFilm';
import Video1 from './components/Video1';
import Video2 from './components/Video2';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CarouselPhoto />
        <CardFilm />
        <Video1 />
        <Video2 />
        <Footer />
      </div>
    );
  }
}

export default App;
