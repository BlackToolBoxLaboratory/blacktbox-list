'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBasicProps = createBasicProps;
exports.camelCaseTransformerFn = camelCaseTransformerFn;
function createBasicProps(env, name) {
  var obj = {
    key: name,
    className: name,
    style: env.styleObj[name] ? Object.assign({}, env.styleObj[name]) : {}
  };
  return obj;
}

function camelCaseTransformerFn(orinal_name) {
  var newName = '';
  newName = orinal_name.replace(/-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
  return newName;
}