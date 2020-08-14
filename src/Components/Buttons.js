import React from 'react';
import { Button, Typography } from '@material-ui/core';
import '../Styles/buttons.css'

const Buttons = ({content, idName}) => {
  return (
    <Button id={idName}>
      <Typography variant="button" display="block" gutterBottom>
        {content}
      </Typography>
    </Button>
  );
};

export default Buttons;