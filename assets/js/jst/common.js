define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["hello"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += 'JSTテンプレートが読み込まれました。<br>\n\n私の名前は、「' +
__e( user.name ) +
'」です。<br>\n\n\n全部の情報を公開すると\n';
 _.each(user, function(val, key) { ;
__p += '\n  ' +
__e( val ) +
' = ' +
__e( key ) +
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