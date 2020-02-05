<template>
  <div class="edit-form">
    <!-- <input type="text" :value="message" @input="doUpdate"> -->
    <!-- modelを使って一つの算出プロパティにまとめる -->
    <input type="text" v-model="message">
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  // v-modelを使って一つの算出プロパティにまとめる
  computed: {
    message: {
      get() { return this.$store.getters.message },
      set(value) { this.$store.dispatch('doUpdate', value) }
    }
  },
  // // inputイベントとディスパッチを同期
  // methods: {
  //   doUpdate(event) {
  //     this.$store.dispatch('doUpdate', event.target.value)
  //   }
  // }
}
</script>
