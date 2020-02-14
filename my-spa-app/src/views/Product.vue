<template>
  <div class="product">
    <h1>商品情報</h1>
    <!-- <p>このページは ID.{{ $route.params.id }} の詳細を表示する</p> -->
    <p>このページは ID.{{ id }} の詳細を表示する</p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number
  }
}
</script>
