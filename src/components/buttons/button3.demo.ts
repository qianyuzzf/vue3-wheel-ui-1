export default function () {
  return `
<template>
  <div class="button-wheel-1">
    <Button3/>
  </div>
</template>

<script lang="ts">
import Button3 from "./Button3.vue";

export default {
  components: {
    Button3,
  }
};
</script>
  `;
}