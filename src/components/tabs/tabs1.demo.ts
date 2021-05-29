export default function () {
  return `
<template>
  <div class="button-wheel-1">
    <Tabs1 :tabsText="tabsText"/>
  </div>
</template>

<script lang="ts">
import {Tabs1} from "vue3-wheel-ui-1";
import "vue3-wheel-ui-1/dist/lib/wheel.css";

export default {
  components: {
    Tabs1,
  },
  setup() {
    const tabsText = new Object({title: ['导航一', '导航二'], content: ['内容一', '内容二']});
    return {tabsText};
  }
};
</script>
  `;
}