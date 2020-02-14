<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/product">商品情報</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
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
nav {
  display: flex;
  align-items: center;
  background: #222;
}
nav a {
  display: block;
  padding: 0.5em;
  color: #eee;
  line-height: 1em;
  text-decoration: none;
}
/* アクティブなリンク */
.router-link-active {
  background: palevioletred;
}
/* .router-link-exact-active {
  background: palevioletred;
} */
</style>
