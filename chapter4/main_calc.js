var app = new Vue({
  el: '#app',
  data: {
    width: 800//,
    //height: 600
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
    halfWidth: {
      // ゲッター
      get: function() { return this.width / 2 },
      // セッター
      set: function(val) { this.width = val * 2 }
    }
  }
})