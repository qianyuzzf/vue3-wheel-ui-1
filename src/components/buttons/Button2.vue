<template>
  <div class="theme-wheel-draw">
    <button class="rectangle">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-vue"/>
      </svg>
      <span>你好</span>
    </button>
    <button class="circle">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-vue"/>
      </svg>
    </button>
    <button class="circle">
      <span>A</span>
    </button>
  </div>
</template>

<style lang="scss">
.theme-wheel-draw {

  > .circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 7px;
  }
}
</style>