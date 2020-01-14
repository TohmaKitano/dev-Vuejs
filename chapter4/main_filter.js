// // フィルタを使ったテキストの変換処理
// var app = new Vue({
//   el: '#app',
//   data: {
//     price: 19800
//   },
//   filters: {
//     localNum :function(value) {
//       return value.toLocalString()
//     }
//   }
// })

// // フィルタに引数を持たせる
// {{ message | filter(foo, 100) }}

// filters: {
//   filter: function(messsage, foo, num) {
//     console.log(message, foo, num)
//   }
// }

// // 複数のフィルタをつなげる
// filters: {
//   round: function(value) {
//     return Math.round(val * 100) / 100
//   },
//   radian: function(value) {
//     return value * Math.PI * 100
//   }
// }

