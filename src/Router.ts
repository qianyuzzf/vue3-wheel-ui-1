import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Button from './components/buttons/Button.vue';

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
        }
      ]
    }
  ]
});
