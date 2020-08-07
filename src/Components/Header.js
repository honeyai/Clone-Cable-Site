import React from 'react';
import {CardHeader} from '@material-ui/core';

const Header = ({name, title, subheader}) => {
  return (
    <CardHeader
      className={name}
      title={title}
      subheader={subheader}
    />
  );
};

export default Header;