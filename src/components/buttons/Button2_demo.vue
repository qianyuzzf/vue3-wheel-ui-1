<template>
  <div class="button-wheel-1">
    <Button2/>
  </div>
  <div class="button-wheel-1">
    <Button1_2 :choose="1" size="small" button-name="展示代码" @click="toggleVisible1"/>
  </div>
  <div v-if="visible1">
    <pre v-html="Prism.highlight(data1, Prism.languages.html, 'html')"/>
  </div>
</template>

<script lang="ts">
import Button1_2 from "./Button1_2.vue";
import Button2 from './Button2.vue';
import {ref} from "vue";
import button2 from './button2.demo.ts';

export default {
  components: {
    Button2,
    Button1_2
  },
  setup() {
    const visible1 = ref(false);
    const data1 = button2().trim();
    const Prism = (window as any).Prism;

    const toggleVisible1 = () => {
      visible1.value = !visible1.value;
    };
    return {
      data1,
      Prism,
      visible1,
      toggleVisible1
    };
  }
};
</script>