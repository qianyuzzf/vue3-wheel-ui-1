export default function () {
  return `
<template>
  <div class="button-wheel-1">
    <Button1_1 size="small"/>
<!--如果使用单个按钮，可以使用 Button1_2 加如下参数选择-->
<!--<Button1_2 :choose="1" size="small" button-name="你好"/>-->    
  </div>
</template>

<script lang="ts">
import { Button1_1 } from 'vue3-wheel-ui-1'
// import { Button1_2 } from 'vue3-wheel-ui-1'
import 'vue3-wheel-ui-1/dist/lib/wheel.css'

export default {
  components: {
    Button1_1,
    // Button1_2,
  }
};
</script>
  `;
}