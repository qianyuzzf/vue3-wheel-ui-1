export default function () {
  return `
<template>
  <div class="button-wheel-1">
    <Button2/>
  </div>
</template>

<script lang="ts">
import Button2 from "./Button2.vue";

export default {
  components: {
    Button2,
  }
};
</script>
  `;
}