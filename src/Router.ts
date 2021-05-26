import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Button from './components/buttons/Button.vue';
import Switch from './components/switches/Switch.vue';
import Dialog from './components/dialogs/Dialog.vue';
import Tabs from './components/tabs/Tabs.vue';
import Form from './components/forms/Form.vue';

const history = createWebHashHistory();

export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: 'button',
          component: Button
        },
        {
          path: 'switch',
          component: Switch
        },
        {
          path: 'dialog',
          component: Dialog
        },
        {
          path: 'tabs',
          component: Tabs
        },
        {
          path: 'form',
          component: Form
        }
      ]
    }
  ]
});
