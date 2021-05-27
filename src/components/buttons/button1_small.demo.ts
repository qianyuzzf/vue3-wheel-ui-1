export default function () {
  return `
<template>
  <div class="button-wheel-1">
    <Button1_1 size="small"/>
  </div>
</template>

<script lang="ts">
import Button1_1 from "./Button1_1.vue";

export default {
  components: {
    Button1_1,
  }
};
</script>
  `;
}