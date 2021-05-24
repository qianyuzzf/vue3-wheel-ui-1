<template>
  <div class="theme2-wheel-draw">
    <button class="theme2-wheel-rectangle">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-vue"/>
      </svg>
      <span>你好</span>
    </button>
    <button class="theme2-wheel-circle">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-vue"/>
      </svg>
    </button>
    <button class="theme2-wheel-circle">
      <span>A</span>
    </button>
  </div>
</template>

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