export default function () {
  return `
<template>
  <div class="button-wheel-1">
    <Button4/>
  </div>
</template>

<script lang="ts">
import Button4 from "./Button4.vue";

export default {
  components: {
    Button4,
  }
};
</script>
  `;
}