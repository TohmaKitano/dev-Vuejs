var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    // handleClick: function() {
    //   alert('クリックしたよ');
    // }
    // handleClick() {
    //   alert('クリックしたよ');
    // }
    // handleInput: function(event) {
    //   // フック処理
    //   this.message = event.target.value
    // }
    handler: function(comment) {
      console.log(comment)
    }
  }
})
