'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENVDefaultObj = ENVDefaultObj;
exports.ListInfoObj = ListInfoObj;
function ENVDefaultObj() {
  this['env'] = {
    listArr: [],
    styleObj: {},
    refFn: function refFn() {}
  };
}

function ListInfoObj(obj) {
  var _this = this;

  this['name'] = '';
  this['children'] = [];
  Object.keys(obj).map(function (key) {
    _this[key] = obj[key];
  });
}