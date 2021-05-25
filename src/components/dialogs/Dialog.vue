<template>
  <div class="button-wheel-1">
    <Button1_1 @click="xxx"/>
  </div>
  <div class="dialog-wheel-overlay">
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
            <Button1_2 :choose="0" button-name="Cancel"/>
            <Button1_2 :choose="1" button-name="Ok"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button1_1 from "../buttons/Button1_1.vue";
import Button1_2 from "../buttons/Button1_2.vue";

export default {
  components: {
    Button1_2,
    Button1_1,
  },
  setup() {
    const xxx = () => {
      console.log(1);
    };
    return {xxx};
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

  > .dialog-wheel-wrapper {
    position: absolute;
    left: 50%;
    top: 50vh;
    transform: translateX(-50%) translateY(-50%);

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
}
</style>