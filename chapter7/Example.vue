<template>
  <div class="example">
    <span class="title">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'example',
  data() {
    return {
      text: 'example'
    }
  }
}
</script>

<style scoped>
span.title {
  color: #ffbb00;
}
</style>
