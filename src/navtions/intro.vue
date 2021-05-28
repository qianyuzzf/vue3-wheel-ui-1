<template>
  <div class="markdown-body">
    <h1>介绍</h1>
    <p>Wheel UI 是一款基于 Vue3 和 TypeScript 的 UI 组件库。</p>
    <p>这款组件库其实是我为了学习 Vue3 组件和其他相关内容而写的，全程亲手编写，尽量不采用第三方库，包括你现在看到的这个官网也几乎都是我自己写的。</p>
    <p>所以强烈不建议你将此 UI 库用于生产环境。但如果你是抱着交流和看源代码的目的来的，那么这个库还是值得一看的。</p>
    <p>源代码放在了 github.com/qianyu/xxxxxxx，含有详细的历史提交，你可以按提交的顺序逐个查看。<br/>你也可以直接查看每个组件的源代码和示例。</p>
    <p>如果你想使用，请点击左侧安装或者下面导航直接进入</p>
    <h4>下一节
      <router-link to="/doc/install">安装</router-link>
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
