<template>
  <div class="body">
    <div class="page">
      <Topnav />
      <Main />
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from './Topnav.vue'
import Main from './Main.vue'

export default {
  components: {
    Topnav,
    Main
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/var.scss';

img {
  width: 100%;
}

.body {
  display: flex;
  justify-content: center;
  > .page {
    width: $width1;
    min-height: 800px;
    position: relative;
  }
}
</style>