// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Vuexを登録する場合
// import Vuex from 'vuex'
// Vue.use(Vuex)

// 自作のプラグインを登録する場合
// var MyPlugin = {
//   // install => Vue.use()でプラグインが登録された時に呼び出される
//   install: function(Vue, options) {
//     // Vue.use() した時に実行される処理
//     console.log(options)
//   }
// }
// Vue.use(MyPlugin, {
//   lang: 'ja'
// })

// 自作のプラグインを登録するサンプル
// import windowPlugin from './window-plugin'
// Vue.use(windowPlugin)

// var MyPlugin = {
//   install: function(Vue) {
//     Vue.directive('my-plugin', function(el) {
//       // グローバルにカスタムディレクティブを登録
//     })
//     Vue.mixin({
//       created: function() {
//         // グローバルにミックスインを登録
//       }
//     })
//     // インスタンスプロパティを登録
//     Vue.prototype.$myPlugin = 'myPlugin'
//    // 慣例的に$から始まる名前を登録
//   }
// }
// Vue.use(MyPlugin)

// ストア
import store from '@/store.js'
// store.commit('increment')
// console.log(store.state.count)
// console.log(store.state.message)
// console.log(store.getters.count)
// // => 0
// console.log(store.getters.max)
// // => 300
// console.log(store.getters.item(1))
// // => {__ob__: Observer}
// console.log(store.getters.name(1))
// // => りんご

// // ミューテーション
// // ミューテーションをcommitで呼び出す
// store.commit('mutationType', 1)
// console.log(store.state.count)
// // => 1

// // アクション
// // アクションをdisppatchで呼び出す
// store.dispatch('actionType', 1)
// console.log(store.state.count)
// // => 1

// // モジュールでストアを分割するサンプル
// console.log(store.state.moduleA.count)
// // => 1
// console.log(store.state.moduleB.count)
// // => 2
// // store.commit('update')
// store.commit('moduleA/update')
// // store.commit('moduleB/update')
// console.log(store.state.moduleA.count)
// // => 101
// console.log(store.state.moduleB.count)
// // => 202

// // ネームスペース付きモジュールから外部へアクセス
// store.dispatch('moduleA/test')
// console.log(store.getters['moduleA/test'])
// // => ["getter: moduleA/item", "getter: user"]

// モジュールの再利用
store.dispatch('moduleA/load', '/path/a.json');
store.dispatch('moduleB/load', '/path/b.json');

// コンポーネントにストアを組み込む
new Vue({
  el: '#app',
  store, // storeをローカルに登録
  render: h => h(App)
})

/* eslint-disable no-new */
// デフォルト(template) => コンパイルが必要
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

// // ランタイム限定(描画関数) => コンパイルは不要
// new Vue({
//   el: '#app',
//   store, // ストアを登録
//   render: h => h(App)
// })
