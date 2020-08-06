import React from 'react';
import {CardHeader} from '@material-ui/core';

const Header = ({title, subheader}) => {
  return (
    <CardHeader
      title={title}
      subheader={subheader}
    />
  );
};

export default Header;