export default function () {
  return `
<template>
  <div class="button-wheel-1">
<!--:show-one="true" 时表示只选择一个，为 false 表示全部选择-->
<!--当 :show-one="true" 时用 :choose="n" 表示选择第几个-->
<!--button-name1="你好" 为第一个按钮名字，第二个为 button-name2="你好"-->
    <Button3 :show-one="true" :choose="0" button-name1="你好"/>
  </div>
</template>

<script lang="ts">
import { Button3 } from 'vue3-wheel-ui-1'
import 'vue3-wheel-ui-1/dist/lib/wheel.css'

export default {
  components: {
    Button3,
  }
};
</script>
  `;
}