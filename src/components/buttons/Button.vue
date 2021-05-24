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
  <div class="button-wheel-1">
    <Button1 size="normal"/>
    <Button1 size="big"/>
    <Button1 size="small"/>
    <Button2/>
    <Button3/>
    <Button4/>
  </div>
</template>
<script lang="ts">
import Button1 from './Button1.vue';
import Button2 from './Button2.vue';
import Button3 from './Button3.vue';
import Button4 from './Button4.vue';

export default {
  components: {
    Button1, Button2, Button3, Button4
  },
  setup() {

  }
};
</script>

<style lang="scss">
@import '../../styles/var';
</style>