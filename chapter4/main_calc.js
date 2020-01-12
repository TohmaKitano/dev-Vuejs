var app = new Vue({
  el: '#app',
  data: {
    // width: 800,
    // height: 600
    order: false,
    budget: 300,
    limit: 2,
    list: [
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'バナナ', price: 200 },
      { id: 3, name: 'いちご', price: 400 },
      { id: 4, name: 'オレンジ', price: 300 },
      { id: 5, name: 'メロン', price: 500 }
    ]
  },
  computed: {
    // halfWidth: function() {
    //   return this.width / 2
    // },
    // halfHeight: function() {
    //   return this.height / 2
    // },
    // halfPoint: function() {
    //   return {
    //     x: this.halfWidth,
    //     y: this.halfHeight
    //   }
    // }
    // halfWidth: {
    //   // ゲッター
    //   get: function() { return this.width / 2 },
    //   // セッター
    //   set: function(val) { this.width = val * 2 }
    // }
    // computedData: function() { return Math.random() }
    matched: function() {
      return this.list.filter(function(el) {
        return el.price <= this.budget
      }, this)
    },
    sorted: function() {
      return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
    },
    limited: function() {
      // return this.matched.slice(0, this.limit)
      return this.sorted.slice(0, this.limit)
    }
  }//,
  // methods: {
  //   methodsData: function() { return Math.random() }
  // }
})