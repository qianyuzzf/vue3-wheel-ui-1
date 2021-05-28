<template>
  <div class="button-wheel-1">
    <Button3/>
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
import Button1_2 from "./Button1_2.vue";
import Button3 from './Button3.vue';
import {onMounted, ref, watchEffect} from "vue";
import button3_ from './button3.demo.ts';

export default {
  components: {
    Button3,
    Button1_2
  },
  setup() {
    const visible1 = ref(false);
    const showOrHide = ref(true);
    const data1 = button3_().trim();
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
      showOrHide
    };
  }
};
</script>