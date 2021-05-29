<template>
  <div class="theme3-wheel-loads">
    <button v-if="!showOne || choose===0">
      <span class="theme3-wheel-load"></span>
      <span>{{ buttonName1 }}</span>
    </button>
    <button class="theme3-wheel-blue" v-if="!showOne || choose===1">
      <span class="theme3-wheel-load"></span>
      <span>{{ buttonName2 }}</span>
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
  }
};
</script>

<style lang="scss">
@import "../../styles/var.scss";

.theme3-wheel-loads {
  > button {
    display: inline-flex;
    align-items: center;

    > .theme3-wheel-load {
      display: inline-block;
      margin-right: 4px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border-color: $button-background-color1 $button-background-color1 $button-background-color1 transparent;
      border-style: solid;
      border-width: 2px;
      animation: rotate 1s infinite linear;

      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }

  > .theme3-wheel-blue {
    background: $button-background-color1;
    border-color: $button-background-color1;

    > span {
      color: white;
    }

    > .theme3-wheel-load {
      border-color: white white white transparent;
    }

    &:hover, &:focus {
      background: $button-background-color2;
    }
  }
}

</style>