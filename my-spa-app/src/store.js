import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import product from '@/store/product.js'
import view from '@/store/view.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product, // モジュールをストアルートに登録
    view
  },
  // ...
})
export default store
