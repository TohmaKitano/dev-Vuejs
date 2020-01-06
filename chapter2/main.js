var app = new Vue({
  el: '#app',
  data: {
    // オブジェクトデータ
    message: {
      value: 'Hello, Vue.js'
    },
    count: 0,
    // 配列データ
    list: ['apple', 'banana', 'strawberry'],
    num: 1,
    // isChild: true,
    // isActive: true,
    // textColor: 'red',
    // bgColor: 'lightgray',
    classObjext: {
      child: true,
      'is-active': true
    },
    styleObject: {
      color: 'red',
      backgroundColor: 'lightgray'
    },
    item: {
      id: 1,
      src: 'item1.jpg',
      alt: '商品1サムネイル',
      width: 200,
      height: 200
    },
    radius: 50
  },
  methods: {
    // increment: function() {
    //   // インスタンスのthisを参照
    //   this.count += 1
    // }
    // increment: () => {
    //   // アロー関数はインスタンスのthisを参照できない
    // }
    increment() {
      // インスタンスのthisを参照
      this.count += 1
    }
  }
  // methods: {
  //   increment() {
  //     var vm = this
  //     setTimeout(function() { vm.count++ }, 100)
  //     // setTimeout(function() { this.count++ }.bind(this), 100)
  //     // setTimeout(() => { this.count++ }, 100)
  //     // setTimeout(this.callback, 100)
  //   }
  // }
})
