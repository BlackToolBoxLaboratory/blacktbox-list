'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ListInfoObj(obj) {
  var _this = this;

  this['name'] = '';
  this['children'] = [];
  Object.keys(obj).map(function (key) {
    _this[key] = obj[key];
  });
};

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this2 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this2.env = {
      listArr: [],
      styleObj: {},
      refFn: function refFn() {}
    };
    _this2.collapseStatusList = {};
    return _this2;
  }

  _createClass(Menu, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateENVFn(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateENVFn(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var content = [];
      var listArr = this.env.listArr;
      var nextLayer = 0;
      var props_list = this.createBasicProps('btb-list');
      if (this.props.className) {
        props_list.className += ' ' + this.props.className;
      };
      var props_layer = this.createBasicProps('list-layer');
      var layerNextName = 'layer-' + nextLayer;
      props_layer.className += ' ' + layerNextName;
      if (this.env.styleObj[layerNextName]) {
        Object.keys(this.env.styleObj[layerNextName]).map(function (config) {
          props_layer.style[config] = _this3.env.styleObj[layerNextName][config];
        });
      };
      content.push(_react2.default.createElement(
        'div',
        _extends({}, props_list, { ref: function ref(_ref) {
            _this3._refHandler(_ref);
          } }),
        _react2.default.createElement(
          'ul',
          props_layer,
          listArr.map(function (item) {
            var content_list = [];
            content_list.push(_this3.listRenderFn(item, nextLayer));
            return content_list;
          })
        )
      ));
      return content;
    }
  }, {
    key: 'updateENVFn',
    value: function updateENVFn(source) {
      var _this4 = this;

      this.env = {
        listArr: [],
        styleObj: {},
        refFn: function refFn() {}
      };
      Object.keys(source).map(function (entry) {
        _this4.env[entry] = source[entry];
      });
    }
  }, {
    key: 'listRenderFn',
    value: function listRenderFn(source, layerCounter) {
      var _this5 = this;

      var infoObj = new ListInfoObj(source);
      var content = [];
      var hasChildren = 0 < infoObj.children.length ? true : false;
      var nextLayer = layerCounter + 1;
      var props_item = this.createBasicProps('layer-item');
      var props_content = this.createBasicProps('item-content');
      var props_name = this.createBasicProps('content-name');
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
            var props_sublist = _this5.createBasicProps('item-sublist');
            var props_layer = _this5.createBasicProps('list-layer');
            var layerNextName = 'layer-' + nextLayer;
            props_layer.className += ' ' + layerNextName;
            if (_this5.env.styleObj[layerNextName]) {
              Object.keys(_this5.env.styleObj[layerNextName]).map(function (config) {
                props_layer.style[config] = _this5.env.styleObj[layerNextName][config];
              });
            };
            content_sublist.push(_react2.default.createElement(
              'div',
              props_sublist,
              _react2.default.createElement(
                'ul',
                props_layer,
                infoObj.children.map(function (item) {
                  var content_list = [];
                  content_list.push(_this5.listRenderFn(item, nextLayer));
                  return content_list;
                })
              )
            ));
          };
          return content_sublist;
        }()
      ));
      return content;
    }
  }, {
    key: 'createBasicProps',
    value: function createBasicProps(name) {
      var obj = {
        className: name,
        style: this.env.styleObj[name] ? Object.assign({}, this.env.styleObj[name]) : {}
      };
      return obj;
    }
  }, {
    key: '_refHandler',
    value: function _refHandler(ref) {
      this.env.refFn(ref);
    }
  }]);

  return Menu;
}(_react2.default.Component);

;

Menu.propTypes = {
  listArr: _propTypes2.default.array.isRequired,
  styleObj: _propTypes2.default.object,
  refFn: _propTypes2.default.func
};

Menu.defaultProps = {
  listArr: [],
  styleObj: {},
  refFn: function refFn() {}
};

exports.default = Menu;