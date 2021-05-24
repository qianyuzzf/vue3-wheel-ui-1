<template>
  <div class="markdown-body">
    <h1>Button 按钮</h1>
    <p>按钮用于开始一个即时操作。</p>
    <h2>何时使用</h2>
    <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
    <h2>组件注册</h2>
    <pre>import { Button } from 'ant-design-vue';
Vue.use(Button);</pre>
  </div>
  <div class="theme-wheel-sizes">
    <button class="big">
      <span>大按钮</span>
    </button>
    <button class="normal">
      <span>中按钮</span>
    </button>
    <button class="small">
      <span>小按钮</span>
    </button>
  </div>
</template>

<style lang="scss">
@import '../styles/var.scss';

.theme-wheel-sizes {
  padding: 20px 0;
  > .big {
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    padding: 0.5em 1em;
    border-radius: 4px;
    font-size: 1.2em;
    margin: 20px;
  }
}
</style>