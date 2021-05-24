<template>
  <div class="main">
    <div class="aside">
      <h2>导航</h2>
      <div class="text1">
        <router-link to="/doc/introduce">介绍</router-link>
      </div>
      <div class="text2">
        <router-link to="/doc/install">安装</router-link>
      </div>
      <div class="text3">
        <router-link to="/doc/use">如何使用</router-link>
      </div>
      <h2>组件</h2>
      <div class="component1">
        <router-link to="/doc/button">Button 组件</router-link>
      </div>
      <div class="component2">component2</div>
      <div class="component3">component3</div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

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