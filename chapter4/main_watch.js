// ウォッチャの解除
var unwatch = this.$watch('value', handler)
// valueの監視を解除
unwatch()

// 一度だけ動作するウォッチャ
var unwatch = this.$watch('list', function() {
  // listの変更を記録
  this.edited = true
  unwatch()
}, {
  deep: true
})

// 実行頻度の制御
