export default function () {
  return `
<template>
  <div class="button-wheel-1">
    <Form1 :formText="formText"/>
  </div>
</template>

<script lang="ts">
import { Form1 } from "vue3-wheel-ui-1";
import "vue3-wheel-ui-1/dist/lib/wheel.css";

export default {
  components: {
    Form1,
  },
  setup() {
   const formText = new Object({
      name: 'Activity name',
      password: 'Activity password',
      time: ['Activity time', '2021-01-01'],
      choose: 'Instant delivery',
      checkbox: ['Activity type', 'Online', 'Promotion', 'Offline'],
      radio: ['Resources', 'Sponsor', 'Venue'],
      textarea: 'Activity form',
      submit: ['submit', 'Submit', 'reset', 'Reset']
    });
    return {formText};
  }
};
</script>
  `;
}