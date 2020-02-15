<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/product">商品情報</router-link>
    </nav>
    <transition name="view">
      <router-view />
    </transition>
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

.view-enter-active, .view-leave-active {
  transition: opacity 0.5s;
}
.view-leave-active {
  position: absolute;
}
.view-enter, .view-leave-to {
  opacity: 0;
}
</style>
