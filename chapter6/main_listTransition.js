// サンプル
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

// 移動トランジションのサンプル
new Vue({
  el: '#app',
  data: {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  methods: {
    doShuffle: function () {
      this.list = _.shuffle(this.list)
    },
    doAdd: function() {
      var newNumber = Math.max.apply(null, this.list) + 1
      var index = Math.floor(Math.random() * (this.list.length + 1))
      this.list.splice(index, 0, newNumber)
    },
    doRemove: function (index) {
      this.list.splice(index, 1)
    }
  }
})

// SVGのトランジション
Vue.component('my-circle', {
  template: '<circle cx="80" cy="75" r="50" v-bind:fill="fill" />',
  props: {
    fill: String
  }
})
new Vue({
  el: '#app',
  data: {
    toggle: false
  },
  computed: {
    fill: function() {
      return this.toggle ? 'lightpink' : 'skyblue'
    }
  }
})