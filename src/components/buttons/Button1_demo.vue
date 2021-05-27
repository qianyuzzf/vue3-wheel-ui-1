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
    <Button1_2 :choose="1" size="small" button-name="展示代码" @click="toggleVisible1"/>
  </div>
  <div v-if="visible1 && visibleResult">
    <pre v-html="Prism.highlight(data1, Prism.languages.html, 'html')"/>
  </div>
  <div v-if="visible2 && visibleResult">
    <pre v-html="Prism.highlight(data2, Prism.languages.html, 'html')"/>
  </div>
  <div v-if="visible3 && visibleResult">
    <pre v-html="Prism.highlight(data3, Prism.languages.html, 'html')"/>
  </div>
</template>

<script lang="ts">
import Button1_2 from "./Button1_2.vue";
import Button1_1 from "./Button1_1.vue";
import {ref} from "vue";
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
    const visible1 = ref(false);
    const visible2 = ref(false);
    const visible3 = ref(false);
    const array = [visible1, visible2, visible3];
    const visibleResult = ref(false);
    const Prism = (window as any).Prism;
    const data1 = button1_big().trim();
    const data2 = button1_normal().trim();
    const data3 = button1_small().trim();
    const chooseNormal = () => {
      chooseResult.value = 1;
      visibleResult.value = false;
    };
    const chooseBig = () => {
      chooseResult.value = 0;
      visibleResult.value = false;
    };
    const chooseSmall = () => {
      chooseResult.value = 2;
      visibleResult.value = false;
    };
    const toggleVisible1 = () => {
      for (let i = 0; i < array.length; i++) {
        if (i === chooseResult.value) {
          array[i].value = !array[i].value;
        } else {
          array[i].value = false;
        }
        visibleResult.value = true;
      }
    };
    return {
      chooseNormal,
      chooseBig,
      chooseSmall,
      chooseResult,
      data1,
      data2,
      data3,
      Prism,
      visible1,
      visible2,
      visible3,
      visibleResult,
      toggleVisible1
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/var';

.markdown-body {
  > .button-wheel-1.button-wheel-choose {
    display: flex;
  }
}
</style>