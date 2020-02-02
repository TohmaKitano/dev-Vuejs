// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// デフォルト(template) => コンパイルが必要
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

// ランタイム限定(描画関数) => コンパイルは不要
new Vue({
  el: '#app',
  render: h => h(App)
})
