<template>
  <div>
    <div class="tabs-wheel-header">
      <div class="tabs-wheel-nav1" :class="{'tabs-wheel-active':active}" @click="toggle1">导航一</div>
      <div class="tabs-wheel-nav2" :class="{'tabs-wheel-active':!active}" @click="toggle2">导航二</div>
      <div class="tabs-wheel-line" ref="indicator"></div>
    </div>

    <div class="tabs-wheel-main">
      <div class="tabs-wheel-content1" v-if="active">内容一</div>
      <div class="tabs-wheel-content2" v-if="!active">内容二</div>
    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, onUpdated, ref} from "vue";

export default {
  setup() {
    const active = ref(true);
    const indicator = ref<HTMLDivElement>(null);
    const changeLineSize = () => {
      const header = document.querySelector('.tabs-wheel-header');
      const nav = document.querySelector('.tabs-wheel-active');
      const {left: left1} = header.getBoundingClientRect();
      const {left: left2} = nav.getBoundingClientRect();
      const left = left2 - left1;
      const {width} = nav.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      indicator.value.style.left = left + 'px';
    };
    onMounted(() => {
      changeLineSize();
    });
    onUpdated(() => {
      changeLineSize();
    });
    const toggle1 = () => {
      active.value = true;
    };
    const toggle2 = () => {
      active.value = false;
    };
    return {toggle1, toggle2, active, indicator};
  }
};
</script>

<style lang="scss">
@import "../../styles/var.scss";

.tabs-wheel-header {
  display: flex;
  position: relative;
  border-bottom: 2px solid $tabs-border-bottom-color;

  > .tabs-wheel-nav1,
  > .tabs-wheel-nav2 {
    font-size: 1.2em;
    margin: 8px 10px;
    cursor: pointer;
  }

  > .tabs-wheel-active {
    color: $tabs-line-color;
  }

  > .tabs-wheel-line {
    position: absolute;
    bottom: -2px;
    height: 3px;
    background: $tabs-line-color;
    border-radius: 1px;
    transition: all 250ms;
  }
}

.tabs-wheel-main {
  margin-top: 20px;

  > div {
    padding: 4px 10px;
  }
}
</style>