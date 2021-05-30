<template>
  <button v-bind="$attrs">
    <span>{{ buttonName }} </span>
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    choose: {
      type: Number,
      default: -1
    },
    buttonName: {
      type: String,
      default: '你好'
    }
  },
};
</script>

<style lang="scss">
@import "../../styles/var.scss";

.button-wheel-1 {
  > div {
    > button {
      color: $button-color1;
      background: white;
      border: 1px solid $button-border-color1;
      padding: 0.3em 0.8em;
      border-radius: $button-border-radius;
      margin: 15px;
      font-size: $button-normal-font-size;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
      cursor: pointer;
      @media (max-width: 350px) {
        margin: 15px 8px;
      }

      &.theme1-wheel-big {
        font-size: $button-big-font-size;
      }

      &.theme1-wheel-small {
        font-size: $button-small-font-size;
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

  > .theme1-wheel-type {
    > .theme1-wheel-blue {
      background: $button-background-color1;
      border-color: $button-background-color1;
      color: white;

      &:hover, &:focus {
        background: $button-background-color2;
      }
    }

    > .theme1-wheel-none {
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

    > .theme1-wheel-danger {
      background: #ff4d4f;
      color: white;


      &:hover, &:focus {
        background: #ff7875;
        color: white;
        border-color: #ff7875;
      }
    }

    > .theme1-wheel-dashed {
      border-style: dashed;
    }
  }
}
</style>

