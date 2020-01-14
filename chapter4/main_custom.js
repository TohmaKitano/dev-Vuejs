// カスタムディレクティブ
var app = new Vue({
  el: '#app',
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  }
})

// グローバルに登録
Vue.directive('focus', {
  inserted: function(el) {
    el.focus()
  }
})

// カスタムディレクティブで使用可能なフック
Vue.directive('example', {
  bind: function(el, binding) {
    console.log('v-exapmle bind')
  },
  inserted: function(el, binding) {
    console.log('v-exmaple inserted')
  },
  update: function(el, binding) {
    console.log('v-exmaple update')
  },
  componentUpdated: function(el, binding) {
    console.log('v-exmaple componentUpdated')
  },
  unbind: function(el, binding) {
    console.log('v-exmaple unbind')
  }
})

// フックの関数
Vue.directive('example', function(el, binding, vonode, oldVnode) {
  // 第二引数に関数を渡すと、bindとupdateにフックし、同じ処理を呼び出す。
})
