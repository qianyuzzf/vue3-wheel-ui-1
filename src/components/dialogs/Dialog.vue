<template>
  <div class="button-wheel-1">
    <Button1_1 @click="xxx"/>
  </div>
  <template v-if="visible">
    <div class="dialog-wheel-overlay" @click="onClickOverlay"></div>
    <div class="dialog-wheel-wrapper">
      <div class="dialog-wheel-1">
        <div class="dialog-wheel-header">
          <h1>标题</h1>
        </div>
        <div class="dialog-wheel-main">
          <p>内容一</p>
          <p>内容二</p>
        </div>
        <div class="dialog-wheel-footer">
          <div class="button-wheel-1">
            <Button1_2 :choose="3" button-name="Cancel" @click="cancel"/>
            <Button1_2 :choose="1" button-name="Ok" @click="ok"/>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import Button1_1 from "../buttons/Button1_1.vue";
import Button1_2 from "../buttons/Button1_2.vue";
import {ref} from "vue";

export default {
  components: {
    Button1_2,
    Button1_1,
  },
  setup() {
    const visible = ref(false);
    const close = () => {
      visible.value = false;
    };
    const xxx = () => {
      visible.value = !visible.value;
    };
    const ok = () => {
      close();
    };
    const cancel = () => {
      close();
    };
    const onClickOverlay = () => {
      close();
    };
    return {xxx, visible, ok, cancel, onClickOverlay};
  }
};
</script>

<style lang="scss">
@import "../../styles/var.scss";

.dialog-wheel-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $dialog-background-color1;
  z-index: 200;
}

.dialog-wheel-wrapper {
  position: fixed;
  left: 50%;
  top: 50vh;
  transform: translateX(-50%) translateY(-50%);
  z-index: 201;

  > .dialog-wheel-1 {
    display: inline-block;
    border-radius: $dialog-border-radius;
    background: white;
    min-width: 300px;
    max-width: 400px;
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.1);

    > .dialog-wheel-header {
      padding: 12px 16px;
      border-bottom: 1px solid $dialog-border-color1;
    }

    > .dialog-wheel-main {
      padding: 12px 16px;
      border-bottom: 1px solid $dialog-border-color1;

      > p {
        padding: 2px 0;
        font-size: 1.1em;
      }
    }

    > .dialog-wheel-footer {
      padding: 3px 5px;

      > .button-wheel-1 {
        display: flex;
        flex-direction: row-reverse;

        .theme1-wheel-blue {
          margin-right: 0;
        }
      }
    }
  }
}
</style>