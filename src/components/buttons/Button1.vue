<template>
  <div class="theme-wheel-type">
    <button class="white" :class="buttonSize">
      <span>你好</span>
    </button>
    <button class="blue" :class="buttonSize">
      <span>你好</span>
    </button>
    <button class="none" :class="buttonSize">
      <span>你好</span>
    </button>
    <button class="danger" :class="buttonSize">
      <span>你好</span>
    </button>
    <button class="dashed" :class="buttonSize">
      <span>你好</span>
    </button>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  props: {
    size: {
      type: String,
      default: 'normal'
    }
  },
  setup(props, context) {
    const buttonSize = ref('normal');
    if (props.size === 'big') {
      buttonSize.value = 'bigSize';
    } else if (props.size === 'small') {
      buttonSize.value = 'smallSize';
    }
    return {buttonSize};
  },
};
</script>

<style lang="scss">
@import "../../styles/var";

.button-wheel-1 {
  > div {
    > button {
      color: $button-color1;
      background: white;
      border: 1px solid $button-border-color1;
      padding: 0.3em 0.8em;
      border-radius: $button-border-radius;
      margin: 15px;
      font-size: $normal-font-size;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
      cursor: pointer;

      &.bigSize {
        font-size: $big-font-size;
      }

      &.smallSize {
        font-size: $small-font-size;
      }

      &:hover, &:focus {
        color: $button-background-color1;
        border-color: $button-background-color1;
        animation: shadow1 500ms;
        @keyframes shadow1 {
          0% {
            box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
          }
          50% {
            box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
          }
          100% {
            box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
          }
        }
      }

      &:focus {
        outline: none;
      }
    }
  }

  > .theme-wheel-type {
    > .blue {
      background: $button-background-color1;
      border-color: $button-background-color1;
      color: white;

      &:hover, &:focus {
        background: $button-background-color2;
      }
    }

    > .none {
      border-color: transparent;
      box-shadow: none;

      &:hover, &:focus {
        background: #f2f2f2;
        animation: shadow2 500ms;
        @keyframes shadow2 {
          0% {
            box-shadow: none;
          }
          50% {
            box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
          }
          100% {
            box-shadow: none;
          }
        }
      }
    }

    > .danger {
      background: #ff4d4f;
      color: white;


      &:hover, &:focus {
        background: #ff7875;
        color: white;
        border-color: #ff7875;
      }
    }

    > .dashed {
      border-style: dashed;
    }
  }
}
</style>

