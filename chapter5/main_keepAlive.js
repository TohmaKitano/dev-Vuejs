// keep-alive コンポーネントと状態を維持
// メッセージ一覧
Vue.component('comp-board', {
  template: '<div>Message Board</div>'
})
// 投稿フォーム
Vue.component('comp-form', {
  template: '<div>Form<textarea v-model="message"></textarea></div>',
  data: function() {
    return {
      message: ''
    }
  }
})

new Vue({
  el: '#app',
  data: {
    current: 'comp-board'
  }
})
