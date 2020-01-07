var app = new Vue({
  el: "#app",
  data: {
    // 初期値
    name: 'キマイラ',
    list: [
      { id:1, name: 'スライム', hp: 100 },
      { id:2, name: 'ゴブリン', hp: 200 },
      { id:3, name: 'ドラゴン', hp: 500 }
    ],
    list: [
      'スライム', 'ゴブリン', 'ドラゴン'
    ],
    text: 'Hello'
  },
  methods: {
    doAdd: function() {
      // リスト内で一番大きいIDを取得する
      var max = this.list.reduce(function(a, b) {
        return a > b.id ? a : b.id
      }, 0)
      // リストに追加
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500
      })
    },
    doRemove: function(index) {
      // インデックスの位置から要素を1個削除
      this.list.splice(index, 1)
    },
    doAttack: function(index) {
      this.list[index].hp -= 10
    }
  },
  created: function() {
    this.list.forEach(function(item) {
      this.$set(item, 'active', false)
    }, this)
  }
})