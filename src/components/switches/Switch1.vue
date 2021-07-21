<template>
  <button class="switch-wheel-normal" :class="[{'switch-wheel-checked':value},{disabled:disabled}]"
          :disabled="disabled"
          @click="toggle"
          type='button'>
    <span></span>
  </button>
</template>

<script lang="ts">

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang="scss">
@import "../../styles/var.scss";

.switch-wheel-normal {
  border: none;
  height: $switch-height1;
  width: $switch-height2;
  background: #bfbfbf;
  border-radius: $switch-height4;
  position: relative;
  cursor: pointer;
  margin-left: 15px;
  @media (max-width: 600px) {
    cursor: auto;
  }

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $switch-height3;
    width: $switch-height3;
    background: white;
    border-radius: $switch-height5;
    transition: all 250ms;
  }

  &.disabled {
    cursor: not-allowed;
  }

  &.switch-wheel-checked {
    background: $button-background-color1;

    > span {
      left: calc(100% - #{$switch-height3} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $switch-height3 + 3px;
    }
  }

  &.switch-wheel-checked:active {
    > span {
      width: $switch-height3 + 3px;
      margin-left: -3px;
    }
  }
}

</style>