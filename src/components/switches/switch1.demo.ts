export default function () {
  return `
<template>
  <div class="button-wheel-1">
    <Switch1 v-model:value="active"/>
  </div>
</template>

<script lang="ts">
import { Switch1 } from 'vue3-wheel-ui-1'
import 'vue3-wheel-ui-1/dist/lib/wheel.css'
import { ref } from 'vue'

export default {
  components: {
    Switch1
  },
  setup() {
    const active = ref(false);
    return {active};
  }
};
</script>
  `;
}