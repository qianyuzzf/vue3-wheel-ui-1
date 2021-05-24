<template>
  <Switch1 v-model:value="active"/>
  <Switch1 v-model:value="active2" :disabled="disabled"/>
</template>

<script lang="ts">
import {ref} from "vue";
import Switch1 from './Switch1.vue';

export default {
  components: {
    Switch1
  },
  setup() {
    const active = ref(false);
    const active2 = ref(false);
    const disabled = ref(true);
    return {active, active2, disabled};
  }
};
</script>
