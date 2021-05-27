export default function () {
  return `
<template>
  <div class="button-wheel-1">
    <Switch1 v-model:value="active"/>
  </div>
</template>

<script lang="ts">
import Switch1 from "./Switch1.vue";

export default {
  components: {
    Switch1
  }
};
</script>
  `;
}