<template>
  <div class="theme1-wheel-type">
    <Button1 v-for="(c,index) in classNames"
             :key="index"
             v-bind="$attrs"
             :class="{[`theme1-wheel-${c}`]: c,[`theme1-wheel-${size}`]: size}"
             :button-name="buttonName">
    </Button1>
  </div>
</template>

<script lang="ts">
import Button1 from './Button1.vue';

export default {
  inheritAttrs: false,
  components: {
    Button1
  },
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    choose: {
      type: Number,
      default: -1
    },
    buttonName: {
      type: String,
      default: '你好'
    }
  },
  setup(props, context) {
    const classNames = ['white', 'blue', 'none', 'danger', 'dashed'];
    return {classNames};
  },
};
</script>