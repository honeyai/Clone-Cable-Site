import React from 'react';
import { Button, Typography } from '@material-ui/core';
import '../Styles/buttons.css'


const Buttons = ({content, idName, textId, icon, link}) => {
  return (
    <a href={link}>
      <Button id={idName} >
        <Typography id={textId}variant="button" display="block" gutterBottom>
          {content}{icon}
        </Typography>
      </Button>
    </a>
  );
};

export default Buttons;