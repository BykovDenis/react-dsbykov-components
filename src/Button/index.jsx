import React from 'react';
import PropTypes from 'prop-types';
import { Button as MaterialButton } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    backgroundColor: '#0288d1',
    color: '#ffffff',
  },
});

function Button(props) {
  const { classes, children } = props;
  return (
    <MaterialButton className={classes.button}>
      {children}
    </MaterialButton>
  );
}

Button.propTypes = {
  children: PropTypes.element,
};

export default withStyles(styles)(Button);

