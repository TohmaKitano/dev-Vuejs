// データをインポートする
import Exmaple from './Example.js'

// データにアクセスする
console.log(Exmaple.count)
// => 1

// 変数のスコープ
// varはブロック外からアクセスできる
{
  var x = 1
}
console.log(x)
// => 1

// let, constはブロックスコープなので、ブロック外からアクセスできない
{
  let x = 1
  const y = 0
}
console.log(x)
// => Uncaught ReferenceError: x is not defined
console.log(y)
// => Uncaught ReferenceError: y is not defined

// constは空配列で初期化できない
const array = [1, 2, 3]
console.log(array)
// => [1, 2, 3]
arrey = []
console.log(array)
// => [1, 2, 3]
// lengthに0を代入して初期化
array.length = 0
console.log(array)
// => []

// functionの省略
new Vue({
  methods: {
    handleClick: function() {
      // 処理を記述
    }
  }
})

new Vue({
  methods: {
    handleClick() {
      // 処理を記述
    }
  }
})

// アロー関数
var newArray = array.map(function(el) {
  return el * 2
})
// => function を省略
const newArray = array.map(el => {
  return el * 2
})
// => {} を省略
const newArray = array.map(el => el * 2)

// 引数が複数の場合
const newArray = array.map((el, index) => el * 2)

// オブジェクトを返す場合
const newArray = array.map(el => (
  {
    value: el * 2
  }
))
// => 一行にする
const newArray = array.map(el => ({ value: el * 2 }))

// テンプレートリテラル
var template = '\
  <div class="template">\
  <strong>${ this.name }</strong>\
  </div>'

const template = `
  <div class="template">
    <strong>${ this.name }</strong>
  </div>`

// オブジェクトプロパティのショートハンド
const newObject = {
  a: a,
  b: b
}
// =>
const newObject = { a, b }

// 分割代入
const [a, b] = [1, 2]
console.log(a)
// => 1
const { name } = { id: 1, name: 'りんご' }
console.log(name)
// => りんご
function myfunction({ id, name }) {
  console.log(name)
}
myfunction({ id: 1, name: 'りんご' })
// => りんご

// スプレッド演算子
const array = [1, 2, 3]
// 3つの引数をそれぞれ渡す
 function myfunction(...array) {}
// 配列を展開して新しい配列を作成
const newArray = [...array, 4]
console.log(newArray)
// =>  [1, 2, 3, 4]

// 配列メソッド
// find => 条件に一致した最初の要素の値を返す
const array = [
  { id: 1, name: 'りんご' },
  { id: 2, name: 'ばなな' }
]
const result = array.find((el) => el.id === 1)
console.log(result)
// => {id: 1, name: "りんご"}

// findIndex => 条件に一致した最初のインデックスを返す
const array = [
  { id: 1, name: 'りんご' },
  { id: 2, name: 'ばなな' }
]
const result = array.findIndex((el) => el.id === 1)
console.log(result)
// => 0

// Promise
// 成功したことを通知
function myFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success!')
    }, 1000)
  })
}
myFunction().then(value => {
  console.log(value)
})
// => Success

// 失敗したことを通知
function myFunction(number) {
  return new Promise((resolve, reject) => {
    if (number < 10) {
      resolve('Success!')
    } else {
      reject('Failer!')
    }
  })
}
myFunction(100).catch(value => {
  console.log(value)
})
// // => Failer!

// myFunction(1).catch(value => {
//   console.log(value)
// })
// // => 通知されない

// 成功でも失敗でも通知する
myFunction(1).then().catch().finally((e) => {
  // console.log(e)
  // => undefined
  console.log('Result')
})
// => result
