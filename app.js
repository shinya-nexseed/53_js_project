console.log('-----id指定-----');
let hoge = document.getElementById('hoge');
console.log(hoge);
console.log(hoge.tagName);
console.log(hoge.id);
console.log(hoge.textContent);

console.log('-----class指定-----');
let fuga = document.getElementsByClassName('fuga');
console.log(fuga);
console.log(fuga.item(0));
console.log(fuga.item(1).textContent);
// forを使って取得した全itemを表示
let len = fuga.length;
for(let i = 0; i < len; i++) {
  console.log(fuga.item(i).textContent);
}

console.log('-----タグ指定-----');
let list = document.getElementsByTagName('li');
console.log(list);
console.log(list.item(3).textContent);

console.log('-----イベント-----');
let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
  // ボタンが押された際に実行される処理
  // window.alert('ほげほげ');
  console.log('ほげ！');
});

console.log('-----要素の追加-----');
let add = document.getElementById('add');
add.addEventListener('click', function(){
  let target = document.getElementById('target');
  target.textContent = 'ついかぁぁぁぁぁぁぁああ！';
});

console.log('-----スタイルの変化-----');
let change = document.getElementById('change');
change.addEventListener('click', function(){ // 無名関数を定義、使用している。
  let target2 = document.getElementById('target2');
  target2.style.backgroundColor = '#000000';

  // target2.classList.add('large'); // クラスの追加
  // target2.classList.remove('large'); // クラスの削除
  target2.classList.toggle('large'); // クラスのトグル
  target2.classList.toggle('position'); // クラスのトグル
});

console.log('-----関数-----');
// 6番目の文法
// 5大文法
  // 変数
  // 配列
  // 連想配列
  // 条件分岐文
  // 繰り返し文

// jsには関数の書き方が3つ存在する（PHPと同じ書き方の③を使用）

// 書き方①
// let 名前 = function() {
//   処理
// }

// 書き方②
// let 名前 = () => {
//   処理
// }

// 書き方③
// function 名前() {
//   処理
// }

// 関数の定義
function changeBg() {
  let target3 = document.getElementById('target3');
  console.log(target3);
  console.log(target3.id);
  console.log(target3.tagName);
  console.log(target3.classList);
  target3.classList.toggle('bg-dark');
  target3.classList.toggle('bg-red');
}

// 関数とは
// 上記のように一連の処理をひとまとめにしたもの
// 関数名を呼び出すだけでまとめた処理を呼ぶことができ、
// 何度も使用する処理などを1回の記述にまとめておける。
let func = document.getElementById('func');
func.addEventListener('click', changeBg);

// 関数には2種類
// 組込関数と独自関数












