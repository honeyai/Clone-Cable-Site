import React from 'react';
import {Typography} from '@material-ui/core';
import '../Styles/home.css';
import Buttons from "./Buttons";

const Home = () => {
  return (
    <div className="home__Container">
      <div className="home__Text">
        <Typography variant="h3" className="home__Tagline">Connect with Cable</Typography>
        <Typography variant="h6" className="home__Tagline home__Tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
      </div>
      <div className="home__Buttons">
        <Buttons 
          idName="home__AddtoServer"
          content="Add to your server"
        />
      </div>
    </div>
  );
};

export default Home;