'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = require('@material-ui/core');

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles() {
  return {
    button: {
      backgroundColor: '#0288d1',
      color: '#ffffff'
    }
  };
};

function Button(props) {
  var classes = props.classes,
      children = props.children;

  return _react2.default.createElement(
    _core.Button,
    { className: classes.button },
    children
  );
}

Button.propTypes = {
  children: _propTypes2.default.element
};

exports.default = (0, _styles.withStyles)(styles)(Button);