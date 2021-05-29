<template>
  <div class="button-wheel-1 button-wheel-choose">
    <Button1_2 :choose="2" button-name="big" @click="chooseBig"/>
    <Button1_2 :choose="2" button-name="normal" @click="chooseNormal"/>
    <Button1_2 :choose="2" button-name="small" @click="chooseSmall"/>
  </div>
  <div class="button-wheel-1">
    <Button1_1 size="big" v-if="chooseResult===0"/>
    <Button1_1 size="normal" v-if="chooseResult===1"/>
    <Button1_1 size="small" v-if="chooseResult===2"/>
  </div>
  <div class="button-wheel-1">
    <Button1_2 :choose="1" size="small" button-name="展示代码" @click="toggleVisible1" v-if="showOrHide"/>
    <Button1_2 :choose="1" size="small" button-name="隐藏代码" @click="toggleVisible1" v-else/>
  </div>
  <div v-if="chooseResult===0 && visibleResult">
    <pre v-html="Prism.highlight(data1, Prism.languages.html, 'html')"/>
  </div>
  <div v-if="chooseResult===1 && visibleResult">
    <pre v-html="Prism.highlight(data2, Prism.languages.html, 'html')"/>
  </div>
  <div v-if="chooseResult===2 && visibleResult">
    <pre v-html="Prism.highlight(data3, Prism.languages.html, 'html')"/>
  </div>
</template>

<script lang="ts">
import Button1_2 from "./Button1_2.vue";
import Button1_1 from "./Button1_1.vue";
import {onMounted, ref, watchEffect} from "vue";
import button1_big from './button1_big.demo.ts';
import button1_normal from './button1_normal.demo.ts';
import button1_small from './button1_small.demo.ts';

export default {
  components: {
    Button1_1,
    Button1_2,
  },
  setup() {
    const chooseResult = ref(1);
    const showOrHide = ref(true);
    const visibleResult = ref(false);
    const Prism = (window as any).Prism;
    const data1 = button1_big().trim();
    const data2 = button1_normal().trim();
    const data3 = button1_small().trim();
    const chooseNumber = (number) => {
      chooseResult.value = number;
    };
    const chooseNormal = () => {
      chooseNumber(1);
    };
    const chooseBig = () => {
      chooseNumber(0);
    };
    const chooseSmall = () => {
      chooseNumber(2);
    };
    const toggleVisible1 = () => {
      visibleResult.value = !visibleResult.value;
      showOrHide.value = !showOrHide.value;
      xxx.value += 1;
    };
    const xxx = ref(1);
    onMounted(() => {
      const {clientWidth} = document.documentElement;
      const width = clientWidth - 60;
      watchEffect(() => {
        const yyy = xxx.value;
        const pre = document.querySelectorAll('pre');
        for (let i = 0; i < pre.length; i++) {
          pre[i].style.maxWidth = width + 'px';
        }
      }, {flush: 'post'});
    });
    return {
      chooseNormal,
      chooseBig,
      chooseSmall,
      chooseResult,
      data1,
      data2,
      data3,
      Prism,
      visibleResult,
      toggleVisible1,
      showOrHide
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/var.scss';

.markdown-body {
  > .button-wheel-1.button-wheel-choose {
    display: flex;
  }
}
</style>