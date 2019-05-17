// ①占うボタンがクリックされた際に反応する処理を書いてください（consoleに「押した」と表示する）
// ②omikuji関数を定義し、①のクリック時に呼び出してください
// ③大吉、吉、中吉、凶、大凶という要素が入ったres配列をomikuji関数内に定義してください
// ④res配列の要素数を数えてresLenという変数を定義してください

let btn = document.getElementById('btn');
btn.addEventListener('click', luckyColor);

// function omikuji() {
//   console.log('押した');
//   let res = ['大吉', '中吉', '吉', '凶', '大凶'];
//   let resLen = res.length - 1;
//   // ランダムに1つ決める
//   let randomNum = Math.random(); // 0 ~ 1までの数字
//   console.log(randomNum);
//   let num = Math.round(randomNum * resLen);
//   console.log(num);

//   // ⑤result要素を取得してresult変数にいれる
//   // ⑥resultのコンテンツを配列の対象結果で上書きする
//   let result = document.getElementById('result');
//   result.textContent = res[num];
// }

// ⑦ラッキーカラーを教えてくれる機能を作る
// luckyColor関数

// 今日の運勢は…のコンテンツ部分を今日のラッキーカラーは…に上書きする
let result = document.getElementById('result');
result.textContent = '今日のラッキーカラーは…';

function luckyColor() {
  console.log('押した');
  let res = ['青', '赤', '黄', '金', '銀'];
  let resLen = res.length - 1;
  // ランダムに1つ決める
  let randomNum = Math.random(); // 0 ~ 1までの数字
  console.log(randomNum);
  let num = Math.round(randomNum * resLen);
  console.log(num);

  // ⑤result要素を取得してresult変数にいれる
  // ⑥resultのコンテンツを配列の対象結果で上書きする
  let result = document.getElementById('result');
  result.textContent = res[num];
}











