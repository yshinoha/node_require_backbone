console.log('一番最初に実行されます。');

//依存モジュールを非同期ローディング

require(["views/test1", "views/test2", "models/test"], function(testView1,testView2, blog) {

  var test_view1 = new testView1();

  var blog = new blog({text: "sample"});
  blog.set({text: "example"}); // => sample example
  blog.set({text: "example1"}); // => sample example
  console.log(test_view1.render());

  //アンチパターン
  //アンチパターン理由、オブジェクト単位で渡す場合は、内容の増加などがおこなえるが、引数を増減するのは、よろしくない
  //console.log((new testView2({blog_text: blog.get('text')})).render());
  console.log((new testView2({model: blog})).render());

  //仮にオブジェクトが多い場合
  var user = {id:123,name:'shinohara'};
  console.log((new testView2({model: blog, user: user})).render());

  console.log('一番最後に実行されます。');

});

console.log('さて問題です、いつ処理が行われるしょう？実は二番目なんです(((〃ω〃))');
