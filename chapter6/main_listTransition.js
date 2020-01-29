new Vue({
  el: '#app',
  data: {
    order: false,
    list: [
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
      { id: 3, name: 'いちご', price: 300 }
    ]
  },
  computed: {
    // orderの値でリストの順番を反転する
    sortedList: function() {
      // LodashのorderByメソッド
      return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
    }
  }
})
