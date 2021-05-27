<template>
  <template v-if="visible">
    <div class="dialog-wheel-overlay" @click="onClickOverlay"></div>
    <div class="dialog-wheel-wrapper">
      <div class="dialog-wheel-1">
        <div class="dialog-wheel-header">
          <p>{{ dialogText.title }}</p>
        </div>
        <div class="dialog-wheel-main">
          <p v-for="c in dialogText.content">{{ c }}</p>
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

export default {
  components: {
    Button1_2,
    Button1_1,
  },
  props: {
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    },
    onClickOverlay: {
      type: Function
    },
    visible: {
      type: Boolean
    },
    dialogText: {
      type: Object,
      default: {title: '标题', content: ['内容一', '内容二']}
    }
  },
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

      > p {
        font-size: 22px;
        margin: 0;
      }
    }

    > .dialog-wheel-main {
      padding: 12px 16px;
      border-bottom: 1px solid $dialog-border-color1;

      > p {
        margin: 0;
        padding: 2px 0;
        font-size: 16px;
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