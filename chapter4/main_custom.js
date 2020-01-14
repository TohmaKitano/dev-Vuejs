// カスタムディレクティブ
var app = new Vue({
  el: '#app',
  directives: {
    focus: {
      inserted: function(element) {
        element.focus()
      }
    }
  }
})

// グローバルに登録
Vue.directive('focus', {
  inserted: function(element) {
    element.focus()
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
