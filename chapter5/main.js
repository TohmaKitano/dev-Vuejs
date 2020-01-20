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

// var myComponet = Vue.component('my-component', {
//   template: '<p>{{ message }}</p>',
//   data: function() {
//     return {
//       message: 'Hello, World'
//     }
//   },
//   methods: {
//     // 処理を記述する
//   }
// })
// var app = new Vue({
//   el: '#app',
//   components: {
//     'my-component': myComponet
//   }
// })
// => 実行結果
// <div id="app"><p>Hello, World</p></div>

// template: <span>Hello</span><span>, World</span>
// // => NG
// template: <div><span>Hello</span><span>, World</span></div>
// // => OK

{/* <div id="app">
  <my-component></my-component>
  // ↑と↓は別々のインスタンスでそれぞれスコープをもつ
  <my-component></my-component>
</div> */}

// // コンポーネント間の通信
// Vue.component('my-component', {
//   template: '<p><component-child>MyComponet</component-child></p>'
// })
// // 親がルートインスタンスの場合
// var componentChild = Vue.component('component-child', {
//   template: '<p>{{ val }}</p>',
//   props: ['val']
// })
// var app = new Vue({
//   el: '#app',
//   // components: {
//   //   'component-child': componentChild
//   // }
// })

// // 親から子へリアクティブデータを渡す
// var componentChild = Vue.component('component-child', {
//   template: '<p>{{ val }}</p>',
//   props: ['val']
// })
// var app = new Vue({
//   el: '#app',
//   data: {
//     valA: 'これは子A',
//     valB: 'これは子B'
//   }
// })

// // 子コンポーネントに属性を渡す
// var componentChild = Vue.component('component-child', {
//   template: '<p id="child" class="child">componentChild</p>',
// })
// var app = new Vue({
//   el: '#app'
// })

// Vue.component('component-child', {
//   template: '<p id="child" class="child">componentChild</p>',
// })
// new Vue({
//   el: '#app'
// })

// 子コンポーネントでfor文を使う
// Vue.component('component-child', {
//   template: '<li>{{ name }} HP.{{ hp }}</li>',
//   props: [
//     'name',
//     'hp'
//   ]
// })
// new Vue({
//   el: '#app',
//   data: {
//     list: [
//       { id: 1, name: 'スライム', hp: 100},
//       { id: 2, name: 'ゴブリン', hp: 200},
//       { id: 3, name: 'ドラゴン', hp: 500}
//     ]
//   }
// })


// // 子コンポーネントはpropsで受け取ったデータを書き換えてはいけない
// Vue.component('component-child', {
//   template: '<li>{{ name }} HP.{{ hp }}\
//             <button v-on:click="doAttack">攻撃する</button></li>',
//   props: [
//     'name',
//     'hp'
//   ],
//   methods: {
//     doAttack: function() {
//       this.hp -= 10
//     }
//   }
// })
// new Vue({
//   el: '#app',
//   data: {
//     list: [
//       { id: 1, name: 'スライム', hp: 100},
//       { id: 2, name: 'ゴブリン', hp: 200},
//       { id: 3, name: 'ドラゴン', hp: 500}
//     ]
//   }
// })
// // => [Vue warn]: ~

// propsの受け取りデータ型を指定する
Vue.component('component-child', {
  props: {
    val: String
  }
})
// 1 + '1' => 11 :String
// propsの許容範囲はしっかり定義しておく

Vue.component('example', {
  props: {
    // Nullはどんなデータ型も受け取る
    propA: Number,
    propB: [String, Number],
    propC: {
      type: String,
      required: true
    },
    // デフォルト値
    propD: {
      type: Number,
      dafault: 100
    },
    propE: {
      type: Object,
      default: function() {
        return { message: 'hello' }
      }
    },
    // カスタムでバリデーションを設定
    propF: {
      validator: function(value) {
        return value > 10
      }
    }
  }
})
// => propsに記述するとコードの見通しが悪くなるので、属性に記述した方がスマート
// => <component-child v-bind="object"></component-child>
