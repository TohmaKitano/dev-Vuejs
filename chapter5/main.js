// // コンポーネントの定義
// Vue.component('my-component', {
//   template: '<p>MyComponet</p>'
// })

// var myComponet = {
//   template: '<p>MyComponet</p>'
// }
// // コンポーネントはインスタンスが作成される前に定義する
// var app = new Vue({
//   el: '#app',
//   components: {
//     'my-component': myComponet
//   }
// })

var myComponet = Vue.component('my-component', {
  template: '<p>{{ message }}</p>',
  data: function() {
    return {
      message: 'Hello, World'
    }
  },
  methods: {
    // 処理を記述する
  }
})
var app = new Vue({
  el: '#app',
  components: {
    'my-component': myComponet
  }
})
// => 実行結果
// <div id="app"><p>Hello, World</p></div>

// template: <span>Hello</span><span>, World</span>
// // => NG
// template: <div><span>Hello</span><span>, World</span></div>
// // => OK

{/* <div id="app">
  <my-component></my-component>
  // ↑と↓は別々のインスタンス
  <my-component></my-component>
</div> */}
