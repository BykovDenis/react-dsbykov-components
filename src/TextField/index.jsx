import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MaterialTextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  input: {
    color: '#0288d1',
    '& label': {
      color: '#0288d1',
    }
  },
});

function TextField(props) {
  const { classes, value, label } = props;
  return (
    <MaterialTextField
      label={label}
      value={value}
      className={classes.button}
    />
  );
}

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default withStyles(styles)(TextField);

