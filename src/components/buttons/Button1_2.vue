<template>
  <div class="theme1-wheel-type">
    <Button1 v-bind="$attrs"
             :class="{[`theme1-wheel-${index}`]: choose !== -1, [`theme1-wheel-${size}`]: size}"
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
    let index;
    const classNames = ['white', 'blue', 'none', 'danger', 'dashed'];
    if (props.choose !== -1) {
      index = classNames[props.choose];
    }
    return {index};
  },
};
</script>
