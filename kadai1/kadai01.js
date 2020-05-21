//フロントエンド - jQuery - 01 JavaScriptの基本的な構文について理解する

//課題1

var answer = prompt('入力された数字は正の数？負の数？');
if (answer >= 0) {
  alert('正の数');
} else {
  alert('負の数');
}

//課題2

var answer = prompt('入力された数字は正の数？負の数？');
if (answer >= 0) {
  alert('正の数');
} else if (answer < 0) {
  alert('負の数');
} else {
  alert('数値を入力してください');
}

//課題3

var animals = ['パンダ','ライオン','キリン'];
var i = 0;
while (true) {
  if (i >= animals.length) {
    break;
  }
  alert(animals[i]);
  i++;
}

//課題4
var animals = ['パンダ','ライオン','キリン'];
var animal = prompt(' パンダ・ライオン・キリンどれかを入力してください');
var i = 0;
while (i < animals.length) {
  if (animal === 'ライオン' && animals[i] === 'ライオン') {
    break;
  }　
  alert(animals[i]);
  i++;
}

//課題5

var animals = ['パンダ','ライオン','キリン'];
var animal = prompt(' パンダ・ライオン・キリンどれかを入力してください');
var i = 0;
while (i < animals.length) {
  if (animal === 'ライオン' && animals[i] === 'ライオン') {
    alert(i);
    break;
  }　
  alert(animals[i]);
  i++;
}

//課題6・7
var animals = [
  { 'name' : 'パンダ' , 'weight' : 80 },
  { 'name' : 'ライオン' , 'weight' : 200 },
  { 'name' : 'キリン' , 'weight' : 300 }
];

var animal = prompt(' パンダ・ライオン・キリンどれかを入力してください');
switch (animal) {
  case 'パンダ':
    alert(animals[0].weight);
    break;
  case 'ライオン':
    alert(animals[1].weight);
    break;
  case 'キリン':
    alert(animals[2].weight);
    break;
  default:
    alert('パンダ・ライオン・キリンどれかを入力してください');
    break;
}

//課題8
function calc(x) {
  return x * x * 3.14;
}

var x = prompt('半径を入力してください');

alert(calc(x));
