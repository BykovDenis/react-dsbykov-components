import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './app.css';

const styles = () => ({
  app: {
    textAlign: 'center',
  },
  appHeader: {
    marginBottom: '30px',
  },
  appTitle: {
    font: 'inherit',
    fontSize: '40px',
  },
  appPageDescription: {
    fontSize: '16px',
  },
  appMain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appFooter: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { props } = this;
    const { classes } = props;
    return (
      <div className={classes.app}>
        <main className={classes.appMain}>
          Head
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.array,
};

export default withStyles(styles)(App);
