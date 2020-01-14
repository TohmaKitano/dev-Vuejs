// ウォッチャ
new Vue({
  // ...
  watch: {
    監視するデータ: function (新しい値, 古い値) {
      // 比較関数に新しい値と古い値をセット
      // valueが変化したときに行いたい処理
    },
    'item.value': function (newVal, oldVal) {
       // 比較関数にnewValとoldValをセット
       // listが変化したときに行いたい処理
    }
  }
})

// ウォッチャの解除
var unwatch = this.$watch('value', handler)
// valueの監視を解除
unwatch()

// 一度だけ動作するウォッチャ
new Vue({
  el: '#app',
  data: {
    edited: false,
    list: [
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
    ]
  },
  created: function() {
    var unwatch = this.$watch('list', function () {
      // listが編集されたことを記録する
      this.edited = true
      // 監視を解除
      unwatch()
    }, {
      deep: true
    })
  }
})

// 実行頻度の制御
var app = new Vue({
  el: '#app',
  data: {
    value: '初期値'
  },
  watch: {
    value: _.debounce(function (newVal) {
        // コストの高い処理
        console.log(newVal)
      },
      // valueの変化が終わるのを待つ時間をミリ秒で指定
      500)
  }
})

// 複数の値を監視する
this.$watch(function() {
  return [this.width, this.height]
}, function() {
  // widthまたはheightが変化したら処理
})

// 算出プロパティを監視すると同じことができる
computed: {
  watchedTarget: function() {
    return [this.width, this.height]
  }
},
watch:
  watchedTarget: function() {
  // ...
}

// 監視対象がオブジェクト型だった場合
watch: {
  list: function(newVal, oldVal) {
    console.log(newVal.length, oldVal.length)
    // => 監視対象がオブジェクト型の場合、古い値は参照、保持されるので結果は同じ
  }
}

// 監視対象をコピー or ディープコピーする
this.$watch(function() {
  return Object.assign([], this.list)
}, function(newVal, oldVal) {
  console.log(newVal.length, oldVal.length)
})

// 監視対象にプロパティを含める
this.$watch(function() {
  return { value: this.list, length: this.list.length }
}, function(newVal, oldVal) {
  console.log(newVal.length, oldVal.length)
})

// フォームを監視してAPIからデータを取得
var app = new Vue({
  el: '#app',
  data: {
    list: [],
    current: '',
    topics: [
      { value: 'Vue', name: 'Vue.js' },
      { value: 'jQuery', name: 'jQuery' }
    ]
  },
  watch: {
    current: function(value) {
      axios.get('https://api.github.com/search/repositories', {
        params: { q: 'topic:' + value }
      }).then(function(response) {
        this.list = response.data.items
      }.bind(this))
    }
  }
})
