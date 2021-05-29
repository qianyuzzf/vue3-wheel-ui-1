<template>
  <div class="theme4-wheel-disabled">
    <button class="theme4-wheel-white" v-if="!showOne || choose===0">
      <span>{{ buttonName1 }}</span>
    </button>
    <button class="theme4-wheel-blue" v-if="!showOne || choose===1">
      <span>{{ buttonName2 }}</span>
    </button>
    <button class="theme4-wheel-none" v-if="!showOne || choose===2">
      <span>{{ buttonName3 }}</span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    choose: {
      type: Number,
      default: 0
    },
    showOne: {
      type: Boolean,
      default: false
    },
    buttonName1: {
      type: String,
      default: '你好'
    },
    buttonName2: {
      type: String,
      default: '你好'
    },
    buttonName3: {
      type: String,
      default: '你好'
    },
  }
};
</script>

<style lang="scss">
@import "../../styles/var.scss";

.theme4-wheel-disabled {
  > button {
    > span {
      display: inline-block;
      padding: 0.3em 0.8em;
      cursor: not-allowed;
    }
  }

  > .theme4-wheel-white {
    padding: 0;
  }

  > .theme4-wheel-blue {
    padding: 0;
    background: $button-background-color1;
    border-color: $button-background-color1;

    > span {
      color: white;
    }
  }

  > .theme4-wheel-none {
    padding: 0;
    border-color: transparent;
    box-shadow: none;

    &:hover, &:focus {
      background: #f2f2f2;
      border-color: transparent;
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
}
</style>