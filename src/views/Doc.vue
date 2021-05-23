<template>
  <div class="body">
    <div class="page">
      <Topnav />
      <div class="aside">aside</div>
      <div class="main">main</div>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from './Topnav.vue'
export default {
  components: {
    Topnav
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
    border: 1px solid red;
    width: $width1;
    min-height: 800px;
    position: relative;
    > .aside {
      border: 1px solid red;
    }
  }
}
</style>