<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->

    <!-- <h3>引数なし</h3>
    <ol>
      <li>{{ count }}</li>
      <li>{{ max }}</li>
    </ol>
    <h3>引数付き</h3>
    <ol>
      <li>{{ itemA }}</li>
      <li>{{ itemB(1) }}</li>
      <li>{{ nameA }}</li>
      <li>{{ nameB(1) }}</li>
    </ol> -->

    <h1>{{ message }}</h1>
    <EditForm/>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import EditForm from '@/components/EditForm'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    EditForm
  },
  // ローカルのmessageとストアのmessageを同期
  computed: {
    message() {
      return this.$store.getters.message
    }
  }
  // created() {
  //   console.log(this.$store.state.count)
  //   this.$store.commit('increment')
  // }
}

// export default {
//   computed: {
//     // 引数なしゲッター
//     count() { return this.$store.getters.count },
//     max()   { return this.$store.getters.max },
//     // 引数付きゲッター
//     itemA() { return this.$store.getters.item(1) },
//     itemB() { return this.$store.getters.item },
//     nameA() { return this.$store.getters.name(1) },
//     nameB() { return this.$store.getters.name }
//   }
// }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
