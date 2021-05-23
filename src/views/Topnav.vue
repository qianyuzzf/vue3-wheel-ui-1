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
@import '../styles/var.scss';
.body > .page > .topnav {
  background: white;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  > .logo {
    padding-left: 30px;
    > svg {
      height: 80px;
      width: 80px;
    }
  }
  > .texts {
    display: flex;
    padding-right: 20px;
    > div {
      font-size: $font-size1;
      padding: 26.8px 30px;
    }
  }
  > .text1 {
    color: $font-color1;
  }
}
</style>