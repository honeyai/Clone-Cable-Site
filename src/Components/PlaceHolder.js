import React from 'react';
import { Card } from '@material-ui/core';
import Header from './Header';

const PlaceHolder = () => {
  return (
    <div className="placeHolder__wrapper">
      <Card className="placeHolder__Card">
        <Header
          title="I AM A PLACE HOLDER"
          subheader="don't mind me"
        />
      </Card>      
    </div>
  );
};

export default PlaceHolder;