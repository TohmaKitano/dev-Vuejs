// // カスタムディレクティブ
// var app = new Vue({
//   el: '#app',
//   directives: {
//     focus: {
//       inserted: function(el) {
//         el.focus()
//       }
//     }
//   }
// })

// // グローバルに登録
// Vue.directive('focus', {
//   inserted: function(el) {
//     el.focus()
//   }
// })

// // カスタムディレクティブで使用可能なフック
// Vue.directive('example', {
//   bind: function(el, binding) {
//     console.log('v-exapmle bind')
//   },
//   inserted: function(el, binding) {
//     console.log('v-exmaple inserted')
//   },
//   update: function(el, binding) {
//     console.log('v-exmaple update')
//   },
//   componentUpdated: function(el, binding) {
//     console.log('v-exmaple componentUpdated')
//   },
//   unbind: function(el, binding) {
//     console.log('v-exmaple unbind')
//   }
// })

// // フックの関数
// Vue.directive('example', function(el, binding, vonode, oldVnode) {
//   // 第二引数に関数を渡すと、bindとupdateにフックし、同じ処理を呼び出す。
// })

// 動画の再生を操作するサンプル
var app = new Vue({
  el: '#app',
  data: {
    video1: true,
    video2: false
  },
  directives: {
    video(el, binding) {
      binding.value ? el.play() : el.pause()
    }
  }
})
// => updateフックで、video1プロパティ(el)の値(binding)が変化すると、video2プロパティ(el)の値(binding)も変化する

// 前の状態と比較して処理を行う
var app = new Vue({
  el: '#app',
  data: {
    video1: true,
    video2: false
  },
  directives: {
    video(el, binding) {
      if (binding.value !== binding.oldValue) {
        binding.value ? el.play() : el.pause()
      }
    }
  }
})
// => updateフックで、video1プロパティ(el)の値(binding)が変化すると、video2プロパティ(el)の値(binding)も変化する
// => 関係のない呼び出しをスキップする

