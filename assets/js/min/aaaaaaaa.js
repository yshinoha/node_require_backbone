define("jst/templates",[],function(){return this.JST=this.JST||{},this.JST.hello=function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;with(obj)__p+="JSTテンプレートが読み込まれました。<br>\n<br>\n私の名前は、「"+__e(user.name)+"」です。<br>\n<br>\n全部の情報を公開すると<br>\n",_.each(user,function(e,t){__p+="\n  "+__e(e)+" = "+__e(t)+"<br>\n"}),__p+="\n";return __p},this.JST.test=function(obj){obj||(obj={});var __t,__p="",__e=_.escape;with(obj)__p+="Nanyate\n";return __p},this.JST["test/item"]=function(obj){obj||(obj={});var __t,__p="",__e=_.escape;with(obj)__p+="item\n";return __p},this.JST}),console.log("views/view.jsが読み込まれました。"),define("views/view",["Backbone"],function(){return Backbone.View.extend({el:"body",defaults:{},initialize:function(){console.log("Userのnewです。")},render:function(){var e=this.model.attributes;$(this.el).html(JST.hello({user:e}))}})}),console.log("models/user.jsが読み込まれました。"),define("models/user",["Backbone"],function(){return Backbone.Model.extend({defaults:{name:"no name",nickname:null,age:0},initialize:function(e){this.name=e.name,this.nickname=e.nickname,this.age=e.age}})}),console.log("一番最初に実行されます。"),require(["jst/templates","views/view","models/user"],function(e,t,n){console.log("jstテンプレートテストしてみます。");var r={name:"shinofara",nickname:"しのふぁら",age:26};(new t({model:new n(r)})).render()}),console.log("さて問題です、いつ処理が行われるしょう？実は二番目なんです(((〃ω〃))"),define("requires/test",function(){});