var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    handleClick: function() {
      alert('クリックしたよ');
    }
    // handleClick() {
    //   alert('クリックしたよ');
    // }
  }
})
