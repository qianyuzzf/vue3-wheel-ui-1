<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ui"/>
      </svg>
    </div>
    <div class="texts">
      <div class="text1">
        <a href="https://vue3js.cn/docs/zh/" target="_blank">Vue3 中文文档</a>
      </div>
      <div class="text2">
        <a href="https://gitee.com/" target="_blank">Gitee</a>
      </div>
      <div class="text3">
        <a href="https://github.com/" target="_blank">GitHub</a>
      </div>
      <div class="text4">
        <router-link to="/">回到首页</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/var.scss';

.topnav {
  background: white;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 200;

  > .logo {
    padding-left: 30px;

    > svg {
      margin-top: 20px;
      height: 40px;
      width: 40px;
    }
  }

  > .texts {
    display: flex;
    padding-right: 20px;

    > div {
      font-size: $font-size1;
      padding: 26.8px 30px;
      color: #595959;
    }
  }

  > .text1 {
    color: $font-color1;
  }
}
</style>