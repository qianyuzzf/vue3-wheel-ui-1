<template>
  <div class="button-wheel-1">
    <Switch1 v-model:value="active"/>
  </div>
  <div class="placeholderDiv">
    <p></p>
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
import Button1_2 from "../buttons/Button1_2.vue";
import Switch1 from './Switch1.vue';
import {onMounted, ref, watchEffect} from "vue";
import switch1_ from './switch1.demo.ts';

export default {
  components: {
    Button1_2,
    Switch1
  },
  setup() {
    const active = ref(false);
    const visible1 = ref(false);
    const showOrHide = ref(true);
    const data1 = switch1_().trim();
    const Prism = (window as any).Prism;

    const toggleVisible1 = () => {
      visible1.value = !visible1.value;
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
      data1,
      Prism,
      visible1,
      toggleVisible1,
      active,
      showOrHide
    };
  }
};
</script>

<style lang="scss" scoped>
> .placeholderDiv {
  > p {
    height: 30px;
  }
}
</style>