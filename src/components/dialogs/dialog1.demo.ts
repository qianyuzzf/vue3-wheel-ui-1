export default function () {
  return `
<template>
  <div class="button-wheel-1">
    <Button1_2 :choose="0" @click="openDialog"/>
    <Dialog1 :ok="f1" :cancel="f2" :onClickOverlay="f3" v-model:visible="childVisible" :dialogText="dialogText"/>
  </div>
</template>

<script lang="ts">
import { Dialog1 } from 'vue3-wheel-ui-1';
import { Button1_2 } from 'vue3-wheel-ui-1';
import 'vue3-wheel-ui-1/dist/lib/wheel.css';
import {ref} from "vue";

export default {
  components: {
    Dialog1,
    Button1_2
  },
  setup() {
    const childVisible = ref(false);
    const dialogText = new Object({title: '标题', content: ['内容一', '内容二', '内容三']});
    const close = () => {
      childVisible.value = false;
    };
    const openDialog = () => {
      // ...
      childVisible.value = !childVisible.value;
    };
    const f1 = () => {
      // ...
      close();
    };
    const f2 = () => {
      // ...
      close();
    };
    const f3 = () => {
      // ...
      close();
    };
    return {
      openDialog,
      childVisible,
      f1,
      f2,
      f3,
      dialogText
    };
  }
};
</script>
  `;
}