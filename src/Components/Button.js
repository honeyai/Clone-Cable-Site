import React from 'react';
import { Button, Typography } from '@material-ui/core';

const Button = ({content}) => {
  return (
    <Button>
      <Typography variant="button" display="block" gutterBottom>
        {content}
      </Typography>
    </Button>
  );
};

export default Button;