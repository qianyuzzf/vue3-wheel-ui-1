<template>
  <div class="theme2-wheel-draw">
    <button class="theme2-wheel-rectangle" v-if="!showOne || choose===0">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search1"/>
      </svg>
      <span>{{ buttonName1 }}</span>
    </button>
    <button class="theme2-wheel-circle" v-if="!showOne || choose===1">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search1"/>
      </svg>
    </button>
    <button class="theme2-wheel-circle" v-if="!showOne || choose===2">
      <span>{{ buttonName2 }}</span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    choose: {
      type: Number,
      default: 0
    },
    showOne: {
      type: Boolean,
      default: false
    },
    buttonName1: {
      type: String,
      default: '你好'
    },
    buttonName2: {
      type: String,
      default: 'A'
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