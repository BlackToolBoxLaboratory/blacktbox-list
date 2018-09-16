'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.mainRenderFn = mainRenderFn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _applicationFn = require('./applicationFn.js');

var _listRenderFn = require('./listRenderFn.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mainRenderFn(listThis) {
  var content = [];
  var listArr = listThis.env.listArr;
  var nextLayer = 0;
  var props_list = (0, _applicationFn.createBasicProps)(listThis.env, 'btb-list');
  if (listThis.props.className) {
    props_list.className += ' ' + listThis.props.className;
  }
  var props_layer = (0, _applicationFn.createBasicProps)(listThis.env, 'list-layer');
  var layerNextName = 'layer-' + nextLayer;
  props_layer.className += ' ' + layerNextName;
  if (listThis.env.styleObj[layerNextName]) {
    Object.keys(listThis.env.styleObj[layerNextName]).map(function (config) {
      props_layer.style[config] = listThis.env.styleObj[layerNextName][config];
    });
  }
  content.push(_react2.default.createElement(
    'div',
    _extends({}, props_list, { ref: function ref(_ref) {
        _refHandler(listThis.env, _ref);
      } }),
    _react2.default.createElement(
      'ul',
      props_layer,
      listArr.map(function (item) {
        var content_list = [];
        content_list.push((0, _listRenderFn.listRenderFn)(listThis, item, nextLayer));
        return content_list;
      })
    )
  ));
  return content;
}

function _refHandler(env, ref) {
  env.refFn(ref);
}