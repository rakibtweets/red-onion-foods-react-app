import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuVar from '../../MenuVar/MenuVar';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

import './Main.css';

const Main = () => {
  return (
    <div className="main-container container mt-5">
      <Router>
        <MenuVar />
        <Switch>
          <Route path="/home/breakfast">
            <Breakfast />
          </Route>
          <Route path="/home/lunch">
            <Lunch />
          </Route>
          <Route path="/home/dinner">
            <Dinner />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
