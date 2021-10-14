import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './Home.css';

const Home = () => {
  return (
    <div lassName="home-container">
      <Header />
      <Banner />
      <Main />
    </div>
  );
};

export default Home;
