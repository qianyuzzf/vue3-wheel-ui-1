<template>
  <div class="theme4-wheel-disabled">
    <button class="theme4-wheel-white">
      <span>你好</span>
    </button>
    <button class="theme4-wheel-blue">
      <span>你好</span>
    </button>
    <button class="theme4-wheel-none">
      <span>你好</span>
    </button>
  </div>
</template>

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