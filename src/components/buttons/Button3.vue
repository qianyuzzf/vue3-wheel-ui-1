<template>
  <div class="theme-wheel-loads">
    <button>
      <span class="theme-wheel-load"></span>
      <span>你好</span>
    </button>
    <button class="theme-wheel-blue">
      <span class="theme-wheel-load"></span>
      <span>你好</span>
    </button>
  </div>
</template>

<style lang="scss">
@import "../../styles/var.scss";

.theme-wheel-loads {
  > button {
    display: inline-flex;
    align-items: center;

    > .theme-wheel-load {
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

  > .theme-wheel-blue {
    background: $button-background-color1;
    border-color: $button-background-color1;
    color: white;

    > .theme-wheel-load {
      border-color: white white white transparent;
    }

    &:hover, &:focus {
      background: $button-background-color2;
    }
  }
}

</style>