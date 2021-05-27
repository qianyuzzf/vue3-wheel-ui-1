<template>
  <div class="markdown-body">
    <h1>Button 按钮</h1>
    <p>按钮用于开始一个即时操作。</p>
    <h2>何时使用</h2>
    <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
    <h2>组件注册</h2>
    <pre>import { Button } from 'ant-design-vue';
Vue.use(Button);</pre>
    <h2>示例</h2>
    <h3>不同大小按钮</h3>
    <Button1_demo/>
    <h3>带图案按钮</h3>
    <Button2_demo/>
    <h3>加载中按钮</h3>
    <Button3_demo/>
    <div class="button-wheel-1">
      <Button2/>
      <Button3/>
      <Button4/>
    </div>
  </div>

</template>

<script lang="ts">
import Button1 from './Button1.vue';
import Button2 from './Button2.vue';
import Button3 from './Button3.vue';
import Button4 from './Button4.vue';
import Button1_demo from './Button1_demo.vue';
import Button2_demo from "./Button2_demo.vue";
import Button3_demo from "./Button3_demo.vue";
import 'prismjs';
import 'prismjs/themes/prism.css';


export default {
  components: {
    Button1,
    Button2,
    Button3,
    Button4,
    Button1_demo,
    Button2_demo,
    Button3_demo,
  },
  setup() {
    const Prism = (window as any).Prism;
    return {Prism};
  }
};
</script>
