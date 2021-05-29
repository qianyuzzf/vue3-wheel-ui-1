<template>
  <div class="theme2-wheel-draw">
    <button class="theme2-wheel-rectangle" v-if="!showOne || choose===0">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search1"/>
      </svg>
      <span>你好</span>
    </button>
    <button class="theme2-wheel-circle" v-if="!showOne || choose===1">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search1"/>
      </svg>
    </button>
    <button class="theme2-wheel-circle" v-if="!showOne || choose===2">
      <span>A</span>
    </button>
  </div>
</template>

<script lang="ts">
import '../../assets/svg.js';

export default {
  props: {
    choose: {
      type: Number,
      default: 0
    },
    showOne: {
      type: Boolean,
      default: false
    }
  }
};
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