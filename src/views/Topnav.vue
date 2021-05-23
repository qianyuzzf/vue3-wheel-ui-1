<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-vue" />
      </svg>
    </div>
    <div class="texts">
      <div class="text1">
        <a href>text1</a>
      </div>
      <div class="text2">
        <a href>text2</a>
      </div>
      <div class="text3">
        <a href>text3</a>
      </div>
      <div class="text4">
        <a href>text4</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$width1: 1200px;
$color1: #ffaf00;
$color2: #002d55;
$font-color: #09ae8b;
$line-color: #64dfb2;
$font-size: 20px;

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
    overflow: hidden;
    > .topnav {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      width: 100%;
      height: 80px;
      border: 1px solid red;
      display: flex;
      justify-content: space-between;
      > .logo {
        border: 1px solid red;
        padding-left: 30px;
        > svg {
          height: 80px;
          width: 80px;
        }
      }
      > .texts {
        display: flex;
        border: 1px solid red;
        padding-right: 20px;
        > div {
          border: 1px solid red;
          font-size: $font-size;
          padding: 26.8px 30px;
        }
      }
      > .text1 {
        color: $font-color;
      }
    }
  }
}
</style>