import React from 'react';
import CarouselPhoto from './CarouselPhoto';
import Video2 from './Video2';
import SearchBar from '../containers/SearchBar';
import AfficheFilm from '../containers/AfficheFilm';

const Home = () => (
  <div className="Home">
    <CarouselPhoto />
    <SearchBar />
    <AfficheFilm />
    <Video2 />
  </div>
);

export default Home;