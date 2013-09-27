console.log('一番最初に実行されます。');

//依存モジュールを非同期ローディング

require(
  ['jst/templates', 'views/view', 'models/user'],
  function(JST, UserView, User)
  {
    //JSTを使って表示
    console.log('jstテンプレートテストしてみます。');
    var user_data = {
      name: 'shinofara',
      nickname: 'しのふぁら',
      age: 26
    };

    (new UserView({model: new User(user_data)})).render();
  }
);

console.log('さて問題です、いつ処理が行われるしょう？実は二番目なんです(((〃ω〃))');
