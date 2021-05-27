<template>
  <div class="markdown-body">
    <h1>Dialog 按钮</h1>
    <p>按钮用于开始一个即时操作。</p>
    <h2>何时使用</h2>
    <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
    <h2>组件注册</h2>
    <pre>import { Button } from 'ant-design-vue';
Vue.use(Button);</pre>
    <h2>示例</h2>
    <Dialog1_demo/>
    <div class="placeholder">
      <p v-for="item in array" :key="item"></p>
    </div>
  </div>
</template>

<script lang="ts">
import Dialog1_demo from './Dialog1_demo.vue';

export default {
  components: {
    Dialog1_demo
  },
  setup() {
    const array = [...Array(20).keys()];
    return {array};
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/var.scss";

.markdown-body {
  > .placeholder {
    > p {
      height: 20px;
    }
  }
}
</style>