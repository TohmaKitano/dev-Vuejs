var app = new Vue({
  el: '#app',
  // mounted: function() {
  //   // console.log(this.$el)
  //   console.log(this.$refs.hello)
  // }
  data: {
    show: true
  },
  methods: {
    handClick: function() {
      var count = this.$refs.count
      if (count) {
        // parseInt 文字列型を数値型に変換する
        count.innerText = parseInt(count.innerText, 10) + 1
      }
    }
  }
})
