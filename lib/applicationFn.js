"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBasicProps = createBasicProps;
function createBasicProps(env, name) {
  var obj = {
    className: name,
    style: env.styleObj[name] ? Object.assign({}, env.styleObj[name]) : {}
  };
  return obj;
}