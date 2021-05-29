<template>
  <div class="markdown-body">
    <h1 id="buttonTop">Button 按钮</h1>
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
    <h3>禁用按钮</h3>
    <Button4_demo/>
    <div class="placeholder">
      <button>
        <a href="javascript:void(0)" @click="goAnchor('#buttonTop')">点击这里</a>
      </button>
      可以回到顶部
    </div>
  </div>
  <Footer/>
</template>

<script lang="ts">
import Button1 from './Button1.vue';
import Button2 from './Button2.vue';
import Button3 from './Button3.vue';
import Button4 from './Button4.vue';
import Button1_demo from './Button1_demo.vue';
import Button2_demo from "./Button2_demo.vue";
import Button3_demo from "./Button3_demo.vue";
import Button4_demo from "./Button4_demo.vue";
import Footer from '../../views/Footer.vue';


export default {
  components: {
    Button1,
    Button2,
    Button3,
    Button4,
    Button1_demo,
    Button2_demo,
    Button3_demo,
    Button4_demo,
    Footer
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
