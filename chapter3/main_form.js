var app = new Vue({
  el: '#app',
  data: {
    // 初期値をセット
    // message: 'Hello, World!',
    // val: true
    // val: []
    // val: ''
    preview: '',
    val: 50,
    price: 100
  },
  methods: {
    handleChange: function(event) {
      var file = event.target.files[0]
      console.log(file)
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file)
      }
    }
  }
})