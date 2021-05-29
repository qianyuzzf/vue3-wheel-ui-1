<template>
  <div class="theme2-wheel-draw">
    <button class="theme2-wheel-rectangle">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search1"/>
      </svg>
      <span>你好</span>
    </button>
    <button class="theme2-wheel-circle">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search1"/>
      </svg>
    </button>
    <button class="theme2-wheel-circle">
      <span>A</span>
    </button>
  </div>
</template>

<script lang="ts">
import '../../assets/svg.js';

export default {};
</script>

<style lang="scss">
.theme2-wheel-draw {
  > .theme2-wheel-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 7px;
  }
}
</style>