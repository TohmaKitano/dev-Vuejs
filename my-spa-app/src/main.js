// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// ルーターを読み込む
import router from './router.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  el: '#app',
  router, // アプリケーションに登録
  render: h => h(App)
})
