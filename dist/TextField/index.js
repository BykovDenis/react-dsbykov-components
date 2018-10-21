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
    input: {
      color: '#0288d1',
      '& label': {
        color: '#0288d1'
      }
    }
  };
};

function TextField(props) {
  var classes = props.classes,
      value = props.value,
      label = props.label;

  return _react2.default.createElement(_core.TextField, {
    label: label,
    value: value,
    className: classes.button
  });
}

TextField.propTypes = {
  label: _propTypes2.default.string,
  value: _propTypes2.default.string
};

exports.default = (0, _styles.withStyles)(styles)(TextField);