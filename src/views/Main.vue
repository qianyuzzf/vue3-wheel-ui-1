<template>
  <div class="main">
    <div class="expand" :class="{showAside:active}" @click="open">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-kuozhan" />
      </svg>
    </div>
    <div class="overlay" v-if="active" @click="close"></div>
    <div class="aside" :class="{showAside:active}" @click="close">
      <h2>导航</h2>
      <router-link to="/doc/intro">介绍</router-link>
      <router-link to="/doc/install">安装</router-link>
      <router-link to="/doc/to_start">开始使用</router-link>
      <h2>组件</h2>
      <router-link to="/doc/button">Button 组件</router-link>
      <router-link to="/doc/switch">Switch 组件</router-link>
      <router-link to="/doc/dialog">Dialog 组件</router-link>
      <router-link to="/doc/tabs">Tabs 组件</router-link>
      <router-link to="/doc/form">Form 组件</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(false)
    const close = () => {
      active.value = false
    }
    const open = () => {
      active.value = !active.value
    }
    return { active, close, open }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/var.scss';

.body > .page > .main {
  display: flex;

  > .overlay {
    display: none;
    @media (max-width: 600px) {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $dialog-background-color1;
      z-index: 300;
    }
  }

  > .expand {
    display: none;
    @media (max-width: 600px) {
      position: fixed;
      display: flex;
      align-items: center;
      left: 0;
      top: 90px;
      z-index: 500;
      background: white;
      width: 40px;
      height: 40px;
      box-shadow: 2px 0 8px rgb(0 0 0 / 15%);
      border-radius: 0 4px 4px 0;
      transition: all 500ms;
      > svg {
        margin-left: 12px;
        width: 16px;
        height: 16px;
      }
      &.showAside {
        left: 198px;
        box-shadow: none;
      }
    }
  }

  > .aside {
    width: 200px;
    left: 0;
    @media (max-width: 600px) {
      height: 100vh;
      padding-top: 30px;
      padding-bottom: 20px;
      position: fixed;
      z-index: 400;
      left: -200px;
      top: 0;
      background: white;
      transition: all 500ms;
      &.showAside {
        display: block;
        left: 0;
      }
    }

    > h2 {
      padding: 20px 20px;
    }

    > a {
      display: block;
      padding: 10px 20px;
    }

    .router-link-active {
      background: #e6f7ff;
      color: #189dff;
    }
  }

  > .content {
    width: 100%;
    padding: 20px 30px;
  }
}
</style>