<template>
  <div class="button-wheel-1">
    <Tabs1 :tabsText="tabsText"/>
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
import Tabs1 from './Tabs1.vue';
import {ref} from "vue";
import tabs_ from './tabs1.demo.ts';

export default {
  components: {
    Tabs1,
    Button1_2
  },
  setup() {
    const visible1 = ref(false);
    const showOrHide = ref(true);
    const data1 = tabs_().trim();
    const Prism = (window as any).Prism;

    const toggleVisible1 = () => {
      visible1.value = !visible1.value;
      showOrHide.value = !showOrHide.value;
    };
    const tabsText = new Object({title: ['导航一', '导航二'], content: ['内容一', '内容二']});
    return {
      data1,
      Prism,
      visible1,
      toggleVisible1,
      showOrHide,
      tabsText
    };
  }
};
</script>