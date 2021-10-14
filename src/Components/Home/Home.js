import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
  return (
    <div lassName="home-container">
      <Header />
      <Banner />
    </div>
  );
};

export default Home;
