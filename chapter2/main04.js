var app = new Vue({
  el: '#app',
  data: {
    // 空配列をセットしておく
    list: []
  },
  // ローカルで動かす場合は、ローカルサーバーを立てる
  created: function() {
    axios.get('list.json').then(function(response) {
      this.list = response.data
      console.log(response.data)
    }.bind(this)).catch(function(e) {
      console.log(e)
    })
  }
})
