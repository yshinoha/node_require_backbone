define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["hello"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += 'JSTテスト\n' +
__e( test ) +
'\n' +
__e( test ) +
'\n\n';
 _.each(list,function(data) { ;
__p += '\n  ' +
__e( data.test ) +
'<br>\n  ' +
__e( data.test ) +
'<br>\n';
 }); ;
__p += '\n';

}
return __p
};

this["JST"]["test"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Nanyate\n';

}
return __p
};

this["JST"]["test/item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'item\n';

}
return __p
};

  return this["JST"];

});