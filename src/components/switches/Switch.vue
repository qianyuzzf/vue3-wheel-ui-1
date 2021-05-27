<template>
  <div class="markdown-body">
    <h1>Switch 按钮</h1>
    <p>按钮用于开始一个即时操作。</p>
    <h2>何时使用</h2>
    <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
    <h2>组件注册</h2>
    <pre>import { Button } from 'ant-design-vue';
Vue.use(Button);</pre>
    <h2>示例</h2>
    <h3>常规用法</h3>
    <Switch1_demo/>
    <h3>支持 disabled</h3>
    <Switch2_demo/>
    <div class="placeholder">
      <p v-for="item in array" :key="item"></p>
    </div>
  </div>

</template>

<script lang="ts">
import Switch1_demo from './Switch1_demo.vue';
import Switch2_demo from './Switch2_demo.vue';

export default {
  components: {
    Switch1_demo,
    Switch2_demo,
  },
  setup() {
    const array = [...Array(20).keys()];
    return {array};
  }
};
</script>

<style lang="scss" scoped>
.markdown-body {
  > .placeholder {
    > p {
      height: 20px;
    }
  }
}
</style>
