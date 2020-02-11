import 'babel-polyfill'
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
// import {
//   mapState,
//   mapGetters,
//   mapMutations,
//   mapActions
// } from 'Vuex'
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

// ミューテーション
// const store = new Vuex.Store({
//   state: {
//     count: 0,
//     list: [
//       { id: 1, name: 'りんご', price: 100 },
//       { id: 2, name: 'ばなな', price: 200 },
//       { id: 3, name: 'いちご', price: 300 }
//     ]
//     // message: 'Hello, Vue.js'
//   },
//   mutations: {
//     mutationType(state, payload) {
//       state.count = payload
//     }
//   },
//   getters: {
//     // ステートを返す
//     count(state, getters, rootState, rootGetter) {
//       return state.count
//     },
//     // リストの中からpriceプロパティの最大値を返す
//     max(state) {
//       return state.list.reduce((a, b) => {
//         return a > b.price ? a : b.price
//       }, 0)
//     },
//     // 引数付きゲッター
//     item(state) {
//       // 引数を使用するためアロー関数を返している
//       return id => state.list.find(el => el.id === id)
//     },
//     // 別のゲッターを使う
//     name(state, getters) {
//       return id => getters.item(id).name
//     }
//   }
// })
// export default store

// // アクション
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     mutationType(state, payload) {
//       state.count = payload
//     }
//   },
//   actions: {
//     actionType({ commit }, payload) {
//       // アクション内からコミットする
//       commit('mutationType', payload)
//     }
//   }
// })
// export default store

// // コンポーネントにストアを組み込む
// const store = new Vuex.Store({
//   // 初期のstate
//   state: {
//     message: 'Hello, Vue.js'
//   },
//   // stateのmessageを使用するゲッター
//   getters: {
//     message(state) {
//       return state.message
//     }
//   },
//   // stateのメッセージを変更するミューテーション
//   mutations: {
//     setMessage(state, payload) {
//       state.message = payload.message
//     }
//   },
//   // stateのメッセージを更新するアクション
//   actions: {
//     doUpdate({ commit }, message) {
//       commit('setMessage', { message })
//     }
//   }
// })
// export default store

// // モジュールでストアを分割するサンプル
// const moduleA = {
//   namespaced: true,
//   state: {
//     count: 1
//   },
//   mutations: {
//     update(state) {
//       state.count += 100
//     }
//   }
// }

// const moduleB = {
//   namespaced: true,
//   state: {
//     count: 2
//   },
//   mutations: {
//     update(state) {
//       state.count += 200
//     }
//   }
// }

// const store = new Vuex.Store({
//   modules: {
//     moduleA,
//     moduleB
//   }
// })
// export default store

// // ネームスペース付きモジュールから外部へアクセス
// const moduleA = {
//   namespaced: true,
//   getters: {
//     test(state, getters, rootState, rootGetters) {
//       // 自分自身の item ゲッターを使用 getters['moduleA/item']
//       getters.item
//       // ルートの user ゲッターを使用
//       rootGetters.user

//       return [getters.item, rootGetters.user]
//     },
//     item() { return 'getter: moduleA/item' },
//   },
//   actions: {
//     test({ dispatch, commit, getters, rootGetters }) {
//       // 自分自身の update をディスパッチ
//       dispatch('update')
//       // ルートの update をディスパッチ
//       dispatch('update', null, { root: true })
//       // ルートの update をコミット
//       commit('update', null, { root: true })
//       // ルートに登録されたモジュール moduleB の update をコミット
//       commit('moduleB/update', null, { root: true })
//     },
//     update() {
//       console.log('action: moduleA/update')
//       // => action: moduleA/update
//     },
//   }
// }

// const moduleB = {
//   namespaced: true,
//   mutations: {
//     update() {
//       console.log('mutation: moduleB/update')
//       // => mutation: moduleB/update
//     }
//   }
// }

// const store = new Vuex.Store({
//   modules: {
//     moduleA,
//     moduleB
//   },
//   getters: {
//     user() {
//       return 'getter: user'
//     }
//   },
//   mutations: {
//     update() {
//       console.log('mutation: update')
//       // => mutation: update
//     }
//   },
//   actions: {
//     update() {
//       console.log('action: update')
//       // => action: update
//     }
//   }
// })
// export default store

// モジュールの再利用
// モジュールを定義
const myModule = {
  namespaced: true,
  state() {
    return {
      entries: []
    }
  },
  mutations: {
    set(state, payload) {
      state.entries = payload
    }
  },
  actions: {
    load({ commit }, file) {
      axios
        .get(file)
        .then(response => {
           commit('set', response.data)
        })
    }
  }
}

// モジュールを登録
const store = new Vue.Store({
  modules: {
    moduleA: myModule,
    moduleB: myModule
  }
})
export default store;
