<template>
  <div class="main">
    <div class="aside">
      <h2>导航</h2>
      <router-link to="/doc/introduce">介绍</router-link>
      <router-link to="/doc/install">安装</router-link>
      <router-link to="/doc/use">如何使用</router-link>
      <h2>组件</h2>
      <router-link to="/doc/button">Button 组件</router-link>
      <router-link to="/doc/switch">Switch 组件</router-link>
      <router-link to="/doc/dialog">Dialog 组件</router-link>
      <router-link to="/doc/tabs">Tabs 组件</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.body > .page > .main {
  display: flex;

  > .aside {
    width: 200px;

    > h2 {
      padding: 20px 20px;
    }

    > a {
      display: block;
      padding: 10px 20px;
    }
  }

  > .content {
    width: 1000px;
    padding: 20px 30px;
  }
}
</style>