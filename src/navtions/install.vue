<template>
  <div class="markdown-body">
    <h1>安装</h1>
    <p>你可以使用 yarn 或者 npm 来进行安装。</p>
    <h2>yarn</h2>
    <pre>yarn add vue3-wheel-ui-1@0.1.0;</pre>
    <h2>npm</h2>
    <pre>npm install vue3-wheel-ui-1@0.1.0;</pre>
    <h4>下一节
      <router-link to="/doc/to_start">开始使用</router-link>
    </h4>
  </div>
</template>

<script lang="ts">
import {onMounted} from "vue";

export default {
  setup() {
    onMounted(() => {
      const {clientWidth} = document.documentElement;
      const width = clientWidth - 60;
      const pre = document.querySelectorAll('pre');
      for (let i = 0; i < pre.length; i++) {
        pre[i].style.maxWidth = width + 'px';
      }
    });
  }
};
</script>
