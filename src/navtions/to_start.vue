<template>
  <div class="markdown-body">
    <h1>开始使用</h1>
    <p>假设你已经安装了此组件。<br/>如果你没有安装，请点击
      <router-link to="/doc/install">安装</router-link>
      转到安装页面
    </p>
    <h2>然后在你的代码中可以使用如下代码引入组件</h2>
    <pre>import {xxxxxx} from "vue3-wheel-ui-1";
import "vue3-wheel-ui-1/dist/lib/wheel.css"</pre>
    <h2>单文件组件代码示例</h2>
    <pre v-html="Prism.highlight(data, Prism.languages.html, 'html')"/>
  </div>
</template>

<script lang="ts">
import button1_normal from '../components/buttons/button1_normal.demo.ts';
import {onMounted} from "vue";

export default {
  setup() {
    const Prism = (window as any).Prism;
    const data = button1_normal().trim();
    onMounted(() => {
      const {clientWidth} = document.documentElement;
      const width = clientWidth - 60;
      const pre = document.querySelectorAll('pre');
      for (let i = 0; i < pre.length; i++) {
        pre[i].style.maxWidth = width + 'px';
      }
    });
    return {data, Prism};
  }
};
</script>
