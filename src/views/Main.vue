<template>
  <div class="main">
    <div class="aside">
      <h2>导航</h2>
      <div class="text1">介绍</div>
      <div class="text2">安装</div>
      <div class="text3">如何使用</div>
      <h2>组件</h2>
      <div class="component1">component1</div>
      <div class="component2">component2</div>
      <div class="component3">component3</div>
    </div>
    <div class="content">content</div>
  </div>
</template>

<style lang="scss" scoped>
.body > .page > .main {
  display: flex;
  > .aside {
    width: 200px;
    > h2 {
      padding: 20px 20px;
    }
    > div {
      padding: 10px 20px;
    }
  }
  > .content {
    width: 1000px;
    padding: 20px 30px;
  }
}
</style>