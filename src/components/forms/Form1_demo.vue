<template>
  <div class="button-wheel-1">
    <Form1 :formText="formText"/>
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
import Form1 from './Form1.vue';
import {ref} from "vue";
import Form1_ from './Form1.demo.ts';

export default {
  components: {
    Form1,
    Button1_2
  },
  setup() {
    const visible1 = ref(false);
    const showOrHide = ref(true);
    const data1 = Form1_().trim();
    const Prism = (window as any).Prism;

    const toggleVisible1 = () => {
      visible1.value = !visible1.value;
      showOrHide.value = !showOrHide.value;
    };
    const formText = new Object({
      name: 'Activity name',
      password: 'Activity password',
      time: ['Activity time', '2021-01-01'],
      choose: 'Instant delivery',
      checkbox: ['Activity type', 'Online', 'Promotion', 'Offline'],
      radio: ['Resources', 'Sponsor', 'Venue'],
      textarea: 'Activity form',
      submit: ['submit', 'Submit', 'reset', 'Reset']
    });
    return {
      data1,
      Prism,
      visible1,
      toggleVisible1,
      showOrHide,
      formText
    };
  }
};
</script>