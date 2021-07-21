<template>
  <div class="markdown-body">
    <h1 id="formTop">Form 表单</h1>
    <p>具有数据收集、重置和提交功能的表单，包含复选框、单选框、输入框等元素。</p>
    <h2>何时使用</h2>
    <p>用于创建一个实体或收集信息。</p>
    <h2>组件注册</h2>
    <pre>import {xxxxxx} from "vue3-wheel-ui-1";
import "vue3-wheel-ui-1/dist/lib/wheel.css";</pre>
    <h2>示例</h2>
    <Form1_demo/>
    <div class="placeholder">
      <button>
        <a href="javascript:void(0)" @click="goAnchor('#formTop')">点击这里</a>
      </button>
      可以回到顶部
    </div>
  </div>
</template>

<script lang="ts">
import Form1_demo from './Form1_demo.vue';

export default {
  components: {
    Form1_demo
  },
  setup() {
    const goAnchor = (id) => {
      const anchor = document.querySelector(id);
      // chrome
      if (document.body.scrollTop) {
        document.body.scrollTop = anchor.offsetTop - 500;
      }
      // firefox
      if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = anchor.offsetTop - 500;
      }
    };
    return {goAnchor};
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/var.scss";

.markdown-body {
  > .placeholder {
    margin: 120px 0 0 0;
    color: rgba(255, 0, 0, 0.9);
    font-size: 20px;
    padding: 0 0 10px 0;

    > button {
      background: white;
      color: $button-color1;
      padding: 0.3em 0.8em;
      border-radius: $button-border-radius;
      font-size: $button-normal-font-size;
      cursor: pointer;
      border-color: transparent;
      box-shadow: none;

      &:hover, &:focus {
        color: $button-background-color1;
        background: #f2f2f2;
        animation: shadow2 500ms;
        @keyframes shadow2 {
          0% {
            box-shadow: none;
          }
          50% {
            box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
          }
          100% {
            box-shadow: none;
          }
        }
      }

      &:focus {
        outline: none;
      }

      > a {
        display: block;
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>
