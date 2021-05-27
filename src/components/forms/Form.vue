<template>
  <div class="form-wheel-code">
    <div class="form-wheel-code-demo">
      <form class="form-wheel-code-demo-1">
        <div class="form-wheel-activity-name">
          <span>Activity name:</span>
          <input type="text">
        </div>
        <div class="form-wheel-activity-password">
          <span>Activity password:</span>
          <input type="password">
        </div>
        <div class="form-wheel-activity-time">
          <span>Activity time:</span>
          <input type="date" value="2021-01-01">
        </div>
        <div class="form-wheel-activity-switch">
          <span>Instant delivery:</span>
          <Switch1 v-model:value="active"/>
        </div>
        <div class="form-wheel-activity-type">
          <span>Activity type:</span>
          <input id="form-wheel-activity-type1" type="checkbox" name="type1">
          <label for="form-wheel-activity-type1">Online</label>
          <input id="form-wheel-activity-type2" type="checkbox" name="type1">
          <label for="form-wheel-activity-type2">Promotion</label>
          <input id="form-wheel-activity-type3" type="checkbox" name="type1">
          <label for="form-wheel-activity-type3">Offline</label>
        </div>
        <div class="form-wheel-activity-resources">
          <span>Resources:</span>
          <input id="form-wheel-activity-resource1" type="radio" name="resource1">
          <label for="form-wheel-activity-resource1">Sponsor</label>
          <input id="form-wheel-activity-resource2" type="radio" name="resource1">
          <label for="form-wheel-activity-resource2">Venue</label>
        </div>
        <div class="form-wheel-activity-textarea">
          <span>Activity form:</span>
          <textarea/>
        </div>
        <div class="form-wheel-activity-submit">
          <input type="submit" value="Submit">
          <input type="reset" value="Reset">
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Switch1 from '../switches/Switch1.vue';
import {ref} from "vue";

export default {
  components: {
    Switch1
  },
  setup() {
    const active = ref(false);
    return {active};
  }
};
</script>

<style lang="scss">
@import "../../styles/var.scss";

.form-wheel-code {
  padding: 0 40px;

  > .form-wheel-code-demo {
    padding: 20px;

    > .form-wheel-code-demo-1 {
      > div {
        display: flex;
        margin: 30px 0;
        align-items: center;

        > span {
          margin-right: 10px;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          flex-direction: row-reverse;
          width: 200px;
          color: $form-span-color1;

          &::after {
            content: '✻';
            font-size: 0.1em;
            color: #f54c9a;
            margin: 0 3px;
          }
        }

        > input {
          height: 32px;
          padding: 4px 11px;
          line-height: 1.5;
          color: $form-input-color1;
          border: 1px solid $form-border-color1;
          border-radius: $form-border-radius;
          width: 300px;
          outline: none;
          cursor: text;

          &::-webkit-calendar-picker-indicator {
            filter: invert(0.65);
          }

          &:hover,
          &:focus {
            border-color: #40a9ff;
          }

          &:focus {
            box-shadow: $form-box-shadow1;
          }
        }
      }

      > .form-wheel-activity-switch {
        > span::after {
          content: '';
        }
      }

      > .form-wheel-activity-type {
        > input {
          width: 16px;
          height: 16px;
          cursor: pointer;
          border-radius: 2px;
          border-collapse: separate;
          opacity: 0.85;
          margin: 0 5px 0 20px;

          &#form-wheel-activity-type1 {
            margin: 0 5px 0 0;
          }

          &:focus {
            box-shadow: none;
          }
        }

        > label {
          cursor: pointer;
        }
      }

      > .form-wheel-activity-resources {
        > input {
          width: 16px;
          height: 16px;
          cursor: pointer;
          border-radius: 2px;
          border-collapse: separate;
          opacity: 0.85;
          margin: 0 5px 0 20px;

          &#form-wheel-activity-resource1 {
            margin: 0 5px 0 0;
          }

          &:focus {
            box-shadow: none;
          }
        }

        > label {
          cursor: pointer;
        }
      }

      > .form-wheel-activity-textarea {
        > textarea {
          height: 64px;
          padding: 6px 11px;
          line-height: 1.5;
          color: $form-input-color1;
          border: 1px solid $form-border-color1;
          border-radius: $form-border-radius;
          width: 300px;
          outline: none;
          cursor: text;
          resize: none;
          font: inherit;
          font-size: 14px;

          &::-webkit-calendar-picker-indicator {
            filter: invert(0.65);
          }

          &:hover,
          &:focus {
            border-color: #40a9ff;
          }

          &:focus {
            box-shadow: $form-box-shadow1;
          }
        }
      }

      > .form-wheel-activity-submit {
        padding-left: 200px;

        > input {
          width: auto;
          height: auto;
          cursor: pointer;
          color: $form-color1;
          background: white;
          border: 1px solid $form-border-color1;
          padding: 0.3em 0.8em;
          border-radius: $form-border-radius;
          margin: 15px;
          font-size: $form-normal-font-size;
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);

          &:hover, &:focus {
            color: $form-background-color1;
            border-color: $form-background-color1;
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

          &[type=submit] {
            background: $form-background-color1;
            border-color: $form-background-color1;
            color: white;

            &:hover, &:focus {
              background: $form-background-color2;
            }
          }
        }
      }
    }
  }
}

</style>