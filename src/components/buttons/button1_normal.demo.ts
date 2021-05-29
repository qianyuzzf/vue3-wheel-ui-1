export default function () {
  return `
<template>
  <div class="button-wheel-1">
    <Button1_1 size="normal"/>
  </div>
</template>

<script lang="ts">
import { Button1_1 } from 'vue3-wheel-ui-1'
import 'vue3-wheel-ui-1/dist/lib/wheel.css'

export default {
  components: {
    Button1_1,
  }
};
</script>
  `;
}