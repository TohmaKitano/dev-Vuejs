var app = new Vue({
  // オプション
  // マウントする要素
  el: '#app',
  // アプリケーションで使用するデータ
  data: {
    // テキストのバインディング
    message: 'Hello, Vue.js!',
    count: '99',
    // 繰り返しのバインディング
    list: ['apple', 'banana', 'strawberry'],
    // 条件分岐のディレクティブ
    show: true, // or false
    animation: true
  },
  // 算出プロパティ
  computed: {
    computedMessage: function() {
      return this.message + '!'
    }
  },
  // ライフサイクルフック
  created: function() {
    // インスタンスを生成&初期化したら発火する
    console.log('created')
    // ex beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed, errorCaptured
  },
  // メソッド
  // イベントのディレクティブ
  methods: {
    handleClick: function(event) {
      alert(event.target)
    }
  }
})
console.log(app.message)
// app.list.push('orange')
