var app = new Vue({
  el: '#app',
  data: {
    list: [
      // リスト内のオブジェクトはitemプロパティとして指定
      { id:1, name: 'スライム', hp: 100 },
      { id:2, name: 'ゴブリン', hp: 200 },
      { id:3, name: 'ドラゴン', hp: 500 }
    ]
  }
})
