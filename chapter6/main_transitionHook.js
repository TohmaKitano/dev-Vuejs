// トランジションフック
new Vue({
  el: '#app',
  data: {
    show: false
  },
  methods: {
    enter: function(el, done) {
      console.log(el);
      // => <div class="v-enter v-enter-active">トランジションさせたい要素</div>
      console.log('enter');
      // 1秒後にenterを終了し、after-enterに遷移する
      setTimeout(done, 1000)
    },
    afterEnter: function() {
      console.log('afterEnter')
    }
  }
})

// トランジションフックのサンプル
new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    // Enter
    beforeEnter: function (el) {
      console.log('before-enter')
    },
    enter: function (el, done) {
      console.log('enter')
      setTimeout(done, 1000)
    },
    afterEnter: function (el) {
      console.log('after-enter')
    },
    enterCancelled: function (el) {
      console.log('enter-cancelled')
    },
    // Leave
    beforeLeave: function (el) {
      console.log('before-leave')
    },
    leave: function (el, done) {
      console.log('leave')
      setTimeout(done, 1000)
    },
    afterLeave: function (el) {
      console.log('after-leave')
    },
    // v-showを使うときだけ leaveCancelledは有効
    leaveCancelled: function (el) {
      console.log('leave-cancelled')
    }
  }
})