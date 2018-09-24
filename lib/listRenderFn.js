'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listRenderFn = listRenderFn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dataObj = require('./dataObj.js');

var _applicationFn = require('./applicationFn.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function listRenderFn(listThis, source, layerCounter) {
  var infoObj = new _dataObj.ListInfoObj(source);
  var content = [];
  var hasChildren = 0 < infoObj.children.length ? true : false;
  var nextLayer = layerCounter + 1;
  var props_item = (0, _applicationFn.createBasicProps)(listThis.env, 'layer-item');
  var props_content = (0, _applicationFn.createBasicProps)(listThis.env, 'item-content');
  props_content.onClick = function (event) {
    _itemOnClickHandler(event, listThis, infoObj);
  };
  var props_name = (0, _applicationFn.createBasicProps)(listThis.env, 'content-name');
  content.push(_react2.default.createElement(
    'li',
    props_item,
    _react2.default.createElement(
      'div',
      props_content,
      _react2.default.createElement(
        'div',
        props_name,
        infoObj.name
      )
    ),
    function () {
      var content_sublist = [];
      if (hasChildren) {
        var props_sublist = (0, _applicationFn.createBasicProps)(listThis.env, 'item-sublist');
        var props_layer = (0, _applicationFn.createBasicProps)(listThis.env, 'list-layer');
        var layerNextName = 'layer-' + nextLayer;
        props_layer.className += ' ' + layerNextName;
        if (listThis.env.styleObj[layerNextName]) {
          Object.keys(listThis.env.styleObj[layerNextName]).map(function (config) {
            props_layer.style[config] = listThis.env.styleObj[layerNextName][config];
          });
        }
        content_sublist.push(_react2.default.createElement(
          'div',
          props_sublist,
          _react2.default.createElement(
            'ul',
            props_layer,
            infoObj.children.map(function (item) {
              var content_list = [];
              content_list.push(listRenderFn(listThis, item, nextLayer));
              return content_list;
            })
          )
        ));
      }
      return content_sublist;
    }()
  ));
  return content;
}

function _itemOnClickHandler(event, listThis, infoObj) {
  event.stopPropagation();
  listThis.env.itemOnClickFn(infoObj);
  listThis.forceUpdate();
}