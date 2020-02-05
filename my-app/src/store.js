import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// ストアはアプリケーション内に作った、仮想のデータベースのようなもの。
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment(state) {
//       state.count++
//     }
//   }
// })
// export default store

const store = new Vuex.Store({
  state: {
    count: 0,
    list: [
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
      { id: 3, name: 'いちご', price: 300 }
    ]
    // message: 'Hello, Vue.js'
  },
  mutations: {
    mutationType(state, payload) {
      state.count = payload
    }
  },
  getters: {
    // ステートを返す
    count(state, getters, rootState, rootGetter) {
      return state.count
    },
    // リストの中からpriceプロパティの最大値を返す
    max(state) {
      return state.list.reduce((a, b) => {
        return a > b.price ? a : b.price
      }, 0)
    },
    // 引数付きゲッター
    item(state) {
      // 引数を使用するためアロー関数を返している
      return id => state.list.find(el => el.id === id)
    },
    // 別のゲッターを使う
    name(state, getters) {
      return id => getters.item(id).name
    }
  }
})
export default store
