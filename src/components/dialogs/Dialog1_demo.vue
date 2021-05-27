<template>
  <div class="button-wheel-1">
    <h3>可选择的按钮样式</h3>
    <Button1_1/>
    <h3>选择其中一个样式点击</h3>
    <Button1_2 :choose="0" @click="openDialog"/>
    <Dialog1 :ok="f1" :cancel="f2" :onClickOverlay="f3" v-model:visible="childVisible" :dialogText="dialogText"/>
  </div>
  <div class="button-wheel-1">
    <Button1_2 :choose="1" size="small" button-name="展示代码" @click="toggleVisible1" v-if="showOrHide"/>
    <Button1_2 :choose="1" size="small" button-name="隐藏代码" @click="toggleVisible1" v-else/>
  </div>
  <div v-if="visible1">
    <pre v-html="Prism.highlight(data1, Prism.languages.html, 'html')"/>
  </div>
</template>

<script lang="ts">
import Button1_1 from "../buttons/Button1_1.vue";
import Button1_2 from "../buttons/Button1_2.vue";
import Dialog1 from './Dialog1.vue';
import {ref} from "vue";
import dialog1_ from './dialog1.demo.ts';

export default {
  components: {
    Dialog1,
    Button1_1,
    Button1_2
  },
  setup() {
    const visible1 = ref(false);
    const showOrHide = ref(true);
    const data1 = dialog1_().trim();
    const childVisible = ref(false);
    const Prism = (window as any).Prism;

    const toggleVisible1 = () => {
      visible1.value = !visible1.value;
      showOrHide.value = !showOrHide.value;
    };
    const close = () => {
      childVisible.value = false;
    };
    const openDialog = () => {
      childVisible.value = !childVisible.value;
    };
    const f1 = () => {
      close();
    };
    const f2 = () => {
      close();
    };
    const f3 = () => {
      close();
    };
    const dialogText = new Object({title: '标题', content: ['内容一', '内容二', '内容三']});
    return {
      data1,
      Prism,
      visible1,
      toggleVisible1,
      showOrHide,
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